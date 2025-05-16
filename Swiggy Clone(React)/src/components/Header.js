import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // let loginBtn = "Login";

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus()
    return(
        <div className="flex">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact us</Link></li>
                    <li><Link to= "/grocery" >Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                         loginBtn === "Login" ? 
                            setLoginBtn("Logout")
                            : setLoginBtn("Login");
                    }
                       
                    }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;