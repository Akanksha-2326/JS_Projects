
import React, { useState } from "react";
import ItemList from "../ItemList";

const RestaurentCategory  = ({data, showItems, setShowIndex}) => {
  // console.log("Check Akanksha Data -  ");
  // console.log(data);
  


  const handleClick = () =>{
    // console.log("clicked");
    // setShowItems(!showItems)
    setShowIndex();
  }
  
    return (
        <div>
          <div className=" bg-gray-50 mx-auto my-4 shadow-lg p-4 w-6/12">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <span className="font-bold text-lg"> {data.title}({data.itemCards.length})  </span>
              <span>⬇</span>
            </div>
            {showItems && <ItemList items = {data.itemCards} />}
            {/* <ItemList items = {data.data.itemCards} /> */}
          </div>
        </div>
    )
}

export default RestaurentCategory;