const fs = require("fs");

const addshoe = async (req, res, next) => {
  try {
    const data = fs.readFileSync(filePath);
    const shoeData = JSON.parse(data);
    console.log(req.body);
    const newShoe = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      color: req.body.color,
      size: req.body.size,
      description: req.body.description,
      specifications: req.body.specifications,
      category: req.body.category,
      availability: req.body.availability,
    };
    shoeData.push(newShoe);
    fs.writeFileSync(filePath, JSON.stringify(shoeData));
    res.status(201).send(newShoe);
  } catch (error) {
    next(error);
  }
};

module.exports = addshoe;
