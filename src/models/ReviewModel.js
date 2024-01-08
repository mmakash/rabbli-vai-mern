const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    productID: {type:moongose.Schema.Types.ObjectId, required: true},
    userID: {type:moongose.Schema.Types.ObjectId, required: true},
    desc: {type: String, required: true},
    rating: {type: String, required: true}
},
{timestamps: true, versionKey: false}
)

const ReviewModel = moongose.model('reviews', DataSchema);
module.exports = ReviewModel;