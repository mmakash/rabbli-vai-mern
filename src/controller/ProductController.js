const {BrandListService, CategoryListService, SliderListService, ListByBrandService, ListByCategoryService, ListBySimilarService, ListByKeywordService, ListByRemarkService, DetailService, ReviewListService,CreateReviewService, ListByFilterService} = require('../services/ProductService');
exports.ProductBrandList = async (req, res) => {
    let result = await BrandListService();
    return res.status(200).json(result);
};
exports.ProductCategoryList = async (req, res) => {
    let result = await CategoryListService();
    return res.status(200).json(result);
};
exports.ProductSliderList = async (req, res) => {
    let result = await SliderListService();
    return res.status(200).json(result);
};
exports.ProductListByBrand = async (req, res) => {
    let result = await ListByBrandService(req);
    return res.status(200).json(result);
};
exports.ProductListByCategory = async (req, res) => {
    let result = await ListByCategoryService(req);
    return res.status(200).json(result); 
};
exports.ProductListBySimilar = async (req, res) => {
    let result = await ListBySimilarService(req);
    return res.status(200).json(result);
    
};
exports.ProductListByKeyword = async (req, res) => {
    let result = await ListByKeywordService(req);
    return res.status(200).json(result);
};

exports.ProductListByRemark = async (req, res) => {

    let result = await ListByRemarkService(req);
    return res.status(200).json(result);
    
};
exports.ProductDetail = async (req, res) => {
    let result = await DetailService(req);
    return res.status(200).json(result);
}
exports.ProductReviewList = async (req, res) => {
    // 16 number video 4 minute 30s porjonto
    let result = await ReviewListService(req);
    return res.status(200).json(result);
};
exports.CreateReview = async (req, res) => {
    let result = await CreateReviewService(req);
    return res.status(200).json(result);
    
};

exports.ProductListByFilter = async (req, res) => {
    let result = await ListByFilterService(req);
    return res.status(200).json(result);
}