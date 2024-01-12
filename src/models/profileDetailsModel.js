import mongoose from "mongoose";

const profileDetailsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    images: {
      type: String,
    },
    contactInfo: [
      {
        phone: {
          type: Number,
        },
        email: {
          type: String,
        },
        address: {
          type: String,
        },
      },
    ],
    personalInfo: [
      {
        infoName: {
          type: String,
        },
        fathersName: {
          type: String,
        },
        familyName: {
          type: String,
        },
        infoAge: {
          type: Number,
        },
        dob: {
          type: Date,
        },
        infoHeight: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        degree: {
          type: String,
        },
        religion: {
          type: String,
        },
        profession: {
          type: String,
        },
        company: {
          type: String,
        },
        position: {
          type: String,
        },
        salary: {
          type: String,
        },
      },
    ],
    hobbies: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProfileDetails =
  mongoose.models.ProfileDetails ||
  mongoose.model("ProfileDetails", profileDetailsSchema);

export default ProfileDetails;
