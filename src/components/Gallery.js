import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../App.css";
    /**loft**/
import Loft1 from "../Work images/Loft Conversion/Loft1.jpeg";
import Loft2 from "../Work images/Loft Conversion/Loft2.jpeg";
import Loft3 from "../Work images/Loft Conversion/Loft3.jpeg";
import Loft4 from "../Work images/Loft Conversion/Loft4.jpeg";
import Loft5 from "../Work images/Loft Conversion/Loft5.jpeg";
import Loft6 from "../Work images/Loft Conversion/Loft6.jpeg";
import Loft7 from "../Work images/Loft Conversion/Loft7.jpeg";
import Loft8 from "../Work images/Loft Conversion/Loft8.jpeg";
import Loft9 from "../Work images/Loft Conversion/Loft9.jpeg";
import Loft10 from "../Work images/Loft Conversion/Loft10.jpeg";
import Loft11 from "../Work images/Loft Conversion/Loft11.jpeg";
import Loft12 from "../Work images/Loft Conversion/Loft12.jpeg";
import Loft13 from "../Work images/Loft Conversion/Loft13.jpeg";
import Loft14 from "../Work images/Loft Conversion/Loft14.jpeg";
import Loft15 from "../Work images/Loft Conversion/Loft15.jpeg";

  /**wall-extension**/
import wallext1 from "../Work images/Wall-extensions/wallext1.jpeg";
import wallext2 from "../Work images/Wall-extensions/wallext2.jpeg";
import wallext3 from "../Work images/Wall-extensions/wallext3.jpeg";
import wallext4 from "../Work images/Wall-extensions/wallext4.jpeg";
import wallext5 from "../Work images/Wall-extensions/wallext5.jpeg";
import wallext6 from "../Work images/Wall-extensions/wallext6.jpeg";
import wallext7 from "../Work images/Wall-extensions/wallext7.jpeg";
import wallext8 from "../Work images/Wall-extensions/wallext8.jpeg";
import wallext9 from "../Work images/Wall-extensions/wallext9.jpeg";
import wallext10 from "../Work images/Wall-extensions/wallext10.jpeg";
import wallext11 from "../Work images/Wall-extensions/wallext11.jpeg";
/**Fence**/
import fence1 from "../Work images/Fence Painting/Fence1.jpeg";
import fence2 from "../Work images/Fence Painting/fence2.jpeg";
import fence3 from "../Work images/Fence Painting/fence3.jpeg";
import fence4 from "../Work images/Fence Painting/fence4.jpeg";
import fence5 from "../Work images/Fence Painting/fence5.jpeg";
import fence6 from "../Work images/Fence Painting/fence6.jpeg";
import fence7 from "../Work images/Fence Painting/fence7.jpeg";
import fence8 from "../Work images/Fence Painting/fence8.jpeg";
import fence9 from "../Work images/Fence Painting/fence9.jpeg";
/**wall Repairs**/
import wallrepair1 from "../Work images/Wall-repairs and painting/wallrepair1.jpeg";
import wallrepair2 from "../Work images/Wall-repairs and painting/wallrepair2.jpeg";
import wallrepair3 from "../Work images/Wall-repairs and painting/wallrepair3.jpeg";
import wallrepair4 from "../Work images/Wall-repairs and painting/wallrepair4.jpeg";
import wallrepair5 from "../Work images/Wall-repairs and painting/wallrepair5.jpeg";
import wallrepair6 from "../Work images/Wall-repairs and painting/wallrepair6.jpeg";
import wallrepair7 from "../Work images/Wall-repairs and painting/wallrepair7.jpeg";
import wallrepair8 from "../Work images/Wall-repairs and painting/wallrepair8.jpeg";
import wallrepair9 from "../Work images/Wall-repairs and painting/wallrepair9.jpeg";
import wallrepair10 from "../Work images/Wall-repairs and painting/wallrepair10.jpeg";
import wallrepair11 from "../Work images/Wall-repairs and painting/wallrepair11.jpeg";
import wallrepair12 from "../Work images/Wall-repairs and painting/wallrepair12.jpeg";
import wallrepair13 from "../Work images/Wall-repairs and painting/wallrepair13.jpeg";
import wallrepair14 from "../Work images/Wall-repairs and painting/wallrepair14.jpeg";
import wallrepair15 from "../Work images/Wall-repairs and painting/wallrepair15.jpeg";
import wallrepair16 from "../Work images/Wall-repairs and painting/wallrepair16.jpeg";


