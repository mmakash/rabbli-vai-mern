const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    productID: {type:moongose.Schema.Types.ObjectId, required: true},
    userID: {type:moongose.Schema.Types.ObjectId, required: true},
    color: {type: String, required: true},
    qty: {type: String, required: true},
    size: {type: String, required: true}
},
{timestamps: true, versionKey: false}
)

const CartModel = moongose.model('carts', DataSchema);
module.exports = CartModel;