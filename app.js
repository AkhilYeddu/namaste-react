import React from "react";
import ReactDOM from "react-dom/client";



// Functional Component

const HeadingComponent = ()=>{
    return (
        <div id= "container">
            <Title/>
            
            <h2 id="chinno">{console.log("hello") }</h2>
            <h1 className="heading">Namaste Functional Component ⚛️</h1>
        </div>
    )
}

// Another way to write function component
const Title = ()=> (
    <h1 className="header">Namaste React using JSX 🚀
    </h1>
    
)


const element2 = (
    <span>Namaste React Element 2 ⚛️</span>
)

// React Element
const element = (
    <h1>
    {element2}
        Namaste React Element 🚀
        <HeadingComponent/>
    </h1>
   
)




const number = 26;






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);


