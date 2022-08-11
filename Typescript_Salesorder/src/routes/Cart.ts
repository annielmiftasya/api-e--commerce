import express from 'express';
import controller from '../controllers/Cart';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create', controller.createCart);


export = router;
