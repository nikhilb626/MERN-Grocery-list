const Grocery=require("../model/grocery.js");

const addGrocery=async(req,res)=>{
    try{

        const {name,qty,currentId}=req.body;

        const newGrocery=new Grocery({
            name,qty,currentId
        });

        const savedGrocery=await newGrocery.save();

        res.json(savedGrocery);
    
    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
}


const getGrocery=async(req,res)=>{

    const id=req.params.id;

    try{
        const Groceries=await Grocery.find({currentId:id});
        res.json(Groceries);

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
}

module.exports={addGrocery,getGrocery};