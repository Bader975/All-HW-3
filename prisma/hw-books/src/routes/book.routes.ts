import { createBook, createLoan, createUser, getallBooks, getallLoan, getallUsers } from '../controller/book.controller';
import express from "express";
import { validate } from '../middleware/validate';
import { userVaild } from '../zod.schema/book.zod';
let router= express.Router();


// Get all Users
router.get('/',getallBooks )
router.get('/user',getallUsers )
router.get('/loan',getallLoan )
//POST add user
router.post('/user',validate(userVaild), createUser)
// add book
router.post('/',createBook)
// add loan
router.post('/loan',createLoan)




export default router;