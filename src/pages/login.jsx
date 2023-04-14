import React, { useContext, useState }  from "react";
import './index1.css';
import {AiOutlineMail} from "react-icons/ai"
import{AiOutlineLock} from "react-icons/ai";
import{AiOutlineUser} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../context/authcontext";
const Login=()=>{
    const [inputs,setinputs]=useState({
        username:"",
        password:"",
    });
    const[err,seterror]=useState(null)
    const navigate =useNavigate()
    const {login}=useContext(AuthContext);


    const handleChange=e =>{
        setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit= async e=>{
        e.preventDefault();
        try{
        await  login(inputs)
        navigate('/')
        
        }
        catch(err){
            seterror(err.response.data)
        }

        }
    return(  
        <section>     
        <div className="form-box">
            <div className="form-value">
                <form >
                <h2>Log in</h2>
                <div className="input-box">
                    <AiOutlineUser className="ion-icon"></AiOutlineUser>

                    <input type="email" required name="username" onChange={handleChange}/>
                    <label for="">User Name</label>
                </div>
   
                <div class="input-box">
                    <AiOutlineLock className="ion-icon"></AiOutlineLock>
                    <input type="password" required  name="password" onChange={handleChange}/>
                    <label for="">Password</label>
                </div>
                {err && <p>{err}</p>}
                <button onClick={handleSubmit}>Log in</button>
                <div class="register">
                    <p>Don't have a account<Link to="/register" className="reg">Register</Link></p>
                    
                </div>
                </form>
            </div>
        </div>
        </section>
       

    )
}
export default Login