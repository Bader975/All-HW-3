import {prisma,connectDB} from "./config/db"
import  express,{Application} from "express";
import  RouterUser  from "./routes/user.routes";
import * as dotenv from 'dotenv' 
dotenv.config()

const app:Application= express();
app.use(express.json());
connectDB();

app.use('/user',RouterUser)
// app.use('/blog',RouterBlog)
// app.use('/movie',RouterMovies)
// Port
app.listen(3008, () => console.log("Server Started"));