import React from "react";

class UserClass extends React.Component{
    constructor(props){
            super(props) // mandatory to write super(props) why??
            console.log(props)

            this.state = {
                count : 0
            }
        }
 
    render(){
        const {name, location, contact} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h2>Count = {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>
                    Click me
                </button>
                <h3>Name : {name}</h3>
                <h3>City : {location}</h3>
                <h3>Contact : {contact}</h3>
        </div>
        )
    }
}

export default UserClass