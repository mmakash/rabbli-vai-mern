import { create } from "zustand";
import axios from "axios";

const FeatureStore = create((set) => ({
    FeatureList: [],
    FeatureListRequest : async () => {
        const res = await axios.get("http://localhost:5000/api/v1/FeatureList");
        console.log(res);

        if(res.data.status === "success"){
            await set({FeatureList: res.data.data})
        }
    }
}))

export default FeatureStore;
