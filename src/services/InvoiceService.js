const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const CartModel = require("../models/CartModel");
const ProfileModel = require("../models/ProfileModel");
const InvoiceModel = require("../models/InvoiceModel");
const InvoiceProductModel = require("../models/InvoiceProductModel");
const PaymentSettingModel = require("../models/PaymentSettingModel");

const FormData = require("form-data");
const axios = require("axios");



const CreateInvoiceService = async (req) => {
   
    
    let user_id=new ObjectID(req.headers.user_id);
    let cus_email=req.headers.email;


// =============Step 01: Calculate Total Payable & Vat=====================================================================================

    let matchStage={$match:{userID:user_id}}
    let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
    let unwindStage={$unwind:"$product"}
    let CartProducts=await CartModel.aggregate([matchStage,JoinStageProduct,unwindStage]);

    let totalAmount = 0;
    CartProducts.forEach((element) => {
        let price;
        if(element.product.discount){
            price=parseFloat(element.product.discountPrice);
        }
        else{
            price=parseFloat(element.product.price);
        }
        totalAmount += parseFloat(element.qty) * price;
    })

    let vat = totalAmount * 0.05;
    let Payable = totalAmount + vat;

    // step 2: prepare customer detail & shipping detail
    let profile = await ProfileModel.aggregate([matchStage]);
    let cus_detail = `Name: ${profile[0].cus_name}, Email: ${cus_email}, Address: ${profile[0].cus_address}, Phone: ${profile[0].cus_phone}`;
    let shipping_detail = `Name: ${profile[0].ship_name}, City: ${profile[0].ship_city}, Address: ${profile[0].ship_add}, Phone: ${profile[0].ship_phone}`;

    // step 3: transaction and other details
    let tran_id = Math.floor(100000 + Math.random() * 900000);
    let val_id = 0;
    let delivery_status = "Pending";
    let payment_status = "Pending";

    // step 4: create invoice
    let CreateInvoice = await InvoiceModel.create({
        userID:user_id,
        payable:Payable,
        cus_details:cus_detail,
        ship_details:shipping_detail,
        tran_id:tran_id,
        val_id:val_id,
        delivery_status:delivery_status,
        payment_status:payment_status,
        total:totalAmount,
        vat:vat,
    });

    // step 5: create invoice product
    let invoice_id = CreateInvoice._id;

    CartProducts.forEach(async(element) => {
        await InvoiceProductModel.create({
            userID:user_id,
            invoiceID:invoice_id,
            productID:element.productID,
            qty:element.qty,
            price:element.product.price ? element.product.discountPrice : element.product.price,
            color:element.color,
            size:element.size
        })
    });

    // step 6: create payment setting
    await CartModel.deleteMany({userID:user_id});

    // step 7: prepare for sslcommerz
    let PaymentSettings = await PaymentSettingModel.findOne();
    // console.log(PaymentSettings);
    const form = new FormData();
    // console.log(profile);

    form.append("store_id", PaymentSettings.store_id);
    form.append("store_passwd", PaymentSettings.store_passwd);
    form.append("total_amount", Payable.toString());
    form.append("currency", PaymentSettings.currency);
    form.append("tran_id", tran_id);

    form.append("success_url", `${PaymentSettings.success_url}/${invoice_id}`);
    form.append("fail_url", `${PaymentSettings.fail_url}/${invoice_id}`);
    form.append("cancel_url", `${PaymentSettings.cancel_url}/${invoice_id}`);
    form.append("ipn_url", `${PaymentSettings.ipn_url}/${invoice_id}`);

    form.append("cus_name", profile[0].cus_name);
    form.append("cus_email", cus_email);
    form.append("cus_add1", profile[0].cus_add);
    form.append("cus_add2", profile[0].cus_add);
    form.append("cus_city", profile[0].cus_city);
    form.append("cus_country", profile[0].cus_country);
    form.append("cus_postcode", profile[0].cus_postcode);
    form.append("cus_phone", profile[0].cus_phone);
    form.append("cus_fax", profile[0].cus_phone);

    form.append("shipping_method", "YES");

    form.append("ship_name", profile[0].ship_name);
    form.append("ship_add1", profile[0].ship_add);
    form.append("ship_add2", profile[0].ship_add);
    form.append("ship_city", profile[0].ship_city);
    form.append("ship_state", profile[0].ship_state);
    form.append("ship_postcode", profile[0].ship_postcode);
    form.append("ship_phone", profile[0].ship_phone);
    form.append("ship_country", profile[0].ship_country);
    form.append("product_name", "test product");
    form.append("product_category", "test category");
    form.append("product_profile", "test profile");
    form.append("product_amount", totalAmount.toString());

    

    let sslRes = await axios.post(
        PaymentSettings.init_url,
        form
    )


    return { status: "success", data: sslRes.data };
  
};

const PaymentSuccessService = async (req, res) => {

    try{

        let tran_id = req.params.trxId;
        await InvoiceModel.updateOne({tran_id:tran_id},{payment_status:"Success"});
        return { status: "success"};
    }
    catch(err){
        console.log(err);
    }
    
}
const PaymentFailService = async (req, res) => {

    try{

        let tran_id = req.params.trxId;
        await InvoiceModel.updateOne({tran_id:tran_id},{payment_status:"Fail"});
        return { status: "Fail"};
    }
    catch(err){
        console.log(err);
    }
    
}
const PaymentCancelService = async (req, res) => {

    try{

        let tran_id = req.params.trxId;
        await InvoiceModel.updateOne({tran_id:tran_id},{payment_status:"Cancel"});
        return { status: "Cancel"};
    }
    catch(err){
        console.log(err);
    }
    
}

const PaymentIpnService = async (req, res) => {
    try{

        let tran_id = req.params.trxId;
        let status = req.body.status;
        await InvoiceModel.updateOne({tran_id:tran_id},{payment_status:status});
        return { status: "success"}

    }
    catch(err){
        console.log(err);
    }
}

const InvoiceListService = async (req, res) => {

    try{
        let user_id = req.headers.user_id;
        const Invoice = await InvoiceModel.find({userID:user_id});
        return { status: "success", data: Invoice };
    }
    catch(err){
        console.log(err);
    }
}

const InvoiceProductListService = async (req, res) => {
    try{
        let user_id = new ObjectID(req.headers.user_id);
        let invoice_id = new ObjectID(req.params.invoice_id);

        let matchStage={$match:{userID:user_id,invoiceID:invoice_id}}
        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindStage={$unwind:"$product"}

        let products = await InvoiceModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindStage
        ]);

        return { status: "success", data: products };

    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    CreateInvoiceService,
    PaymentSuccessService,
    PaymentFailService,
    PaymentCancelService,
    PaymentIpnService,
    InvoiceListService,
    InvoiceProductListService
}