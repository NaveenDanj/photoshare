import express from 'express';

const router = express.Router();

import {getPost} from  '../controllers/posts.js';


router.get('/' , getPost );

export default router;