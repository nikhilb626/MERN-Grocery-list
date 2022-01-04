import React,{useState,useContext} from 'react';
import {addUser,loginUser} from '../service/axiosapi';
import AuthContext from '../context/authContext';


import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate=useNavigate();

    const [form,setForm]=useState("strip");

    const [type,setType]=useState("password");
    const [isTypeP,setIsTypeP]=useState(true);

    const {getLoggedIn,getUserId}=useContext(AuthContext);



    const [error,setError]=useState("");
    const [success,setSuccess]=useState("successCont");
    const [error2,setError2]=useState("");



    const toggleLogin=(e)=>{
        e.preventDefault();

        setForm("strip sign");
    }

    const toggleSignup=(e)=>{
        e.preventDefault();

        setForm("strip");
    }


    const toggleP=()=>{
        setIsTypeP(false);
        setType("text");
    }

    const toggleT=()=>{
        setIsTypeP(true);
        setType("password");
    }



    // login actions
    const [logEmail,setLogEmail]=useState("");
    const [logPassword,setLogPassword]=useState("");


    const handleLogin=async(e)=>{
        e.preventDefault();
      try{
        if(logEmail==="" || logPassword===""){
            setError("please fill all inputs");
        }

        else if(logEmail!=="" &&  logPassword!==""){
            const logObj={
                email:logEmail,password:logPassword
            }

           const userId=await loginUser(logObj);

           console.log("this is id "+userId.data);
           getUserId(userId.data);
            setLogEmail("");
            setLogPassword("");
            await getLoggedIn();
            setError("");
            setError2("");
           

            navigate('/todo');

        }
      }catch(error){
        setError(error.response.data.errorMessage);
    }

    }





    // sign up actions

const [signName,setSignName]=useState("");
const [signEmail,setSignEmail]=useState("");
const [signPassword,setSignPassword]=useState("");
const [signConfirmPassword,setSignConfirmPassword]=useState("");



const handleSignup=async(e)=>{
    e.preventDefault();

    try{
        if(signName==="" || signEmail==="" || signPassword==="" || signConfirmPassword===""){
            setError2("please fill the form completely");
        }
        else if(signName!=="" && signEmail!=="" && signPassword!=="" && signConfirmPassword!==""){
            if(signPassword===signConfirmPassword){
                const signObj={
                    name:signName,email:signEmail,password:signPassword
                }
    
               await addUser(signObj);
                setSignName("");
                setSignEmail("");
                setSignPassword("");
                setSignConfirmPassword("");
                setForm("strip");
                setError("");
                setError2("");
                setSuccess("successCont show")
            }else{
                setError2("confirm password does not match");
            }
        }
    }catch(error){
        setError2(error.response.data.errorMessage);
    }
}







    return (
        <>
        <div className="forms_container">
        <div className={success}>Sign Up Successfully
        <button className="closeBtn" onClick={()=>setSuccess("successCont")} >X</button>
        </div>
      
        <div className={form}>

    <div className="form_container">
        <div className="profile_cont">
        <i class="fas fa-user-circle"></i>
        </div>
        <h3>Login</h3>

        <div className="input_cont">
        <i class="fas fa-user"></i>
            <input type="email" value={logEmail} onChange={(e)=>setLogEmail(e.target.value)} placeholder="Email"/>
        </div>

        
        <div className="input_cont">
        {
            isTypeP?<i onClick={toggleP} class="fas fa-eye-slash"></i>:<i onClick={toggleT} class="fas fa-eye"></i>
        }
        
        
        <input type={type} value={logPassword} onChange={(e)=>setLogPassword(e.target.value)} placeholder="Password"/>
        </div>
        <div className="error_content">{error}</div>

    <button onClick={handleLogin}>Login</button>

    <div className="another_link">
        Dont have any Account ? <span className="toggle" onClick={toggleLogin} >Sign Up</span>
    </div>

    </div>





    <div className="form_container">
        <div className="profile_cont">
        <i class="fas fa-user-circle"></i>
        </div>
        <h3>Sign Up</h3>

        <div className="input_cont">
        <i class="fas fa-file-signature"></i>
            <input type="text" value={signName} onChange={(e)=>setSignName(e.target.value)} placeholder="Name"/>
        </div>


        <div className="input_cont">
        <i class="fas fa-user"></i>
            <input type="email" value={signEmail} onChange={(e)=>setSignEmail(e.target.value)} placeholder="Email"/>
        </div>

        
        <div className="input_cont">
        {
            isTypeP?<i onClick={toggleP} class="fas fa-eye-slash"></i>:<i onClick={toggleT} class="fas fa-eye"></i>
        }
        <input type={type} value={signPassword} onChange={(e)=>setSignPassword(e.target.value)} placeholder="Password"/>
        </div>

        <div className="input_cont">
        {
            isTypeP?<i onClick={toggleP} class="fas fa-eye-slash"></i>:<i onClick={toggleT} class="fas fa-eye"></i>
        }
        <input type={type} value={signConfirmPassword} onChange={(e)=>setSignConfirmPassword(e.target.value)} placeholder=" Confirm Password"/>
        </div>

        <div className="error_content">{error2}</div>
    <button onClick={handleSignup}>Sign Up</button>

    <div className="another_link">
        Already have an Account ? <span className="toggle" onClick={toggleSignup}>Login</span>
    </div>

    </div>


        </div>
    
        </div>
        </>
    )
}

export default Login;
