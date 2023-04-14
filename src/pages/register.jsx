import React, { useState }  from "react";
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineMail} from "react-icons/ai"
import{AiOutlineLock} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import axios from "axios";
import './index1.css'
const Register=()=>{
    const [inputs,setinputs]=useState({
        username:"",
        email:"",
        password:"",
    });
    const[err,seterror]=useState(null)
    const navigate =useNavigate()
    const handleChange=e =>{
        setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit= async e=>{
        e.preventDefault();
        try{
        await axios.post("/auth/register",inputs);
        navigate('/login')
        
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
                <h2>Register</h2>
                <div className="input-box">
                    <AiOutlineUser className="ion-icon"></AiOutlineUser>

                    <input type="email" required name="username" onChange={handleChange} />
                    <label>User Name</label>
                </div>
                <div className="input-box">
                    <AiOutlineMail className="ion-icon"></AiOutlineMail>

                    <input type="email" required name="email" onChange={handleChange} />
                    <label >Email</label>
                </div>
                <div className="input-box">
                    <AiOutlineLock className="ion-icon"></AiOutlineLock>
                    <input type="password" required  name="password" onChange={handleChange} />
                    <label>Password</label>
                </div>
                {err &&<p>{err}</p>}
               

                
                <button onClick={handleSubmit}>Register</button>
                <div className="register">
                <p>Do have a account<Link to="/login">Login in</Link></p>
                </div>
                </form>
            </div>
        </div>
        </section>
       
    )
}
export default Register