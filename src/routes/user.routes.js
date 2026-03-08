import express from 'express';
import { enrollStudent, getCourses, getStudentEnrollById } from '../controllers/user.conroller.js';
import logger from '../middleware/logger.middleware.js';
import validateEnroll from '../middleware/validateEnrollments.middleware.js';

const router = express.Router();

router.get('/courses', logger, getCourses);
router.post('/enroll', validateEnroll, enrollStudent);
router.get('/courses/:id/enrollments', logger, getStudentEnrollById);

export default router;