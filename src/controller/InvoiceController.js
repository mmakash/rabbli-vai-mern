const { CreateInvoiceService, PaymentSuccessService, PaymentFailService, PaymentCancelService, PaymentIpnService, InvoiceListService, InvoiceProductListService } = require("../services/InvoiceService");

exports.CreateInvoice = async (req, res) => {
    const result = await CreateInvoiceService(req, res);
    res.status(200).json(result);
}

exports.PaymentSuccess = async (req, res) => {
    const result = await PaymentSuccessService(req, res);
    res.status(200).json(result);
}

exports.PaymentFail = async (req, res) => {
    const result = await PaymentFailService(req, res);
    res.status(200).json(result);
}

exports.PaymentCancel = async (req, res) => {
    const result = await PaymentCancelService(req, res);
    res.status(200).json(result);
}
exports.PaymentIPN = async (req, res) => {
    const result = await PaymentIpnService(req, res);
    res.status(200).json(result);
}
exports.InvoiceList = async (req, res) => {
    const result = await InvoiceListService(req, res);
    res.status(200).json(result);
}

exports.InvoiceProductList = async (req, res) => {
    const result = await InvoiceProductListService(req, res);
    res.status(200).json(result);
}
