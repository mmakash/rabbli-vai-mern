import React from "react";
import UserSubmitButton from "./UserSubmitButton";
import { useUserStore } from "../../Store/UserStore";
import { useNavigate } from "react-router-dom";
import ValidationHelper from './../../Utility/ValidationHelper';
import toast from "react-hot-toast";

const OtpForm = () => {

  let { OtpFormData, OtpFormOnChange, VerifyLoginRequest } = useUserStore();
  let navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault()

    if (ValidationHelper.IsEmpty(OtpFormData.otp)) {
      toast.error("Please Enter Valid otp");
    }
    else {
      let res = await VerifyLoginRequest(OtpFormData.otp);
      res ? navigate("/") : toast.error("Please Enter Valid Email");
    }
  }

  return (
    <>
      <div className="container section">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <div className="card p-5">
              <h4>Enter Verification Code</h4>
              <p>
                A verification code has been sent to the email address you
                provide
              </p>
              <input
                value={OtpFormData.otp}
                onChange={(e) => OtpFormOnChange("otp", e.target.value)}
                placeholder="Verification"
                type="text"
                className="form-control"
              />
              <UserSubmitButton
                onClick={onFormSubmit}
                submit={false}
                className="btn mt-3 btn-success"
                text="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpForm;
