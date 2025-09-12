import dotenv from "dotenv"
import connectDB from "./db/db.js"
import app from './app.js'


dotenv.config({
    path : './env'
})
// const app = express();

 await connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 4000 , ()=>{
        console.log(`Running on port : ${process.env.PORT}` )
    })
 });
console.log(process.env.MONGODB_URI);


// app.listen(process.env.PORT , ()=>{
//     console.log(`App listening on port : ${process.env.PORT}`);
// })