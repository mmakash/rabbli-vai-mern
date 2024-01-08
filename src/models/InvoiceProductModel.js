const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    userID:{type: moongose.Schema.Types.ObjectId, required: true},
    invoiceID:{type: moongose.Schema.Types.ObjectId, required: true},
    productID:{type: moongose.Schema.Types.ObjectId, required: true},
    qty:{type: String, required: true},
    price:{type: String, required: true},
    color:{type: String, required: true},
    size:{type: String, required: true}
},
{timestamps: true, versionKey: false}
)

const InvoiceProductModel = moongose.model('invoiceproducts', DataSchema);
module.exports = InvoiceProductModel;