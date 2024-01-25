const {FeatureListService,LegalDetailsService} = require('../services/FeaturesService')
exports.FeaturesList=async(req,res)=>{
    let result=await FeatureListService(req);
    return res.status(200).json(result)
}
exports.LegalDetails=async(req,res)=>{
    let result=await LegalDetailsService(req);
    return res.status(200).json(result)
}