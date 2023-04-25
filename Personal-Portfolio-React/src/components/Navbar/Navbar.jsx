import React from "react";
import {IoIosArrowDropdownCircle} from "react-icons/io"
import {FaBars} from "react-icons/fa"
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
      <span className="n-name"><IoIosArrowDropdownCircle/> Onclick</span>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>|</li>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivce
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
         <div className="n-right">
         <div className="n-list">
       <ul style={{ listStyleType: "none" }}>
         <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Login
              </Link>
            </li>
            <li align="center" style={{border:"1px solid orange",borderRadius:"50px",width:"4rem",height:"1.3rem"}}>
          
                Signup
            
            </li>
          </ul>
          </div>
      </div>
      <span className="n-button"><FaBars/></span>
      </div>
    </div>
  );
};

export default navbar;
