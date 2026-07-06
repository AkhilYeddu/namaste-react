import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (<h1 id = "heading">Namaste React using JSX ⚛️</h1>)


// Functional Component

const HeadingComponent = ()=>{
    return <h1 className="heading">Namaste Functional Component</h1>
}
// BOTH ARE SAME
const HeadingComponent2 = ()=> (
    <h1 className="heading">Namaste Functional Component</h1>
);









const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


