const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const productsRouter = require('./products.router');
const imageRouter = require('./image.router');
const purchaseRouter = require('./purchase.router');
const cartRouter = require('./cart.router')

const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products',productsRouter);
router.use('/product_images', imageRouter);
router.use('/cart',cartRouter);
router.use('/purchase',purchaseRouter);
module.exports = router;

