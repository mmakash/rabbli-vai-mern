import { create } from "zustand";
import axios from "axios";

const FeatureStore = create((set) => ({
    FeatureList: [],
    FeatureListRequest : async () => {
        const res = await axios.get("/api/v1/FeatureList");

        if(res.data.status === "success"){
            set({FeatureList: res.data.data})
        }
    }
}))

export default FeatureStore;
