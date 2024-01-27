import { create } from "zustand";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { getEmail, setEmail } from "../Utility/utility";

export const useUserStore = create((set) => ({

    LoginFormData:{email:""},
    LoginFormOnChange: (name,value) => {
        set((state) => ({ LoginFormData: { ...state.LoginFormData, [name]: value } }));
    },
    OtpFormData:{otp:""},
    OtpFormOnChange: (name,value) => {
        set((state) => ({ LoginFormData: { ...state.LoginFormData, [name]: value } }));
    },


    isFormSubmit: false,
    UserOtpRequest: async (email) => {
        set({ isFormSubmit: true });
        let res = await axios.get(API_BASE_URL + `/UserOtp/${email}`);
        setEmail(email)
        set({ isFormSubmit: false });
        return res.data.status === "success";
    },
    VerifyLoginRequest: async (otp) => {
        set({isFormSubmit:true})
        const email = getEmail();
        let res = await axios.get(API_BASE_URL + `/VerifyOtp/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data.status === "success";
    },
}))