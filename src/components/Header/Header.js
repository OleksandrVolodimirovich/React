import React, {useState} from "react";
import "./Header.css";

function Header(user) {
const [click, setclick] = useState(0);
const tabButton = () => {
  return setclick(click + 1);
}

  return (
    <div className="header">
      <h1>Header</h1>
      <p>РЕКОМЕНДОВАНИЙ варіант =&gt; Ви натицяли {click} разів</p>
      <button onClick={tabButton}>Тиць</button>
    </div>
  );
}

export default Header;
