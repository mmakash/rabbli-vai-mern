const express = require('express');
const ProductController = require('../controller/ProductController');
const UserController = require('../controller/UserController');
const WishListController = require('../controller/WishListController');
const CartListController = require('../controller/CartListController');
const AuthVerification = require('../middlewere/AuthVerification');
const InvoiceController = require('../controller/InvoiceController');
const FeaturesController = require('../controller/FeaturesController');


const router = express.Router();


// products
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandId", ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryId", ProductController.ProductListByCategory);
router.get("/ProductListBySimilar/:CategoryId", ProductController.ProductListBySimilar);
router.get("/ProductListByKeyword/:keyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark);
router.get("/ProductDetail/:ProductId", ProductController.ProductDetail);
router.get("/ProductReviewList/:ProductId", ProductController.ProductReviewList);

router.post("/ProductListByFilter", ProductController.ProductListByFilter);


// user
router.get("/UserOtp/:email", UserController.UserOtp);
router.get("/VerifyOtp/:email/:otp", UserController.VerifyOtp);
router.get("/UserLogOut",AuthVerification, UserController.UserLogOut);
router.post("/CreateProfile",AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile",AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile",AuthVerification, UserController.ReadProfile);

// wish
router.post("/SaveWishList",AuthVerification, WishListController.SaveWishList);
router.post("/RemoveWishList",AuthVerification, WishListController.RemoveWishList);
router.get("/WishList",AuthVerification, WishListController.WishList);

// cart
router.post("/SavedCartList",AuthVerification, CartListController.SavedCartList);
router.post("/RemoveCartList",AuthVerification, CartListController.RemoveCartList);
router.get("/CartList",AuthVerification, CartListController.CartList);
router.post("/UpdateCartList/:cartID",AuthVerification, CartListController.UpdateCartList);

// Invoice
router.get("/CreateInvoice",AuthVerification, InvoiceController.CreateInvoice);
router.get("/InvoiceList",AuthVerification, InvoiceController.InvoiceList);
router.get("/InvoiceProductList/:invoice_id", InvoiceController.InvoiceProductList);

router.post("/PaymentSuccess/:trxId", InvoiceController.PaymentSuccess);
router.post("/PaymentFail/:trxId", InvoiceController.PaymentFail);
router.post("/PaymentCancel/:trxId", InvoiceController.PaymentCancel);
router.post("/PaymentIPN/:trxId", InvoiceController.PaymentIPN);

// Feature
router.get("/FeaturesList", FeaturesController.FeaturesList);

// create Review

router.post("/CreateReview",AuthVerification, ProductController.CreateReview);


module.exports = router;