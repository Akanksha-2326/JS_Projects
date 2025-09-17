        
import React, { useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext.js";




const AppLayout = () => {
    const [userName, setUserName] = useState()
    useEffect(() =>{
        const data ={
            loggedInUser : "Akshay Saini",
        }
        setUserName(data.loggedInUser)

    },[])

    return(
        <UserContext.Provider value={{loggedInUser: userName , setUserName}}> 
        <div className="app">
            <Header/>
            <Outlet/> 
        </div>
        </UserContext.Provider>
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