const express = require("express");
const router = express.Router();
const allShoes = require("./controllers/allshoes");
const addshoe = require("./controllers/addshoe");
const path = require("path");

filePath = path.join(__dirname, "shoedata.json");
router.route("/api/v1/addshoe/").post(addshoe);
router.route("/api/v1/allshoes").get(allShoes);

module.exports = router;
