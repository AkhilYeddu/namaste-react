/*

create : <div id= "parent">
                <div id= "child1">
                    <h1> I am H1 </h1>
                    <h2> I am H2 </h2>
                </div>

                <div id= "child2">
                    <h3> I am H3 </h3>
                    <h4> I am H4 </h4>
                </div>
         </div>


    React Element (object) => HTML
*/

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
