import React from "react";
import ReactDOM from "react-dom/client";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filteredRestraurent , setFilteredRestaurent] = useState([]);
    const [searchText, setSearchText] = useState("");
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
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button onClick={() => {
                        // Filter the restaurent cards and update the UI
                        let filteredRestro = listOfRestro.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ) ;
                        setFilteredRestaurent(filteredRestro);
                        console.log(searchText);
                    }}> Search
                    </button>
                </div>
                <button className="top-btn"
                onClick={() => {
                    let filterRestro = listOfRestro.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setFilteredRestaurent(filterRestro);
                }}
                >Top Rated Restaurents</button>
            </div>
            <div className="res-container">
                {filteredRestraurent.map((restaurent) => (
                    <Link
                    key={restaurent.info.id}
                     to= {"restaurents/" + restaurent.info.id}
                     >
                    <RestaurentCard  resData= {restaurent}/>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Body;