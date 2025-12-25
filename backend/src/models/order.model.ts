import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid"; // to generate order numbers

interface Order {
    items: [string];
    amount: number;
    address: object;
    status: string;
    paymentMethod: string;
    payment: boolean;
    date: Date;
    orderNumber: string;
}

const orderSchema = new Schema({
  //   userId: { type: String, required: true }, user id if implemented
  items: {
    type: [String],
    required: [true, "Items are required"],
  },
  amount: { 
      type: Number, 
      required: [true, "Items amount should be filled"] 
  },
  address: { 
      type: Object, 
      required: [true, "Address is required"] 
  },
  status: { 
      type: String, 
      required: true, 
      default: "Order is placed" 
  },
  paymentMethod: { 
      type: String, 
      required: [true, "You have to choose your payment method"] 
  },
  payment: { 
      type: Boolean, 
      required: [true, "You have to choose ur paymaent method"], 
      default: false 
  },
  date: { 
      type: Number, 
      required: true 
  },
  orderNumber: {
    type: String,
    unique: true,
    default: () => uuidv4().slice(0, 8).toUpperCase(), // makes an id of 8 digits
  }, // short UUID
});

const Order =  mongoose.model<Order>("Order", orderSchema);
export default Order;
