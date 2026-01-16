import Experience from '../models/Experience.js';

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createExperience = async (req, res) => {
  const experience = new Experience(req.body);
  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    Object.assign(experience, req.body);
    const updatedExperience = await experience.save();
    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    await Experience.deleteOne({ _id: req.params.id });
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
