import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="Home" className="header-wraper">
            <div className="main-info">
                <h1>Picasso</h1>
                <h1>Painting and decorating </h1>
                <Typed
                className="typed-text"
                strings={[ "If you want your job done!" , "Quickly call Stan and his team!"]}
                typeSpeed={30}
                backSpeed={45}
                loop
                />
                <Link smooth={true} to="contact" className="btn-main-offer" href="#">Get in Touch</Link>
            </div>
        </div>
    )
}

export default Header


