import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurentCard";
import UserContext from "../utils/UserContext";

const Body = (props) => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filteredRestraurent , setFilteredRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);
    const {loggedInUser, setUserName} = useContext(UserContext);


    console.log("Check1" , listOfRestro)
    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5925785&lng=73.7183639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        setListOfRestro(json.data.cards[4].card.card.gridElements?.infoWithStyle.restaurants );
        setFilteredRestaurent(json.data.cards[4].card.card.gridElements?.infoWithStyle.restaurants );
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) 
        return(
            <h1>Oops you are offline !!! Please check your internet connect</h1>
        )

    // if(listOfRestro.length === 0){
    //     return <Shimmer/>
    // }  ==> we are replacing this code with listOfRestro.length === 0 ? <Shimmer /> : (ternary operator)

    return listOfRestro.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex text-center">
                <div className="search m-4 p-4">
                    <input type="text"className="border border-solid border-black " value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="px-4 py-2 bg-green-100 m-4 border border-gray-400" onClick={() => {
                        // Filter the restaurent cards and update the UI
                        let filteredRestro = listOfRestro.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ) ;
                        setFilteredRestaurent(filteredRestro);
                        console.log(searchText);
                    }}> Search
                    </button>
                <button className= "px-4 py-2 bg-green-100 m-3 border border-gray-400"
                onClick={() => {
                    let filterRestro = listOfRestro.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setFilteredRestaurent(filterRestro);
                }}
                >Top Rated Restaurents</button>
                </div>
                <div className="">
                    <label>User Name : </label>
                    <input className="border border-black m-4 p-2 search" value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)} />
                </div>
                
            </div>
            <div className="flex">
                {filteredRestraurent.map((restaurent) => (
                    <Link
                    key={restaurent.info.id}
                     to= {"restaurents/" + restaurent.info.id}
                     >
                    {/* {restaurent.info.promoted ? (
                        <RestaurentCardPromoted resData = {restaurent} />
                    ) :
                    ( */}
                        <RestaurentCard  resData= {restaurent}/>
                    {/* )
                    } */}
                    </Link>     
                ))}
            </div>

        </div>
    )
}

export default Body;