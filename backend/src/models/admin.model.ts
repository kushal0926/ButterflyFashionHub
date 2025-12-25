import mongoose, { Schema } from "mongoose";

interface Admin {
  name: string;
  email: string;
  password: string;
  role: string;
}

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Admin name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "Admin email is requires"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please fill up a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Admin password is required"],
      minLength: 6,
    },
    role: {
      type: String,
      default: "admin", // optional: "user", "admin", etc.
    },
  },
  { timestamps: true },
);

const Admin = mongoose.model<Admin>("Admin", adminSchema);

export default Admin;
