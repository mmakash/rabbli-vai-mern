import { create } from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
    BrandList: [],
    CategoryList: [],
    SliderList: [],
    ListByBrand: [],
    ListByCategory: [],
    ListBySimilar: [],
    ListByKeyword: [],
    ListByRemark: [],
    Detail: [],
    ReviewList: [],


BrandListRequest: async () => {
        const res = await axios.get("/api/v1/ProductBrandList");
        // console.log(res.data);
        if(res.data.status === "success"){
            set({BrandList: res.data.data})
        }
    },
CategoryListRequest: async () => {
        const res = await axios.get("/api/v1/ProductCategoryList");
        if(res.data.status === "success"){
            set({CategoryList: res.data.data})
        }
    },
SliderListRequest: async () => {
        const res = await axios.get("/api/v1/ProductSliderList");
        if(res.data.status === "success"){
            set({SliderList: res.data.data})
        }
    },
    ListByBrandRequest: async (BrandId) => {
        const res = await axios.get(`/api/v1/ProductListByBrand/${BrandId}`);
        if(res.data.status === "success"){
            set({ListByBrand: res.data.data})
        }
    },
    ListByCategoryRequest: async (CategoryId) => {
        const res = await axios.get(`/api/v1/ProductListByCategory/${CategoryId}`);
        if(res.data.status === "success"){
            set({ListByCategory: res.data.data})
        }
    },
    ListBySimilarRequest: async (CategoryId) => {
        const res = await axios.get(`/api/v1/ProductListBySimilar/${CategoryId}`);
        if(res.data.status === "success"){
            set({ListBySimilar: res.data.data})
        }
    },
    ListByKeywordRequest: async (keyword) => {
        const res = await axios.get(`/api/v1/ProductListByKeyword/${keyword}`);
        if(res.data.status === "success"){
            set({ListByKeyword: res.data.data})
        }
    },
    ProductDetailRequest: async (ProductId) => {
        const res = await axios.get(`/api/v1/ProductDetail/${ProductId}`);
        if(res.data.status === "success"){
            set({Detail: res.data.data})
        }
    },
    ProductReviewListRequest: async (ProductId) => {
        const res = await axios.get(`/api/v1/ProductReviewList/${ProductId}`);
        if(res.data.status === "success"){
            set({ReviewList: res.data.data})
        }
    },



}))



export default ProductStore;