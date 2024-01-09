import { create } from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
    BrandList: [],
    ListBySimilar: [],
    ListByKeyword: [],
    Detail: [],
    ReviewList: [],


BrandListRequest: async () => {
        const res = await axios.get("/api/v1/ProductBrandList");
        // console.log(res.data);
        if(res.data.status === "success"){
            set({BrandList: res.data.data})
        }
    },
    CategoryList: [],
CategoryListRequest: async () => {
        const res = await axios.get("/api/v1/ProductCategoryList");
        if(res.data.status === "success"){
            set({CategoryList: res.data.data})
        }
    },

    SliderList: [],
SliderListRequest: async () => {
        const res = await axios.get("/api/v1/ProductSliderList");
        if(res.data.status === "success"){
            set({SliderList: res.data.data})
        }
    },

    ListByRemark: [],
    ListByRemarkRequest: async (Remark) => {
        const res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
        if(res.data.status === "success"){
            set({ListByRemark: res.data.data})
        }
    },

    ListByBrand: [],
    ListByBrandRequest: async (BrandId) => {
        const res = await axios.get(`/api/v1/ProductListByBrand/${BrandId}`);
        if(res.data.status === "success"){
            set({ListByBrand: res.data.data})
        }
    },

    ListByCategory: [],
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