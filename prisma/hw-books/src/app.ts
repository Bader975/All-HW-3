import {prisma,connectDB} from "./config/db"
import  express,{Application} from "express";
// import RouterUser from "./routes/user.routes";
// import  RouterBlog  from "./routes/blog.routes";
import  RouterBooks  from "./routes/book.routes";
import * as dotenv from 'dotenv' 
dotenv.config()

const app:Application= express();
app.use(express.json());
connectDB();

app.use('/book',RouterBooks)
// Port
app.listen(3008, () => console.log("Server Started"));