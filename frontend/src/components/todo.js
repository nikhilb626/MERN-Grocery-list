import React,{useState,useEffect,useContext} from 'react';
import {addGrocery,showGrocery} from "../service/groceryaxiosapi";
import AuthContext from '../context/authContext';


const Todo = () => {

    const [groceries,setGroceries]=useState([]);

    const {currentId}=useContext(AuthContext);

    const [error,setError]=useState("");









    const [formVisiblity,setFormVisiblity]=useState("form2_container");

    const [btnLogo,setBtnLogo]=useState("fas fa-plus")

    const ToggleForm=()=>{
        if(formVisiblity==="form2_container"){
            setFormVisiblity("form2_container form2show");
            setBtnLogo("fas fa-plus hideFormBtn")
        }
        else if(formVisiblity==="form2_container form2show"){
            setFormVisiblity("form2_container");
            setBtnLogo("fas fa-plus")

        }
    }


    const getGrocery=async()=>{
        const response=await showGrocery(currentId);
        setGroceries(response.data);

    }


   
 





    useEffect(()=>{
        getGrocery();
    },[])








    // actions
    const [name,setName]=useState("");
    const [qty,setQty]=useState("");

    const handleGrocery=async(e)=>{
        e.preventDefault();
        if(name==="" || qty===""){
            setError("please fill the inputs");
        }

        else if(name!=="" && qty!==""){
            const groceryObj={
                name,qty,currentId
            }

            // console.log(groceryObj);
            await addGrocery(groceryObj);
            setError("");
            setName("");
            setQty("");
            getGrocery();
        }
    }


    return (
        <>
    <div className="grocery_container">
        <div className="grocery_heading">
            <h2>Grocery List</h2>
        </div>
            <ul className="list_container">
            {
                groceries.map((grocery)=>{
                    return (
                        <>
                        <li key={grocery._id}><div className="nameList">{grocery.name}</div> <span className="qty_cont">Qty:{grocery.qty}</span><span className="deletBtn">X</span></li>

                        </>
                    )
                  
                })
            }
               
            
                
            </ul>
    
        <div className="form_toggleBtn" onClick={ToggleForm}>
        <i className={btnLogo}></i>
        </div>

     
    </div>

    <div className={formVisiblity}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Grocery Name" />
        <input type="text" value={qty} onChange={(e)=>setQty(e.target.value)} placeholder="Enter Quantity" />
        <div className="error_content">{error}</div>
        <button onClick={handleGrocery}>Add</button>
        </div>


        </>
    )
}

export default Todo;
