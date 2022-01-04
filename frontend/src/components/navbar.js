import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import AuthContext from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../service/axiosapi';

const Navbar = () => {

    const navigate=useNavigate();

    const {loggedIn}=useContext(AuthContext);
    const {getLoggedIn}=useContext(AuthContext);


    const handleLogout=async(e)=>{
        e.preventDefault();
        await logoutUser();
        await getLoggedIn();

        navigate("/");
    }

    return (
        <>
        <div className="navbar" >
        <div className="logo">

        </div>

        {
            loggedIn?(
                <>
                <div className="navLink" >
        <NavLink to="/todo" activeClass="active" >Grocery</NavLink>
        <div className="logout" onClick={handleLogout} >Logout</div>
        <NavLink to="/about" activeClass="active" >About</NavLink>
            </div>

                </>
            ):(
                <>
                <div className="navLink" >
      
        <NavLink to="/" activeClass="active" >Login</NavLink>
        <NavLink to="/about" activeClass="active" >About</NavLink>
            </div>

                </>
            )
        }
           

           

        </div>   
        </>
    )
}

export default Navbar;
