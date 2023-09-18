const express = require("express");
const router = express.Router();
const allShoes = require("./controllers/allshoes");
const sandles = require("./controllers/sandles");
const path = require("path");

filePath = path.join(__dirname, "shoedata.json");

router.route("/").get(allShoes);
router.route("/sandles/").get(sandles);

module.exports = router;
