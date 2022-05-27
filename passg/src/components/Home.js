import React from "react";
import "./Home.css";
import desktopImage from '../images/bgimg-1.jpg';
import mobileImage from '../images/bgimg-2.jpg';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate=useNavigate();
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content ">
               <button className="btn btn-secondary m-2 p-5" onClick={()=>{navigate("/Login")}}> Buying a Ticket</button>
               <button className="btn btn-secondary m-2 p-5" onClick={()=>{navigate("/Login")}}> Host an Event</button>
            </div>
        </div>
    );
}

export default Home;
