const FeaturesModel = require("../models/FeaturesModel");
const LegalModel = require("../models/LegalModel");

const FeatureListService = async () => {
    try {
        const data = await FeaturesModel.find();
        return { status: "success", data: data };
      } catch (error) {
        return { status: "error", data: error }.toString();
      }
}
const LegalDetailsService = async (req) => {
    try {
       const type = req.params.type;
        const data = await LegalModel.find({ type: type });
        return { status: "success", data: data };
      } catch (error) {
        return { status: "error", data: error }.toString();
      }
}

module.exports = { 
  FeatureListService,
  LegalDetailsService
 }