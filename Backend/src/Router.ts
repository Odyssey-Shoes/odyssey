import { Router } from "express";

const router = Router();

// basic routes goes here

// getting a product

router.get("/products", (req, res) => {
  res.json({ message: "you are trying to view all products" });
});

export default router;
