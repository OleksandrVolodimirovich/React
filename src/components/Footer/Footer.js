import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <h1>Footer</h1>
      <p>Відкрий консоль</p>
      <button onClick={props.handleClick}>button</button>
    </div>
  );
}
export default Footer;