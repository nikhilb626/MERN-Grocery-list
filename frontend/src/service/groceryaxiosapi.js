import axios from "axios";


const groceryUrl=`http://localhost:5000/groceryapi`;



export const addGrocery=async(grocery)=>{
    return await axios.post(`${groceryUrl}/add`,grocery);
}

export const showGrocery=async(currentId)=>{
    return await axios.get(`${groceryUrl}/showgrocery/${currentId}`);
}