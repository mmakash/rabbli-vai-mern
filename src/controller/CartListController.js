const {CartListService, UpdateCartListService, SavedCartListService, RemoveCartListService} = require("../services/CartListService");

exports.CartList=async(req,res)=>{
    let result=await CartListService(req);
    return res.status(200).json(result)
}
exports.UpdateCartList=async(req,res)=>{
    let result=await UpdateCartListService(req);
    return res.status(200).json(result)
}

exports.SavedCartList=async(req,res)=>{
    let result=await SavedCartListService(req);
    return res.status(200).json(result)
}

exports.RemoveCartList=async(req,res)=>{
    let result=await RemoveCartListService(req);
    return res.status(200).json(result)
}