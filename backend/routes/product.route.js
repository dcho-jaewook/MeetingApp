import express from "express";

import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Access all the products
router.get("/", getProducts);

// Generates new product
router.post("/", createProduct);

// use app.patch() for individual or some of the resourses
// use app.put() for updating all the fields
// but doesn't really matter for this
router.put("/:id", updateProduct);

// Deletes new product
router.delete("/:id", deleteProduct);

export default router;