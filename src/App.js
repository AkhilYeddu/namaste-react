import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, Route, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


// Chunking
// Lazy Loading
// Dynamic Bundling
// On Demand Loading
// Dynamic Import
// Code Splitting
const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = ()=>{
    return(
        <div className="app">
        <Header/>
        <Outlet/>
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
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path : "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery/>
                </Suspense> 
            }

        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)



