        
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import { createBrowserRouter , RouterProvider } from "react-router-dom"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentsMenu from "./components/RestaurentsMenu";
import Grocery from "./components/Grocery.js";



const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/> 
        </div>
    )
}

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element:<Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Grocery />
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurentsMenu />
            }
        ],
       errorElement: < Error />
        
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {AppRoute}/>);