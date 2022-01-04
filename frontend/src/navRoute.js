import React,{useContext} from 'react';
import {Routes,Route} from "react-router-dom";
import Login from "./components/login";
import About from "./components/about";
import Todo from "./components/todo";
import AuthContext from "./context/authContext";


const NavRoute = () => {

    const {loggedIn}=useContext(AuthContext);


    return (
        <>
        <Routes>
        {
            loggedIn?(
                <>
           
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
                </>
            ):(
                <>
                <Route exact path="/" element={<Login />} />
            <Route path="/about" element={<About />} />

                </>
            )
        }
            
        </Routes>
            
        </>
    )
}

export default NavRoute;
