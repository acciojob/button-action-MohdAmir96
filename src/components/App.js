import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [display, setDisplay] = useState(false)
  return (
    <div className="App" id="main">
      // Do not alter the main div
      {/* Create a paragraph with id = para and button with id = click inside div with id = main.
 
Acceptance criteria:

para must not be visible during initial render.
upon clicking the button, paragraph must be visible with content "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy" */}
      <div className="main">
        <p style={{ display: display ? 'block' : 'none' }} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        <button onClick={() => setDisplay(true)} id="click">button</button>
      </div>

    </div>
  );
}

export default App
