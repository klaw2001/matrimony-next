import mongoose, { Schema } from "mongoose";

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
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  images: {
    type: String,
    default: null,
  },
  about: {
    type: String,
    default: null,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    default: null,
    enum: ["male", "female"],
  },
  city: {
    type: String,
    default: null,
  },

  dob: {
    type: Date,
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
  weight: {
    type: Number,
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
  religion: {
    type: String,
    default: null,
  },
  jobType: {
    type: String,
    default: null,
    enum: ["Business", "Employee", "Government", "Jobless"],
  },
  company: {
    type: String,
    default: null,
  },
  salary: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: null,
  },
  degree: {
    type: String,
    default: null,
  },
  school: {
    type: String,
    default: null,
  },
  college: {
    type: String,
    default: null,
  },
  whatsapp: {
    type: String,
    default: null,
  },
  facebook: {
    type: String,
    default: null,
  },
  instagram: {
    type: String,
    default: null,
  },
  twitter: {
    type: String,
    default: null,
  },
  youtube: {
    type: String,
    default: null,
  },
  linkedin: {
    type: String,
    default: null,
  },
  hobbies: {
    type: String,
    default: null,
  },

  connectionRequests: [
    {
      requester: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
