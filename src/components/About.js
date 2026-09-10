import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"
class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }
    componentDidMount(){
        // console.log("Parent component did mount")
    }

    render(){
        // console.log("Parent render")
        return(
        <div> 
            <UserContext.Consumer>
                {(data) => <h1 className="font-bold">USER : {data.loggedInUser}</h1>}
            </UserContext.Consumer>
            <h1>This is About page</h1>
            <h2>this is some information about this About Page</h2>
            <UserClass name={"First"} location={"Visakhapatnam (class)"} contact = {"8919562972 (class)"}/>
        </div>
        )
    }

}

export default About
