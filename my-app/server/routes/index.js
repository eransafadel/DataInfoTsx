import express from 'express';
import {getGender,getNation} from '../controllers/index.js';


const router = express.Router();


router.get('/gender',getGender);
router.get('/nation',getNation);


export default router;