import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


const AppLayout = ()=>{
    return(
        <div className="app">
        <Header/>
        {/* {if path is / then it should render} */}
        <Body/>
        {/* {if path is /about then it should render} */}
        <About/>
        {/* {if path is /contact then it should render} */}
        <Contact/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            }

        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)



