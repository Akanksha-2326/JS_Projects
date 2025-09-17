import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurentCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines,avgRating, costForTwo} = resData?.info;
    const withPromotedLabel =(RestaurentCardPromoted) => {
    };
    // console.log(resData)
    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="m-4 p-2 w-[300px]">
            <div className="">
                <img className="rounded-lg" 
                alt= " image" 
                src={CDN_URL
                + cloudinaryImageId}>
                </img>
                <h3 className="res-name">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{loggedInUser}</h4>
            </div>
            
        </div>
    )
}

export const withPromotedLabel = (RestaurentCard) => {
    return(props) => {
        return(
            <div>
                <label>
                    Promoted
                </label>
                <RestaurentCard {...props} />
            </div>
        );
    };
};

export default RestaurentCard;