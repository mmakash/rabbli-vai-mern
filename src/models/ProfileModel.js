const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
    userID: {type:moongose.Schema.Types.ObjectId, required: true},
    cus_add: {type: String},
    cus_city: {type: String},
    cus_country: {type: String},
    cus_fax: {type: String},
    cus_name: {type: String},
    cus_phone: {type: String},
    cus_postcode: {type: String},
    ship_add: {type: String},
    ship_city: {type: String},
    ship_country: {type: String},
    ship_name: {type: String},
    ship_phone: {type: String},
    ship_postcode: {type: String},
    ship_state: {type: String}
},
{timestamps: true, versionKey: false}
)

const ProfileModel = moongose.model('profiles', DataSchema);
module.exports = ProfileModel;