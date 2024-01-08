const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    title:{type: String, required: true},
    desc:{type: String,required: true},
    price:{type: String, required: true},
    imgage:{type: String, required: true},
   productID:{type: moongose.Schema.Types.ObjectId,required: true},
},
{timestamps: true, versionKey: false}
)

const ProductSliderModel = moongose.model('productsliders', DataSchema);
module.exports = ProductSliderModel;