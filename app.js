import React from "react";
import ReactDOM from "react-dom/client";

// Another way to write function component
const Title = ()=> (
    <h1 className="header">Namaste React using JSX 🚀</h1>
)


// React Element
const element = (
    <h2>Namaste React Element 🚀</h2>
)

const number = 26;

// Functional Component

const HeadingComponent = ()=>{
    return (
        <div id= "container">
            <Title/>
            {element}
            <h2 id="chinno">{console.log("hello") }</h2>
            <h1 className="heading">Namaste Functional Component ⚛️</h1>
        </div>
    )
}










const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


