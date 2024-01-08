const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryImg: {
        type: String,
        required: true
    }
},
{timestamps: true, versionKey: false}
)

const CategoryModel = moongose.model('categories', DataSchema);
module.exports = CategoryModel;