import { createMovie, deleteOneMovie, getByName, getBycategory, getallMovies, updateMovie } from '../controller/movies.controller';
import express from "express";
import { validate } from '../middleware/validate';
import { MoiveVaild } from '../zod.schema/moive.zod';
let router= express.Router();


// Get all movies
router.get('/',getallMovies )
// Get by name movies
router.get('/name',getByName )
//POST Creat
router.post('/',validate(MoiveVaild) ,createMovie )
// Get One User
router.get('/cat', getBycategory)
// Update
router.put('/:id',updateMovie);
//Delete
router.delete('/:id',deleteOneMovie);
// router.delete('/',);    


export default router;