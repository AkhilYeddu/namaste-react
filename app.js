import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element - JSObject => HTML Element(render())

const heading = React.createElement("h1",{id : "heading"}, "Namaste React ⚛️");

// JSX - HTML Like or XML Like syntax
// transpiled before it reaches the JS Engine -> Parcel -> Babel
// JSX(Babel) => React.createElement => React Element - JSObject => HTML Element(render())
const jsxHeading = <h1 id = "heading">Namaste React using JSX ⚛️</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
