import React from "react";
import {Link} from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Home Office City of London</p>
            </div>
            <div className="d-flex">
            <p>Mobile: <a href="tel:07411 2869601">07411 286960</a></p>
            </div>
            <div className="d-flex">
              <p>Email: sraykov79@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
              <Link smooth={true} to="Home" className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="AboutMe" className="footer-nav">About me</Link>
                <br />
                
              
              <div className="col">
              <Link smooth={true} to="Projects" className="footer-nav">Projects</Link>
                <br />
                <Link smooth={true} to="contact" className="footer-nav">Contact Me</Link>
              </div>
            </div>
          </div>
                             

            
          </div>
        </div>
        
                        <div className="socialIcons">
             <div className= "col-lg-5.col-md-5.sm-6.align-items-center">
                 <div className="dflex justify-content-center">
                  
                   <a  href="https://www.facebook.com/svetlio.usa"> <FacebookIcon className="mx-3" size={36}/></a>
                   
                    
                 </div>
             </div>
                        </div>
                        <br></br>
                        <br></br>
                        
                        <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Ivo-Georgiev | All Rights Reserved
            </p> 
      </div>
    </div>
  )
}

export default Footer;
