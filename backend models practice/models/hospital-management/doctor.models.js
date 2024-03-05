import mongoose, { mongo } from 'mongoose';
const TimeBatchInHospital = new mongoose.Schema({
  batchTime: {
    type: String,
    required: true,
  },
});
export const BatchTime = mongoose.model('BatchTime', TimeBatchInHospital);
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: type,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
      required: true,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
    timingInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BatchTime',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('MedicalRecord', doctorSchema);
