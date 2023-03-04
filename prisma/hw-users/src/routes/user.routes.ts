import { getallUsers, createUser,  getUserByEmail, getUserById, Login, getUserByRole, updateUserPassword, getUserByYear, getUserByAge } from '../controller/user.controller';

import express from "express";
import { validate } from '../middleware/validate';
import { userVaild } from '../zod.schema/user.zod';

let router = express.Router();


// Get all Users
router.get('/', getallUsers)
// LOging By Username and Password
router.get('/login', Login)
// Get user by ID
router.get('/id', getUserById)
// Get user by Email
router.get('/email', getUserByEmail)
// Get user by Age
router.get('/age', getUserByAge)
// Get user by role
router.get('/role',getUserByRole )
// Get user by Year
router.get('/year',getUserByYear )
//POST Creat
router.post('/',validate(userVaild), createUser)
    // Get One User
    // router.get('/cat', getBycategory)
    // // Update
    router.put('/pass',updateUserPassword);
    // //Delete
    // router.delete('/:id',deleteOneMovie);
    // router.delete('/',);

    ;


export default router;