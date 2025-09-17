import {useState, useEffect } from "react";
import { MENU_URL, NEW_MENU_URL } from "../utils/constants";


const useRestaurentMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    });

    const fetchData=async ()=>{
        const data=await fetch(NEW_MENU_URL +resId);
        const json=await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurentMenu;