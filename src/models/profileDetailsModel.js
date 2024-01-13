import mongoose from "mongoose";

const profileDetailsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
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
