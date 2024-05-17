const express = require("express");
const { uploadImage, downloadImage } = require("../Controller/profileController");
const imageRouter = express.Router();

imageRouter.post("/upload", uploadImage);
imageRouter.post("/download", downloadImage);

module.exports = imageRouter;
