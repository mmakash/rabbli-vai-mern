const { UserOptService, verifyOtpService, SavedProfileService, ReadProfileService } = require("../services/UserService");

exports.UserOtp = async (req, res) => {
    let result = await UserOptService(req);
    return res.status(200).json(result);
}

exports.VerifyOtp = async (req, res) => {
    let result = await verifyOtpService(req);

    if (result["status"] === "success") {

        // cookie option
        let cookieOption = {
            expires: new Date(Date.now() + 24*6060*1000),
            httpOnly: false
        }
        // set cookie with response
        res.cookie("token", result["token"], cookieOption);

        return res.status(200).json(result);
    }
    else{
        return res.status(200).json(result);
    }

}

exports.UserLogOut = async (req, res) => {

    let cookieOption = {
        expires: new Date(Date.now() - 24*6060*1000),
        httpOnly: false
    }
    // set cookie with response
    res.cookie("token", "", cookieOption);
    return res.status(200).json({status:"success", message:"Logout Successfully"});
    
}
exports.CreateProfile = async (req, res) => {
    let result = await SavedProfileService(req);
    return res.status(200).json(result);
}

exports.UpdateProfile = async (req, res) => {
    let result = await SavedProfileService(req);
    return res.status(200).json(result);
}

exports.ReadProfile = async (req, res) => {
    let result = await ReadProfileService(req);
    return res.status(200).json(result);
    
}