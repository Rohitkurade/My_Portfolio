import Skill from '../models/Skill.js';

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSkillsByCategory = async (req, res) => {
  try {
    const skills = await Skill.find({ category: req.params.category }).sort({ order: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSkill = async (req, res) => {
  const skill = new Skill(req.body);
  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    Object.assign(skill, req.body);
    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    await Skill.deleteOne({ _id: req.params.id });
    res.json({ message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
