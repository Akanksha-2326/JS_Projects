
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            userInfo: {
                name : "Dummy",
                location : "Default",
            }
        };
        console.log("Constructor ")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })

        console.log(json);
        console.log("Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Component Did update");
    }

    componentWillUnmount(){
        console.log("Component will UnMount")
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo ;
        console.log("Render ")
        return(
            <div className="user-card">
                <img src = {avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : {this.props.Contact}</h4>
            </div>
        );
    }
}

export default UserClass;