const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ReviewModel = require("../models/ReviewModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const BrandListService = async () => {
  try {
    const data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};
const CategoryListService = async () => {
  try {
    const data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};
const SliderListService = async () => {
  try {
    const data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};
const ListByBrandService = async (req) => {
  try {
    let BrandId = new ObjectId(req.params.BrandId);
    let MatchStage = { $match: { brandID: BrandId } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brands" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};
const ListByCategoryService = async (req) => {
  try {
    let CategoryId = new ObjectId(req.params.CategoryId);
    let MatchStage = { $match: { categoryID: CategoryId } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brands" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};
const ListByRemarkService = async (req) => {
  try {
    let Remark = req.params.Remark;
    let MatchStage = { $match: { remark: Remark } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brands" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "error", data: error }.toString();
  }
};

const ListBySimilarService = async () => {

    try{

        let CategoryId = new ObjectId(req.params.CategoryId);
    let MatchStage = { $match: { categoryID: CategoryId } };

    let limitStage = {$limit: 20}

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brands" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      limitStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  

    }
    catch(error){
        return { status: "error", data: error }.toString();
    }

};

const DetailService = async (req) => {
    
    try{
  
      let ProductId = new ObjectId(req.params.ProductId);
      let MatchStage = { $match: { _id: ProductId } };
  
      let JoinWithBrandStage = {
        $lookup: {
          from: "brands",
          localField: "brandID",
          foreignField: "_id",
          as: "brands",
        },
      };
      let JoinWithCategoryStage = {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      };
      let JoinWithDetailStage = {
        $lookup: {
          from: "productdetails",
          localField: "_id",
          foreignField: "productID",
          as: "details",
        },
      };
  
     
  
      let UnwindBrandStage = { $unwind: "$brands" };
      let UnwindCategoryStage = { $unwind: "$category" };
      let UnwindDetailStage = { $unwind: "$details" };
  
      let ProjectionStage = {
          $project: {
            "brand._id": 0,
            "category._id": 0,
            categoryID: 0,
            brandID: 0,
          },
        };
  
      let data = await ProductModel.aggregate([
          MatchStage,
          JoinWithBrandStage,
          JoinWithCategoryStage,
          JoinWithDetailStage,
          UnwindBrandStage,
          UnwindCategoryStage,
          UnwindDetailStage,
          ProjectionStage,
  
      ])
  
      return { status: "success", data: data };
  
    }
    catch(error){
      return { status: "error", data: error }.toString();
    }
  
  
  };


const ListByKeywordService = async (req) => {

try{

    let SerachRegex = { $regex: req.params.keyword, $options: "i" };
    let SearchParams = [{title: SerachRegex}, {shortDes: SerachRegex}];
    let SearchQuery = {$or: SearchParams};
    let MatchStage = { $match: SearchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindBrandStage = { $unwind: "$brands" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };


}
catch(error){
    return { status: "error", data: error }.toString();
}

};

const ReviewListService = async (req) => {

  try{

    let ProductId = new ObjectId(req.params.ProductId);
    
    let MatchStage={$match:{productID:ProductId}}

    let JoinWithProfileStage= {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
    let UnwindProfileStage={$unwind:"$profile"}
    let ProjectionStage= {$project: {'desc': 1, 'rating': 1, 'profile.cus_name': 1}}

    let data= await  ReviewModel.aggregate([
        MatchStage,
        JoinWithProfileStage,
        UnwindProfileStage,
        ProjectionStage
    ])


    return { status: "success", data: data };

  }
  catch(error){
    return { status: "error", data: error }.toString();
  }


};

const CreateReviewService = async (req) => {

  try{
    let reqBody = req.body;
    let user_id = req.headers.user_id;
    let data = await ReviewModel.create({
    productID: reqBody.productID,
    userID: user_id,
    desc: reqBody.desc,
    rating: reqBody.rating
    });

    return { status: "success", data: data };

  }
  catch(error){
    return { status: "error", data: error }.toString();
  }
  
  
}

const ListByFilterService = async (req) => {
  try {

      let matchConditions = {};
      if (req.body['categoryID']) {
          matchConditions.categoryID = new ObjectId(req.body['categoryID']);
      }
      if (req.body['brandID']) {
          matchConditions.brandID = new ObjectId(req.body['brandID']);
      }
      let MatchStage = { $match: matchConditions };



      let AddFieldsStage = {
          $addFields: { numericPrice: { $toInt: "$price" }}
      };
      let priceMin = parseInt(req.body['priceMin']);
      let priceMax = parseInt(req.body['priceMax']);
      let PriceMatchConditions = {};
      if (!isNaN(priceMin)) {
          PriceMatchConditions['numericPrice'] = { $gte: priceMin };
      }
      if (!isNaN(priceMax)) {
          PriceMatchConditions['numericPrice'] = { ...(PriceMatchConditions['numericPrice'] || {}), $lte: priceMax };
      }
      let PriceMatchStage = { $match: PriceMatchConditions };






      let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
      let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
      let UnwindBrandStage={$unwind:"$brand"}
      let UnwindCategoryStage={$unwind:"$category"}
      let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

      let data= await  ProductModel.aggregate([
          MatchStage,
          AddFieldsStage,
          PriceMatchStage,
          JoinWithBrandStage,JoinWithCategoryStage,
          UnwindBrandStage,UnwindCategoryStage, ProjectionStage
      ])
      return {status:"success",data:data}

  }catch (e) {
      return {status:"fail",data:e}.toString()
  }
}


module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListBySimilarService,
  ListByKeywordService,
  ListByRemarkService,
  DetailService,
  ReviewListService,
  CreateReviewService,
  ListByFilterService
};
