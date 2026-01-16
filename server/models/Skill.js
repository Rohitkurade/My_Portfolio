import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: String,
    proficiency: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      default: 'Intermediate',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Skill', skillSchema);
