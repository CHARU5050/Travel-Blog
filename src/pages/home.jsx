import axios from "axios";
import {Link} from "react-router-dom"
import React, { useEffect, useState }  from "react";
import './index1.css';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from "moment";
import ScaleLoader from "react-spinners/ScaleLoader"
import {SiYourtraveldottv} from "react-icons/si";
const Home=()=>{
    const [posts,setposts]=useState([])
    const [loading,setloading]=useState(true)
    const navigate =useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
        const fetchdata=async ()=>{
            try{
                const res=await axios.get("/posts");
                setposts(res.data);
                console.log(posts)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchdata();
        setloading(false)
        },2000)
    },[]);
    const getText=(html)=>{
        const doc=new DOMParser().parseFromString(html,"text/html")
        return doc.body.textContent
    }
    const handleclick=(id)=>{
        navigate(`/posts/${id}`);
    }
    return(
        <div className="home">
        <div className="posts">
            {loading && <div><ScaleLoader color="#308fd7" size={300} /></div>}
            {!loading && <div className="para"><p><SiYourtraveldottv></SiYourtraveldottv>Travel is an Investment in yourself</p></div>}

   
        {! loading && posts.map((post)=>(

            
            <div className="post" key={post.id}>
                <span></span>
                <div className="card">
                <div className="pic">
                
                <img src={`../upload/${post.img}`} alt="photo"></img>
                {console.log(post.img)} 
                </div>
                <div className="contents">
                
                
                <h2>{post.tittle}</h2>
                
                <div className="username">
              
            posted {moment(post.date).fromNow()}</div>
                
                <button onClick={()=>handleclick(post.id)}>Read more</button>
        
        

            
                </div>
                </div>
               

                </div>
            
               
        ))
        }
        </div>
      
        </div>
        
 );

    
}
export default Home