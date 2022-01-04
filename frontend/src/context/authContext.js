import React,{useState,useEffect,createContext} from 'react';
import { loggedInUser} from '../service/axiosapi';

const AuthContext=createContext();


const AuthContextProvider = (props) => {
        const [loggedIn,setLoggedIn]=useState(undefined);

        const [currentId,setcurrentId]=useState(undefined);



        const getLoggedIn=async()=>{
            const loggedInRes=await loggedInUser();
            setLoggedIn(loggedInRes.data);
            console.log(loggedInRes.data);
        }

        const getUserId=(currId)=>{
            setcurrentId(currId);
        }

 

      


        useEffect(()=>{
            getLoggedIn();
        },[]);

    
    return (<AuthContext.Provider value={{loggedIn,currentId,getLoggedIn,getUserId}}>
    {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext;
export {AuthContextProvider};
