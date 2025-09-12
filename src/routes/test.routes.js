import {Router} from "express"

const testRoute = (req,res) =>{
    return res.status(200).json({
        success:true,
        meassage:"OK this is test"
    })
}

const router = Router()
router.route("/test1" ).get(testRoute);
// console.log("okkk")


export default router