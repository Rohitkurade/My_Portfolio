import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: Date,
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
    description: String,
    technologies: [String],
    website: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
