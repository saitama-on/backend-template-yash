import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()
//used for cross origin policy of browsers

//origin for allowed origin 
//credentials are used for allowing to send credentials via http
app.use(cors({
    origin : process.env.CORS_ORIGIN ,
    credentials : true
})) 
//allow json
app.use(express.json()) //can have many options like {limit :"16kb"}

//using url encoder 
//extended is used to allow sending objects of objects 
// option like {limit : "16kb"} can also be used 
app.use(express.urlencoded({
    extended  :true
}))
//creating a static file folder to store public assets
app.use(express.static("public"))
//initializing cookie-parser
app.use(cookieParser())



//routing
import userRouter from "./routes/user.routes.js"
import testRouter from "./routes/test.routes.js"
app.use("/api/v1/users" , userRouter)
app.use("/api/v1/tests" , testRouter)




export default app;