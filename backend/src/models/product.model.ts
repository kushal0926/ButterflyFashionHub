import mongoose, { Schema } from "mongoose";

interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestSeller: boolean;
  date: Date;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Prdouct description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  image: {
    type: [String],
    required: [true, "Product image is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  subCategory: {
    type: String,
    required: [true, "Product subCategory is also required"],
  },
  sizes: {
    type: [String],
    required: [true, "Product sizes is also required"],
  },
  bestSeller: {
    type: Boolean,
    required: [true, "Check if it is best seller or not"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model<Product>("Product", productSchema);

export default Product;
