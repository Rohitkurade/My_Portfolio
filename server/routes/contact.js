import express from 'express';
import * as contactController from '../controllers/contactController.js';

const router = express.Router();

router.get('/', contactController.getAllContacts);
router.post('/', contactController.createContact);
router.delete('/:id', contactController.deleteContact);

export default router;
