import React from "react";

class UserClass extends React.Component{
    constructor(props){
            super(props) // mandatory to write super(props) why??
            console.log(props)
        }

    render(){
        
        return(
            <div className="user-card">
                <h3>Name : {this.props.name}</h3>
                <h3>City : Visakhapatnam</h3>
                <h3>Contact : 8919262972</h3>
        </div>
        )
    }
}

export default UserClass