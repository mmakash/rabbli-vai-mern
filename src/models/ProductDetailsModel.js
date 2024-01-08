const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
   img1:{type: String, required: true},
   img2:{type: String, required: true},
   img3:{type: String, required: true},
   img4:{type: String, required: true},
   img5:{type: String},
   img6:{type: String},
   img7:{type: String},
   img8:{type: String},
   desc:{type: String},
   color:{type: String},
   size:{type: String},
   productID:{type: moongose.Schema.Types.ObjectId, required: true},
},
{timestamps: true, versionKey: false}
)

const ProductDetailsModel = moongose.model('productdetails', DataSchema);
module.exports = ProductDetailsModel;