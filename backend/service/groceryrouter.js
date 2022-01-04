const express=require("express");
const {addGrocery,getGrocery}=require("../controller/grocerycontroller");
const auth=require("../middleware/auth");


const router=express.Router();


router.post("/add",auth,addGrocery);

router.get("/showgrocery/:id",auth,getGrocery);

module.exports=router;