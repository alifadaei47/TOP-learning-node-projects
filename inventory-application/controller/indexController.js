import { getAllCategories } from "../db/queries.js";

export async function getAllCategoriesCtrl() {
  const categories = await getAllCategories();
  console.log(categories);
  return;
}

