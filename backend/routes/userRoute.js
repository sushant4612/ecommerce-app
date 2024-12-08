import express from 'express';

import { login, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', login);
userRouter.post('/admin', adminLogin);

export default userRouter;