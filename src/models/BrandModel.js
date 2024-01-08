const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    brandName: {
        type: String,
        unique: true,
        required: true
    },
    brandImg: {
        type: String,
        required: true
    }
},
{timestamps: true, versionKey: false}
)

const BrandModel = moongose.model('brands', DataSchema);
module.exports = BrandModel;