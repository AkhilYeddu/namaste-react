import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id : "parent"},
    [   React.createElement("div",{id : "child1"},
        [   React.createElement("h1",{},"I am H1"),
            React.createElement("h2",{},"I am H2")
        ]
        ),
        React.createElement("div",{id : "child2"},
        [   React.createElement("h3",{},"I am H3"),
            React.createElement("h4",{},"I am H4")
        ]
        )
    
    ]
   
)
console.log(parent)

const heading = React.createElement("h1",
    {id : "heading", className : "headingClass"},
    "Hello World from React!");
// console.log(heading) // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
