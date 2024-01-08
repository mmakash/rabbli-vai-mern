const FeaturesModel = require("../models/FeaturesModel");

const FeatureListService = async () => {
    try {
        const data = await FeaturesModel.find();
        return { status: "success", data: data };
      } catch (error) {
        return { status: "error", data: error }.toString();
      }
}

module.exports = { FeatureListService }