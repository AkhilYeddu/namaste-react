import React from "react";

class UserClass extends React.Component{
    constructor(props){
            super(props) // mandatory to write super(props) why??
            console.log(this.props.name + " constructor")

            this.state = {
                userInfo:{
                    name : "dummy name",
                    location : "dummy location"
                }
            }
        }

    async componentDidMount(){
       
        console.log(this.props.name + " component did mount")
        const data = await fetch("https://api.github.com/users/AkhilYeddu");
        const json = await data.json();
        
        this.setState({
            userInfo : json
        })

        
        
       
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    
    render(){
        console.log(this.props.name + " render")
        
        const{name, location, avatar_url} = this.state.userInfo
        
        
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h3>Name : {name}</h3>
                <h3>City : {location}</h3>
                
        </div>
        )
    }
}

export default UserClass

/*

------- MOUNTING --------

constructor(dummy)
render(dummy)
    <HTML dummy>
component did mount
    <API Call>
    <this.setState> -> state variable changes, triggers reconcialtion 

------- UPDATE ------- 
render(api data)
    <HTML new api data>
component did update



*/