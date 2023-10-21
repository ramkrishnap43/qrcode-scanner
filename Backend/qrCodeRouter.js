const express = require("express");
const { scanQrCode } = require("./controller");
const qrRouter = express.Router();

qrRouter.post("/scanQrcode", scanQrCode)

module.exports = qrRouter