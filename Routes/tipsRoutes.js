const express = require("express");
const { tipsController } = require("../Controller/tipsController");
const tipsRouter = express.Router();

tipsRouter.get("/tips", tipsController);

module.exports = tipsRouter;