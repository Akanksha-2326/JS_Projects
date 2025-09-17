import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentsMenu =() => {

    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId);
    // const [showItems, setShowItems] = useState(false)
    const [showIndex, setShowIndex] = useState(null)

    // console.log("Check AKANKSHA Rendered " + resInfo);
 
    if (resInfo=== null) return ( <Shimmer />) ;

    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2].card.card.info;
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log("Quick check " , resInfo)
    // console.log("Check AK ITem Cards ",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    );
    // console.log("Check Categories Value ", categories);
    return(
        <div className="text-center">
             <h1 className="font-bold my-6 text-2xl">{name}</h1>
             <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
             {/*
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id} >
                         {item.card.info.name} - {"Rs."} {item.card.info.price /100  || item.card.info.defaultPrice/100 }
                    </li>
                ))}
                <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> 
            </ul> */}

            {
                categories.map((category, index) => 
                   <RestaurentCategory key = {category?.card?.card?.title} data={category?.card?.card}
                     showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                   />
                )
            }

        </div>
    )
}

export default RestaurentsMenu;