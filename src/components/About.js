import UserClass from "./UserClass"
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent component did mount")
    }

    render(){
        console.log("Parent render")
        return(
        <div> 
            <h1>This is About page</h1>
            <h2>this is some information about this About Page</h2>
            <UserClass name={"First"} location={"Visakhapatnam (class)"} contact = {"8919562972 (class)"}/>
            <UserClass name={"Second"} location={"Hyderabad (class)"} contact = {"7989406639 (class)"}/>
        </div>
        )
    }

}

export default About
