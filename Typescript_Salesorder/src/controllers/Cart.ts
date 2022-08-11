import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Cart from '../models/Cart';
import Product from '../models/Product';

const createCart = (req: Request, res: Response, next: NextFunction) => {
  const { productId,quantity } = req.body;
  
  const product = Product.findById(productId);

    if (!product) {
      res.status(404).send({ message: "product not found" });
      return;
    }
  
    const price = product.price;
    const title = product.title;
    const newCart = new Cart({
        products: [{ productId, title, quantity, price }],
        bill: quantity * price,
      });

      return newCart
      .save()
      .then((newCart) => res.status(201).json({ newCart }))
      .catch((error) => res.status(500).json({ error }));
  
};




export default { createCart};

