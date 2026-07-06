import React from "react";
import ReactDOM from "react-dom/client";

const Title =()=> (
    <h1 className="header">
        Namaste React using JSX 🚀
    </h1>
)


// Functional Component
const HeadingComponent = ()=>{
    return (
        <div id= "container">
            <Title/>
            <Title></Title> 
            {Title()}
            <h2 id="chinno">{console.log("hello") }</h2>
            <h1 className="heading">Namaste Functional Component ⚛️</h1>
        </div>
    )
}





const number = 26;






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);



