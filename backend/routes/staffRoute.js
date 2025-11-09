import express from 'express';
import multer from 'multer';
import { createStaff, getStaff, updateStaff, deleteStaff } from '../controllers/staffController.js';

const staffRouter = express.Router();

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

// API routes
staffRouter.post('/', upload.single('image'), createStaff);
staffRouter.get('/', getStaff);
staffRouter.put('/:id', upload.single('image'), updateStaff);
staffRouter.delete('/:id', deleteStaff);

export default staffRouter;
