const mongoose=require('mongoose');
const autoIncrement=require('mongoose-auto-increment');


const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },password:{
        type:String,required:true
    }
})


autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin,'user');

const User=mongoose.model("user",userSchema);

module.exports=User;