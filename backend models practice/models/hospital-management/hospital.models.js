import mongoose, { mongo } from 'mongoose';

const hostpitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adrressLine1: {
      type: String,
      required: true,
    },
    adrressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specialisedin: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hostpitalSchema);
