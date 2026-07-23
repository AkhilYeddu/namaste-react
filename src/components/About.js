import User from "./User"
import UserClass from "./UserClass"

const About = ()=>{
    return(
        <div>
            <h1>This is About page</h1>
            <h2>this is some information about this About Page</h2>
            <User name= {"Akhil (function)"}/>

            <UserClass/>
        </div>
    )
}

export default About