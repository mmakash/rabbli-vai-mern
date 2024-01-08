const moongose = require('mongoose');
// const { boolean } = require('webidl-conversions');

const DataSchema = new moongose.Schema({
   title: {type: String, required: true},
   shortDes: {type: String, required: true},
   price: {type: String, required: true},
   discount: {type: Boolean,required: true},
   discountPrice: {type: String, required: true},
   image: {type: String, required: true},
   star: {type: String, required: true},
   stock: {type: Boolean, required: true},
   remark: {type: String, required: true},
   categoryID: {type: moongose.Schema.Types.ObjectId,required: true},
   brandID: {type: moongose.Schema.Types.ObjectId,required: true},
},
{timestamps: true, versionKey: false}
)

const ProductModel = moongose.model('products', DataSchema);
module.exports = ProductModel;