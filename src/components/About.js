import User from "./User"
import UserClass from "./UserClass"

const About = ()=>{
    return(
        <div>
            <h1>This is About page</h1>
            <h2>this is some information about this About Page</h2>
            <User name= {"Akhil (function)"}/>

            <UserClass name={"Akhil (class)"} location={"Visakhapatnam (class)"} contact = {"8919562972 (class)"}/>
        </div>
    )
}

export default About