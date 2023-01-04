import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryBeingCreated = new Category();

  Object.assign(categoryBeingCreated, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(categoryBeingCreated);

  return res.status(201).json({ categoryBeingCreated });
});

export { categoriesRoutes };
