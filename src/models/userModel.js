import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  interests: {
    type: Array,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  age: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
  job: {
    type: String,
    default: null,
  },
  about: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
    enum: ["male", "female"],
  },
  images: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  infoName: {
    type: String,
    default: null,
  },
  fathersName: {
    type: String,
    default: null,
  },
  familyName: {
    type: String,
    default: null,
  },
  infoAge: {
    type: Number,
    default: null,
  },
  dob: {
    type: Date,
    default: null,
  },
  infoHeight: {
    type: Number,
    default: null,
  },
  weight: {
    type: Number,
    default: null,
  },
  degree: {
    type: String,
    default: null,
  },
  religion: {
    type: String,
    default: null,
  },
  profession: {
    type: String,
    default: null,
  },
  company: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: null,
  },
  salary: {
    type: String,
    default: null,
  },
  hobbies: {
    type: String,
    default: null,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
