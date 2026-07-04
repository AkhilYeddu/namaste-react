/*

create : <div id= "parent">
                <div id= "child">
                    <h1> I am H1 </h1>
                    <h2> I am H2 </h2>
                </div>
         </div>


    React Element (object) => HTML
*/

const parent = React.createElement("div",{id : "parent"},
    React.createElement("div",{id: "child"},
        [   React.createElement("h1",{},"I am H1"),
            React.createElement("h2",{},"I am H2")
        ]
    )
)
console.log(parent)

const heading = React.createElement("h1",
    {id : "heading", className : "headingClass"},
    "Hello World from React!");
// console.log(heading) // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
