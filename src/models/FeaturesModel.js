const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    name:{type: String, required: true},
    desc:{type: String, required: true},
    img:{type: String, required: true},
},
{timestamps: true, versionKey: false}
)

const FeaturesModel = moongose.model('features', DataSchema);
module.exports = FeaturesModel;