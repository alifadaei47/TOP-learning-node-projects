import { getAllItems } from "../db/queries.js";

export async function getAllItemsCtrl(req, res) {
  const { category } = req.params;
  const items = await getAllItems(category);
  
  res.render('category', {items})
}
