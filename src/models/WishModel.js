const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    productID: {type:moongose.Schema.Types.ObjectId, required: true},
    userID: {type:moongose.Schema.Types.ObjectId, required: true}
},
{timestamps: true, versionKey: false}
)

const WishModel = moongose.model('wishes', DataSchema);
module.exports = WishModel;