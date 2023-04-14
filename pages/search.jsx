import { useEffect, useState } from 'react';
import './index1.css';
import ScaleLoader from "react-spinners/ScaleLoader"
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {BiSearch} from "react-icons/bi";

const Search=()=>{
    const [search,setsearch]=useState(null);
    const[loading,setloading]=useState(false);
    const[posts,setposts]=useState(null);
    const [result,setresult]=useState(false);
    const handleclick=()=>{

        setloading(true)
        
        setTimeout(()=>{
        const fetchdata=async ()=>{
            try{
                const res=await axios.get(`/user?s=${encodeURIComponent(search)}`);
                console.log(res.data.length)
                if (res.data.length>=1){
                setposts(res.data);}
                else{
                    setresult(true)
                    setposts(null)
                }
                console.log(posts)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchdata();
        setloading(false)
        console.log(search,posts)
        },2000)

    };
    return (
<div className="search">
    <div className='searchbar1'>
        <div className='para'><p>Search the Post</p></div>
    <div className='searchbar'>
    <input type="text" placeholder="Enter the title to search" value={search}  onChange={e=>setsearch(e.target.value)}></input>
    <button onClick={handleclick}><BiSearch></BiSearch></button></div></div>
    <div className="home">
        <div className="posts">
            {loading && <div><ScaleLoader color="#308fd7" size={300} /></div>}
            { !loading &&result && <div className='parap'><p>No Result found</p></div>}
   
        {! loading && posts && posts.map((post)=>(
            
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
                <Link to={`/posts/${post.id}`}>
                <button >Read more</button>
                </Link>

            
                </div>
                </div>
               

                </div>
            
               
        ))}
        </div>
      
        </div>
        
 
     </div>
    )

}
export default Search;