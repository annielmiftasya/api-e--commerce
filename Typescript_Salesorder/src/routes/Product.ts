import express from 'express';
import controller from '../controllers/Product';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create', controller.createProduct);
router.get('/get/:productId', controller.readProduct);
router.get('/get', controller.readAll);
router.put('/update/:productId', controller.updateProduct);
router.delete('/delete/:productId', controller.deleteProduct);

export = router;
