import { create } from "zustand";
import axios from "axios";
import { API_BASE_URL } from "../config/config";


const useProductStore = create((set) => ({
    BrandList: [],
    ListBySimilar: [],
    ListByKeyword: [],
    Details: [],
    ReviewList: [],
    CategoryList: [],
    SliderList: [],


BrandListRequest: async () => {
        const res = await axios.get(API_BASE_URL + "/ProductBrandList");
        if (res.data.status === "success") {
            set({ BrandList: res.data.data })
        }
    },

CategoryListRequest: async () => {
        const res = await axios.get(API_BASE_URL + "/ProductCategoryList");
        if (res.data.status === "success") {
            set({ CategoryList: res.data.data })
        }
    },  
SliderListRequest: async () => {
        const res = await axios.get(API_BASE_URL + "/ProductSliderList");
        if (res.data.status === "success") {
            set({ SliderList: res.data.data })
        }
    },


    ListByRemark: [],
    ListByRemarkRequest: async (Remark) => {
        const res = await axios.get(API_BASE_URL + `/ProductListByRemark/${Remark}`);
        if (res.data.status === "success") {
            set({ ListByRemark: res.data.data })
        }
    },

    ListProduct: [],
    ListByBrandRequest: async (BrandId) => {
        const res = await axios.get(API_BASE_URL + `/ProductListByBrand/${BrandId}`);
        if (res.data.status === "success") {
            set({ ListProduct: res.data.data })
        }
    },

    ListByCategoryRequest: async (CategoryId) => {
        const res = await axios.get(API_BASE_URL + `/ProductListByCategory/${CategoryId}`);
        if (res.data.status === "success") {
            set({ ListProduct: res.data.data })
        }
    },
    ListBySimilarRequest: async (CategoryId) => {
        const res = await axios.get(API_BASE_URL + `/ProductListBySimilar/${CategoryId}`);
        if (res.data.status === "success") {
            set({ ListBySimilar: res.data.data })
        }
    },
    ListByKeywordRequest: async (keyword) => {
        const res = await axios.get(API_BASE_URL + `/ProductListByKeyword/${keyword}`);
        if (res.data.status === "success") {
            set({ ListProduct: res.data.data })
        }
    },
    
    ListByFilterRequest: async (postBody) => {
        // set({ ListProduct: [] })
        const res = await axios.post(API_BASE_URL + `/ProductListByFilter/${postBody}`);
        if (res.data.status === "success") {
            set({ ListProduct: res.data.data })
        }
    },

    ProductDetailRequest: async (ProductId) => {
        const res = await axios.get(API_BASE_URL + `/ProductDetail/${ProductId}`);
        if (res.data.status === "success") {
            set({ Details: res.data.data })
        }
    },
    ProductReviewListRequest: async (ProductId) => {
        const res = await axios.get(API_BASE_URL + `/ProductReviewList/${ProductId}`);
        if (res.data.status === "success") {
            set({ ReviewList: res.data.data })
        }
    },

    SearchKeyWord: "",
    SearchKeyWordRequest: async (keyWord) => {
        set({ SearchKeyWord: keyWord })
    }

}))






export default useProductStore;

