import {prisma} from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());




// Creat
export const createMovie= async (req: Request, res: Response) => {
    const movie = req.body

    const newMovie = await prisma.movie.create({
        data: movie

    })
    res.json({ "msg": "The Movie has been created !!!!", newMovie })
}


export const getallMovies = async (req: Request, res: Response) => {
    let movies = await prisma.movie.findMany()
    res.json(movies);
}
export const updateMovie= async (req: Request, res: Response) => {
    const movies = req.body
    const  {id } = req.params
    let updateduser = await prisma.movie.update({
        where: {
            id,
        },
        data:movies
  
    })
  
    res.json( "you updated this Movies"+ updateduser  )
  
  
  };

export const getByName = async (req: Request, res: Response) => {
    try {
        const  name  = req.body;
        const movieName = await prisma.movie.findMany({
          where:
            name,
          
          select: {
            name: true,
            creatdata: true,
            genre:true,
            rating:true,
            id: true,
           
          },
        });
        res.json(movieName);
      } catch (error) {
        console.log(error);
      }
    };


    
export const getBycategory = async (req: Request, res: Response) => {
    try {
        const  genre  = req.body;
        const movieName = await prisma.movie.findMany({
          where:genre,
         
        });
        res.json(movieName);
      } catch (error) {
        console.log(error);
      }
    };


    export const getByRate = async (req: Request, res: Response) => {
      try {
          const  {rating}  = req.body;
          const movieName = await prisma.movie.findMany({
            where:{
              rating:{
                gt:rating
              },
            }
          });
          res.json(movieName);
        } catch (error) {
          console.log(error);
        }
      };
  export const deleteOneMovie = async (req: Request, res: Response) => {

    try {
        const  {id } = req.params
       
        let delete_one = await prisma.movie.delete({
            where: {
                id,
            },
          
     
        })
    res.json({"The Movie has been deleted ": delete_one});
} catch (error) {
    res.json({error})

}
   
}



