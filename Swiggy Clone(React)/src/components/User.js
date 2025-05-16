import React from "react";

const User = (props) =>{
    const {Name, Location, Contact} = props;
    return(
        <div className="user-card">
            <h2>Name : {Name}</h2>
            <h3>Location : {Location}</h3>
            <h4>Contact : {Contact}</h4>
        </div>
    );
}

export default User; 