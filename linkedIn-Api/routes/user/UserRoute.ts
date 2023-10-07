const express = require('express');
import { getUserById } from '../../controllers/User/UserController';

const userRouters = express.Router();

userRouters.route('/:id').get(getUserById);

export default userRouters;