const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const { name, items, total, address } = req.body;
  const newOrder = new Order({ name, items, total, address });
  await newOrder.save();
  res.status(201).send("Order placed!");
});

router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;