import React, { useContext }  from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "./context/authcontext";
import './index.css'
import {HiUser} from "react-icons/hi";

const Navbar=()=>{
    const {currentuser,logout}=useContext(AuthContext);
    console.log(logout)
    return(
        <div className="navbar">
    
            <div className="logo"><span>T</span>ravel Blog</div>        
            <div className="links">
                <div className="link">
            <Link to="/">Home</Link>
            <Link to="/write">Add Blog</Link>
            <Link to="/search">Search</Link>
            <Link to="/front">Welcomepage</Link>
            </div>
            {currentuser && <div className="user">
             <span><HiUser></HiUser></span>
            <span>{currentuser?.username}</span>
           </div>}
            
            {currentuser?(<button onClick={logout}>Log Out</button>)
            :<Link className="link" to="/login"><button>LOG IN</button></Link>}
       
        </div>
    

            
        
    </div>

    )
}
export default Navbar