import express from 'express';

import {
  getProducts,
  getCategory,
  getSingleProduct,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:productId', getSingleProduct);
router.get('/category/:category', getCategory);

export default router;