const Gallery = () => {
    return (
        <div id="gallery" className="gallery-wrapper">
        <div    className= "gallery-heading">
            <h1>Gallery</h1>
        </div>
        <div className="carousels-wrapper">
            {/*** loft-conversions*/}
            
            <div className="carousel-right"> 
            <div className="carousel-wrapper">
            <div className="carousel-heading">
            <h2>Loft Conversions</h2>
        </div >
            <Carousel className="main-slide" infiniteLoop autoPlay>
            
            <div>
                <img src={Loft1} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft2} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft3} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft4} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft5} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft6} alt="work in progress"/>
            </div>
            <div >
                <img src={Loft7} alt="work in progress"/>
            </div>
            <div >
                <img src={Loft8} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft9} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft10} alt="work in progress"/>
            </div>
            <div>
                <img src={Loft11} alt="work in progress"/>
            </div>
            <div >
                <img src={Loft12} alt="work in progress"/>
            </div>
            <div >
                <img src={Loft13} alt="work in progress"/>
            </div>
            <div >
                <img src={Loft14} alt="work in progress"/>
            </div>
                <div>
                <img src={Loft15} alt="work in progress"/>
            </div>
        </Carousel>
        </div>
           

            {/*** */}
            {/** wall extension*/}
            <div className="carousel-wrapper">
            <div className="carousel-heading">
            <h2>Wall Extensions</h2>
        </div >
            <Carousel className="main-slide" infiniteLoop autoPlay>
            
            <div >
                <img src={wallext1} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext2} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext3} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext4} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext5} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext6} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext7} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext8} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext9} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext10} alt="work in progress"/>
            </div>
            <div >
                <img src={wallext11} alt="work in progress"/>
            </div>
        </Carousel>
        </div>
            </div>
            
            {/*** */}
            {/** Fence*/}
            <div className="carousel-left">
            <div className="carousel-wrapper">
            
            <div className="carousel-heading">
            <h2>Fence Painting</h2>
        </div >
            <Carousel className="main-slide" infiniteLoop autoPlay>
            
            <div >
                <img src={fence1} alt="work in progress"/>
            </div>
            <div >
                <img src={fence2} alt="work in progress"/>
            </div>
            <div >
                <img src={fence3} alt="work in progress"/>
            </div>
            <div >
                <img src={fence4} alt="work in progress"/>
            </div>
            <div >
                <img src={fence5} alt="work in progress"/>
            </div>
            <div >
                <img src={fence6} alt="work in progress"/>
            </div>
            <div >
                <img src={fence7} alt="work in progress"/>
            </div>
            <div >
                <img src={fence8} alt="work in progress"/>
            </div>
            <div >
                <img src={fence9} alt="work in progress"/>
            </div>
         
        </Carousel>
        
            </div>
            
            {/*** */}
            {/** Wall repair***/}
            <div className="carousel-wrapper">
            <div className="carousel-heading">
            <h2>Wall Repairs and Painting</h2>
        </div >
            <Carousel className="main-slide" infiniteLoop autoPlay>
            
            <div >
                <img src={wallrepair1} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair2} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair3} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair4} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair5} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair6} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair7} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair8} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair9} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair10} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair11} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair12} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair13} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair14} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair15} alt="work in progress"/>
            </div>
            <div >
                <img src={wallrepair16} alt="work in progress"/>
            </div>
        </Carousel>
        </div>
            </div>
            </div>
            {/*** */}
    
    
    </div>
    
)

}

export default Gallery

