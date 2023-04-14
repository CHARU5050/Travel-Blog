import axios from "axios";
import React, { useContext, useEffect, useState }  from "react";
import { useLocation, useNavigate ,Link} from "react-router-dom";
import './index1.css'
import moment from "moment";
import { AuthContext } from "../context/authcontext";
import Menu from "./menu"
 import {HiUserCircle} from "react-icons/hi";
 import {FiEdit2} from "react-icons/fi";
 import {MdDelete} from "react-icons/md";
 import {ImLocation2} from "react-icons/im";
 import ScaleLoader from "react-spinners/ScaleLoader"
const Single=()=>{
    const [post,setposts]=useState([])
    const location =useLocation()
    const postId=location.pathname.split("/")[2]
    const {currentuser}=useContext(AuthContext)
    const [loading,setloading]=useState(true)
    const navigate=useNavigate();
    


    useEffect(()=>{
        setTimeout(()=>{
        const fetchdata=async ()=>{
            try{
                console.log(postId)
                const res=await axios.get(`/posts/${postId}`);
                setposts(res.data);
            
            }
            catch(err){
                console.log(err);
            }
        }
        fetchdata();
        setloading(false)
    },2000)
    },[postId]);
    const handleDelete= async ()=>{
        try{
        await axios.delete(`/posts/${postId}`);
        navigate("/")
    console.log("done")}
        catch(err){
            console.log(err)
        }
    }
         const getText=(html)=>{
            const doc=new DOMParser().parseFromString(html,"text/html")
            return doc.body.textContent
         }
    
    return(
        <div className="single">
            {loading && <div className="singlem"><div><ScaleLoader color="#308fd7" size={300} /></div></div>}
            {!loading &&<div className="content">
            <div class="cards">
            <div class="lines"></div>
            <div class="imgbx">

                <img src={`../upload/${post.img}`}></img>
                </div>
        </div>
            
                <div className="user">
                    <div className="userbr">
                    <div className="userimg">
                <HiUserCircle></HiUserCircle></div>
                <div className="info">
                    <span>{post.username}</span><br></br>
                    <span>posted {moment(post.date).fromNow()} </span>
                </div>
                </div>
                 {currentuser.username=== post.username && <div className="edit">
                    <Link to={`/write?edit=2`} state={post}>
                        <FiEdit2></FiEdit2>
                    </Link>
                    <button onClick={handleDelete}><MdDelete></MdDelete></button>
                    </div>}
                </div>
                <h1>{post.tittle}</h1>
                <p>{getText(post.desc)}</p>
                <a href={post.loc} className="location" ><ImLocation2></ImLocation2>See Location</a>
                </div>}
                {!loading &&
                <div className="menu"><Menu></Menu></div>}
            
                </div>
    )
              
}
export default Single