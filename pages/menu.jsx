import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
const Menu =()=>{
    const [posts,setposts]=useState([])

    useEffect(()=>{
        const fetchdata=async ()=>{
            try{
                const res=await axios.get("/posts");
                setposts(res.data);
            } 
            catch(err){
                console.log(err);
            }
        }
        fetchdata();
    },[]);
    return (
        <div className="menu">
            <h1>Other Posts you may like:</h1>
            {posts.map((post)=>(
    

<div className="post" key={post.id}>
    <img src={`../upload/${post.img}`}></img>
    <h2>{post.tittle}</h2>
    <Link to={`/posts/${post.id}`} >
    <button>View Post</button>
    </Link>
    </div>
           ) )}


        </div>
    )
        
    
}
export default Menu