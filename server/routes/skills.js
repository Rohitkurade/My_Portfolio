import express from 'express';
import * as skillController from '../controllers/skillController.js';

const router = express.Router();

router.get('/', skillController.getAllSkills);
router.get('/category/:category', skillController.getSkillsByCategory);
router.post('/', skillController.createSkill);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);

export default router;
