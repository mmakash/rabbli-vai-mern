const moongose = require('mongoose');

const DataSchema = new moongose.Schema({
  email: {type: String, required: true, unique: true, lowercase: true},
  otp: {type: String, required: true}
},
{timestamps: true, versionKey: false}
)

const UserModel = moongose.model('users', DataSchema);
module.exports = UserModel;