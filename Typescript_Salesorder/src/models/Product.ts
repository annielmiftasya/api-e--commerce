import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    title: string;
    price:number;
    imageURL:string;
    description:string;
}

export interface IProductModel extends IProduct, Document {}
const ProductSchema: Schema = new Schema(
    {
      title: {
         type: String,
         required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      imageURL: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IProductModel>('Product', ProductSchema);
