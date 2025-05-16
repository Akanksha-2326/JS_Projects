import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent cons");

        this.state = {
            
        }
    }
    
    render(){
        
        return(
            <div>
                <h1>About us </h1>

                <UserClass Name = {"First"} Location={"Jalna"} Contact = {"Tinu@gmail.com"} />
                
            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About us </h1>
//             {/* <User Name = {"Akanksha (Function)"} Location={"Pune"} Contact = {"Akanksha@gmail.com"}  />  */}
//             <UserClass Name = {"Tinu (Class)"} Location={"Jalna"} Contact = {"Tinu@gmail.com"} />
//         </div>
//     )
// }

export default About;