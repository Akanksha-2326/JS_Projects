import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentsMenu =() => {

    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId);

    if (resInfo=== null) return ( <Shimmer />) ;

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2].card.card.info;
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)
    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id} > {item.card.info.name} - {"Rs."} {item.card.info.price /100  || item.card.info.name.defaultPrice/100 }</li>
                ))}
                // {/* <li>{itemCards[0].card.info.name}</li>
                // <li>{itemCards[1].card.info.name}</li>
                // <li>{itemCards[2].card.info.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurentsMenu;