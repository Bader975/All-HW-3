import {prisma} from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());



// Add new User
export const createUser = async (req: Request, res: Response) => {
    const user = req.body

    const newUser = await prisma.user.create({
        data: user

    })
    res.json({ "msg": "The user has been created", newUser })
}


// Get Users
export const getallUsers = async (req: Request, res: Response) => {
    let users = await prisma.user.findMany()
    res.json(users);
}

// Get Books
export const getallBooks = async (req: Request, res: Response) => {
  let books = await prisma.books.findMany()
  res.json(books);
}
// Get loans
export const getallLoan= async (req: Request, res: Response) => {
  let loans = await prisma.loan.findMany()
  res.json(loans);
}
// Add new Book

export const createBook = async (req: Request, res: Response) => {
  const book = req.body

  const newBook = await prisma.books.create({
      data: book

  })
  res.json({ "msg": "The book has been created", newBook })
}

// Add new loan

export const createLoan = async (req: Request, res: Response) => {
  const loan = req.body


  const newLoan = await prisma.loan.create({
   
      data:loan
      

  })
  res.json({ "msg": "The Loan has been created", newLoan })
}


