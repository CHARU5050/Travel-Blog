import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext=createContext()

export const AuthcontextProvider=({children})=>{
    const [currentuser,setcurrentuser]=useState(JSON.parse(localStorage.getItem("user"))||null)
    const login=async(inputs)=>{
        const res=await axios.post("auth/login/",inputs);
        setcurrentuser(res.data);

    }
    const logout=async (inputs)=>{
        await axios.post("auth/logout/");
        setcurrentuser(null)
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentuser))

    },[currentuser]);
    return(
        <AuthContext.Provider value={{currentuser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
