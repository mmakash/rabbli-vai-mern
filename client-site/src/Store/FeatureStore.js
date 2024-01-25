import { create } from "zustand";
import axios from "axios";
import { API_BASE_URL } from "../config/config";

export const useFeatureStore = create((set) => ({
    FeatureList: [],
    FeatureListRequest: async () => {
        const res = await axios.get(API_BASE_URL + "/FeaturesList");
        if(res.data.status === "success"){
            set({FeatureList: await res.data.data})
        }
    },
    LegalDetails: [],
    LegalDetailsRequest: async (type) => {
        const res = await axios.get(API_BASE_URL + `/LegalDetails/${type}`);
        if(res.data.status === "success"){
            set({LegalDetails: await res.data.data})
        }
    },
}))





