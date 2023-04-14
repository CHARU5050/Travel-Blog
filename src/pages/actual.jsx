import React, { useEffect } from "react";
import videobg2 from "../video/waterfall.mp4"
import videobg4 from "../video/tree.mp4"
import {Link} from 'react-router-dom';
import videobg from "../video/world.mp4";
import videobg5 from "../video/travel.mp4";
import videobg3 from "../video/rose.mp4";

import './actual.css'
 const Actual=()=>{
    useEffect(()=>{
        const btn =document.querySelectorAll('.btn')
        btn.forEach(btn=>{
            btn.addEventListener('click',()=>{
                document.querySelector('.controls .active').classList.remove('active');
                btn.classList.add('active');
                let src=btn.getAttribute('data-src')
                console.log(src)
                document.querySelector(".video-slider").src=src

            })
        })
    })
    return(
        <div className="controls">
            <div className="content">
        

<p>Life is Short and the World is Wide</p>
<Link to="/">
<button className="button">DISCOVER MORE AND POST </button>
</Link>

<div className="controlbutton">
    
    <button className="btn active" data-src={videobg}></button>
    <button className="btn" data-src={videobg2}></button>
    <button className="btn" data-src={videobg3}></button>
    <button className="btn" data-src={videobg4}></button>
    <button className="btn" data-src={videobg5}></button>

</div>
</div>


<video src={videobg} loop autoPlay muted className="video-slider"></video>
        </div>
    )
 }
 export default Actual;
