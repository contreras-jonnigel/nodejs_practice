import express from 'express';
import { getUsers, createUser, getUserById, deleteUser, updateUser } from '../Controllers/usersController.js';

const router = express.Router();

const test = (req, res, next) => {

    console.log(req.body);
    // authentication
    // get authorization from request header (JWT)
    // decode token
    // if (token == invalid) {
    //   return 401   
    // }
    // next();
    next();
}

router.get('/', getUsers);

router.post('/', test, createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;