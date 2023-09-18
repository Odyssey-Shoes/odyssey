const fs = require("fs");

const allShoes = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const shoeData = JSON.parse(data);
    res.status(200).send(shoeData);
  } catch (error) {
    next(error);
  }
};

module.exports = allShoes;
