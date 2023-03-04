import { number } from 'zod';
import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());




// Loging


export const Login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await prisma.user.findFirst({
        where: {
          username,
          password,
        },
      });
//   ES6 if else
    !user ? res.json({ message: "worng username or password !!"}): res.json({message: `weclome back ${username}`});
    } catch (error) {
      console.log(error);
    }
  };



// Creat
export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    const newUser = await prisma.user.create({
        data: user

    })
    res.json({ "msg": "The user has been created", newUser })
}






// Read 
export const getallUsers = async (req: Request, res: Response) => {
    let users = await prisma.user.findMany()
    res.json(users);
}

export const getUserById = async (req: Request, res: Response) => {

    try {
        let { id } = req.body
        let user_one = await prisma.user.findFirst({
            where: {
                id,
            },
       
            select: {
                email: true,
                username: true,
                role: true,
                age:true,
                joiningYear: true,
             
            },

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}



export const getUserByEmail = async (req: Request, res: Response) => {

    try {
        let { email } = req.body
        let user_one = await prisma.user.findFirst({
            where: {
                email,
            },
       
            select: {
                email: true,
                username: true,
                role: true,
                age:true,
                joiningYear: true,
             
            },

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}

export const getUserByYear = async (req: Request, res: Response) => {

    try {
        let { joiningYear } = req.body
        let user_one = await prisma.user.findMany({
            where: {
                
            //   Get Greater Or Equles joining Year
                joiningYear:{
                    gte:joiningYear,
                    
                }
            
            },
       
            select: {
                email: true,
                username: true,
                role: true,
                age:true,
                joiningYear: true,
             
            },

        })
       //   ES6 if else
    !user_one ? res.json({ message:` No User found in this year ${joiningYear}!!`}):res.json({"msg": `The users has been on this Year ${joiningYear}`,user_one});
    } catch (error) {
        res.json(error)

    }

}


export const getUserByAge = async (req: Request, res: Response) => {

    try {
        let { age } = req.body
        let user_one = await prisma.user.findMany({
            where: {
                age:{
                    gt:age
                }
            },
       
            select: {
                email: true,
                username: true,
                role: true,
                age:true,
                joiningYear: true,
             
            },

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}
export const getUserByRole = async (req: Request, res: Response) => {

    try {
        let { role } = req.body
        let user_one = await prisma.user.aggregate({
            where: {
                role
            },
       
            _count: {
              
                role: true,
               
            },
            

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}




export const updateUserPassword = async (req: Request, res: Response) => {

    try {
        let { id,password  } = req.body
        // let { password } = req.body
        const updateUser = await prisma.user.update({
            where: {
             id,
            },
            data: {
                password,
            },

        })
        res.json({ "msg": "The user Password has been updated", updateUser });
    } catch (error) {
        res.json(error)

    }

}