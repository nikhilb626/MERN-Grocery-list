const mongoose=require("mongoose");
const autoIncrement=require("mongoose-auto-increment");


const grocerySchema=new mongoose.Schema({
    name:{type:String,required:true},
    qty:{type:String,required:true},
    currentId:{
        type:String,required:true
    }
});


autoIncrement.initialize(mongoose.connection);
grocerySchema.plugin(autoIncrement.plugin,'groceries');

const Grocery=mongoose.model("groceries",grocerySchema);

module.exports=Grocery;