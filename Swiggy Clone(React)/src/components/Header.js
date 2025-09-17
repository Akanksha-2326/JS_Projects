import React, { useContext, useState} from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    // let loginBtn = "Login";

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus()
    // const data = useContext(UserContext);
    const {loggedInUser} = useContext(UserContext);
    // console.log({loggedInUser});

    return(
        <div className= "flex shadow-lg justify-between">
            <div className="m-4"> 
                <img className="w-40" src={LOGO_URL} ></img>
            </div>
            <div className="m-4 p-4 justify-between px-4 ">
                <ul className="flex space-x-6 items-center">
                    <li className="text-red-500">Online status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact us</Link></li>
                    <li><Link to= "/grocery" >Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                    <button className="login-btn" onClick={() => {
                         loginBtn === "Login" ? 
                            setLoginBtn("Logout")
                            : setLoginBtn("Login");
                    }
                       
                    }>{loginBtn}</button>
                    </li>
                    <li>
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;