import mongoose, { Document, Schema } from 'mongoose';

export interface ICart {
    name: string;
    quantity:number;
    bill:number;
    products:string[];
}

export interface ICartModel extends ICart, Document {}
const ObjectID = mongoose.Schema.Types.ObjectId
const CartSchema: Schema = new Schema(
    {
      products: [{
         productId: {
          type: ObjectID,
          ref: 'Product',
          required: true
       },
       name: String,
       quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1},
          price: Number
        }],
       bill: {
           type: Number,
           required: true,
          default: 0
         }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<ICartModel>('Cart', CartSchema);
