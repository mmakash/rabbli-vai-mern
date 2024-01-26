import React from "react";
import UserSubmitButton from "./UserSubmitButton";
import { useUserStore } from "../../Store/UserStore";
import ValidationHelper from './../../Utility/ValidationHelper';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  let navigate = useNavigate();
  let { LoginFormData, LoginFormOnChange , UserOtpRequest } = useUserStore();

  async function onFormSubmit() {
    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Please Enter Valid Email");
    }
    else {
      let res = await UserOtpRequest(LoginFormData.email);
      res ? navigate("/otp") : toast.error("Please Enter Valid Email");
    }
  }

  return (
    <>
      <div className="container section">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card p-5">
              <h4>Enter Your Email</h4>
              <p>
                A verification code will be sent to the email address you
                provide
              </p>
              <input
                value={LoginFormData.email}
                onChange={(e) => LoginFormOnChange("email", e.target.value)}
                placeholder="Email Address"
                type="email"
                className="form-control"
              />
              <UserSubmitButton
                onClick={onFormSubmit}
                submit={false}
                className="btn mt-3 btn-success"
                text="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
