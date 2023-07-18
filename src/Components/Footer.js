import { Email, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-orange-100 py-12 flex flex-col items-center">
      <div className="flex py-4">
        <a href="https://www.facebook.com/Twograndmasoulfood?mibextid=ZbWKwL" target="blank"><img
          className="w-16 h-16 p-2"
          src="https://ik.imagekit.io/jsklle928/facebook.png?updatedAt=1688421303892"
          alt="facebook icon"
        /></a>
        
        <a href="https://instagram.com/twograndmasoulfoodllc?igshid=ZDc4ODBmNjlmNQ==" target="blank" >   <img
          className="w-16 h-16 p-2"
          src="https://ik.imagekit.io/jsklle928/instagram.png?updatedAt=1688421303939"
          alt="instagram icon"
        /></a>
     
     <a href="https://www.tiktok.com/@twograndmasoulfoodllc?_t=8dwHbkg5ClX&_r=1" target="blank">  <img
          className="w-16 h-16 p-2"
          src="https://ik.imagekit.io/jsklle928/tik_tok.png?updatedAt=1688421303928"
          alt="tik tok icon"
        /></a>
       
      </div>
      <div className="font-bold">
        <h4>Tampa • Floria • 33612 • United States </h4>
      </div>
      <div className="flex py-4 font-bold">
        <div className="flex px-4">
          {" "}
          <Phone /> <h4>813-696-8634</h4>
        </div>
        <div className="flex px-4">
          {" "}
          <Email /> <h4>Twograndmasoulfood@yahoo.com</h4>
        </div>
      </div>
      <div>
        <img
          style={{ width: 100 }}
          src="https://ik.imagekit.io/jsklle928/IMG_2837_2.jpg?updatedAt=1688421892529"
          alt="logo"
        />
      </div>


  
    </div>
  );
}

export default Footer;
