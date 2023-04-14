
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';
import "./index1.css"
import videobg from '../video/worldro.mp4';
const Write=()=>{
    const state=useLocation().state
    console.log(state)

   
    const [values,setValue]=useState(state?.desc ||'');
    const [tittle,settittle]=useState(state?.tittle || '');
    const [file,setfile]=useState(null);
    const [loc,setloc]=useState(state?.loc ||null);
    const navigate =useNavigate();
    const upload =async()=>{
        try{
            const formdata=new FormData();
            formdata.append("file",file)
            const res=await axios.post("/upload",formdata)
            return res.data


        }catch(err){

        }
    }
    const handleclick= async e=>{
        e.preventDefault();
        const imgurl= await upload();

        const im={
            tittle,
            desc:values,
            img:file? imgurl:"",
            date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            loc
        }
    
try{
    console.log(file)
    state ?await axios.put(`/posts/${state.id}`,{
        tittle,
        desc:values,
        loc
    

    })
    

    :await axios.post("/posts/",im)
    navigate('/');
    console.log(im)
    

}
catch(err){
    console.log(err)

}
navigate("/");


    }

    return(
        <div className="add">
            <div className="content">
            <label className='lab'>Enter the place name:</label>
            <br></br>
            <input type="text" value={tittle}  onChange={e=>settittle(e.target.value)}></input>
            <br></br>
            <label className='lab'>Share your experience:</label>
            <div className='editor'>
            <ReactQuill theme="snow" className="editorcontainer" value={values} onChange={setValue} /></div>
            <label className='lab'>Upload the post:</label>
    <input  type="file"  id="file" name="" style={{display:"none"}} onChange={e=>setfile(e.target.files[0])} />
    <br></br>
<label htmlFor="file" className='upload'>Upload Here</label>
          <br></br>
          <label className='lab'>Pin Place location: </label>
          <br></br>
          <input type="text"  value={loc} onChange={e=>setloc(e.target.value)}></input>
          <br></br>
          <video src={videobg} loop autoPlay muted className="video-slider"></video>
                   
            <button onClick={handleclick} classname="btn">Publish</button>
             
            </div>
            </div>
)
}
export default Write