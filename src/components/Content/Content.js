import React, {useState} from "react";
import "./Content.css";

function Content() {
  const [count, setCount] = useState(0);
  
  const clickButton = () => {
    return count +1;
  }
  return (
    <div className="content">
      <h1>Content</h1>
      <p>Варіант-2 =&gt; Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Лічильник</button>
    </div>
  );
}
export default Content;
