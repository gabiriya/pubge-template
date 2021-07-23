import React from "react";
import logo from "../../components/pubglogo.jpg";
import Button from "../button/button.component";

const onToggle = () => {
 const burger = document.querySelector(".burger");
 const nav = document.querySelector(".nav-links");
 nav.classList.toggle("nav-active");
 burger.classList.toggle("toggle");
};

function Header() {
 return (
  <div>
   <header>
    <nav>
     <div className="logo">
      <img src={logo} alt="logo pubg" />
     </div>
     <div className="container">
      <ul className="nav-links">
       <li>
        <a href="#">Home</a>
       </li>
       <li>
        <a href="#">Seasons</a>
       </li>
       <li>
        <a href="#">News</a>
       </li>
       <li>
        <a href="#">Community</a>
       </li>
       <li>
        <a href="#">Support</a>
       </li>
      </ul>
     </div>
     <div className="btn">
      <Button value="Log in" />
      <Button value="Buy Now!" />
      {/* <button>Log in</button>
      <button>Buy Now!</button> */}
     </div>
     <div className="burger" onClick={onToggle}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
     </div>
    </nav>
    <div className="title">
     <h1>SEASON 13</h1>
     <h3>HIDE, SEEK, SURVIVE</h3>
     {/* <button>LEARN MORE</button> */}
     <Button value="LEARN MORE" />
    </div>
   </header>
  </div>
 );
}

export default Header;
