import React from "react";

import "./button.styles.css";

const Button = (props) => {
 return (
  <>
   {/* <input className="btn" type="button" value={props.value} /> */}
   <button>{props.value}</button>
  </>
 );
};

export default Button;
