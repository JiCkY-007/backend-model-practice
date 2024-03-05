import mongoose, { mongo } from 'mongoose';
import { Hospital } from './hospital.models';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonesWith: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',

    },
    
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
