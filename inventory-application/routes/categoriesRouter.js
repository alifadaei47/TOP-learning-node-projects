import {Router} from 'express'
import * as categoriesController from "../controller/categoriesController.js";
export const categoriesRouter = Router()

categoriesRouter.get('/:category', categoriesController.getAllItemsCtrl)
