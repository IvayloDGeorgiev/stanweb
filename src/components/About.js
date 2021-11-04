import React from "react";
import author from "../tools-7.jpeg";

const AboutMe = () => {
    return (
        <div id="about" className="aboutwrapper">
       
            
             <div className="image-about" >
                     <img className="profile-img" src={author} alt="Author..."/>
                 </div>
                 
               <div className="about-info"> 
             <div className= "col-lg-6 col-xm-12">
                 <h1 className="about-heading">About us</h1>
                 <p>
                    We are small but growing company dedicated to help people with their Home improvements.
                </p>
                <h3>
                     Services
                </h3>
                <p>
                    <ul>
                        <li>Painting and Decoration</li>
                        <li>Electrician Services</li>
                        <li>Handyman</li>
                        <li>Loft Conversions</li>
                        <li>Fence Painting</li>
                        <li>Any interior  work</li>
                        <li>Any exterior  work</li>

                    </ul>
                    <p> If you can't see the work you need done in the list just send me short email with the work you need and the timeline.</p>
                </p>
                 </div>  
                 </div> 
     </div>
    )
   
}

export default AboutMe
