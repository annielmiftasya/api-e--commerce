const Product = require('../models/Product');
const Cart = require('../models/Cart');

module.exports = class {
   static async postCart (req, res, next) {
      const { productId, quantity } = req.body;

      try {
        const cart = null;
        const product = await Product.findOne({ _id: productId });
    
        if (!product) {
          res.status(404).send({ message: "product not found" });
          return;
        }
        const price = product.price;
        const title = product.title;
        //If cart already exists for user,
        if (cart) {
          const productIndex = cart.products.findIndex((product) => product.productId == productId);
          //check if product exists or not
    
          if (productIndex > -1) {
            let product = cart.products[productIndex];
            product.quantity += quantity;
    
            cart.bill = cart.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            },0)
            
            cart.products[productIndex] = product;
            await cart.save();
            res.status(200).send(cart);
          } else {
            cart.products.push({ productId, title, quantity, price });
            cart.bill = cart.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price;
            },0)
    
            await cart.save();
            res.status(200).send(cart);
          }
        } else {
          //no cart exists, create one
          const newCart = await Cart.create({
            products: [{ productId, title, quantity, price }],
            bill: quantity * price,
          });

          return res.status(201).send(newCart);
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong");
      }
  }
    static async getCart(req, res, next) {
       
        try {
         const barang = await Cart.find()
         const total = await Cart.aggregate([{
            "$group": {
                "_id": null,
                "total": {
                    "$sum": "$bill"
                }
            }
        }, {
            "$project": {
                "_id": 0
            }
        }])
        res.json({ barang, total })

     } catch (error) {
         console.log(error);
         res.status(500).send(error)
     }
    }

    static async editProductPost(req, res, next) {
       try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const barang = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

         res.status(200).send({
            status: 200,
            message: 'Berhasil',
            data: barang
         })
       } catch (error) {
         console.log(error);
         res.status(500).send(error)
      }
    }
    static async deleteCart(req, res, next) {
      try {
         const barang = await Cart.findByIdAndDelete(req.params.id)
         res.status(200).send({
            status: 200,
            message: 'Data Berhasil Di hapus',
            data: barang
         })
       } catch (error) {
         console.log(error);
         res.status(500).send(error)
      }
     
   }
}