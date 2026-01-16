import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
    },
    image: {
      type: String,
    },
    technologies: [String],
    frontend: [String],
    backend: [String],
    database: [String],
    devops: [String],
    liveDemo: String,
    frontendCode: String,
    backendCode: String,
    featured: {
      type: Boolean,
      default: false,
    },
    systemArchitecture: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
