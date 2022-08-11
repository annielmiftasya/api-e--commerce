const Product = require('../models/Product');

module.exports = class {
   static async postProduct (req, res, next) {
      try {
          const barang = await Product.create({
            title : req.body.title,
            imageURL : req.body.imageURL,
            price : req.body.price,
            description : req.body.description,
          })
          res.status(200).send({
              status: 200,
              message: 'Data mobil berhasil ditambah!',
              data: barang
          })
      } catch (error) {
          console.log(error);
          res.status(500).send(error)
      }
  }
    static async getAllProducts(req, res, next) {
       
        try {
         const barang = await Product.find()
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

  

    static async getProductDetail(req, res, next) {
      try {
       const barang = await Product.findById(req.params.prodId)
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
    static async deleteProduct(req, res, next) {
        try {
         const barang = await Product.findByIdAndDelete(req.params.id)
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