import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    const {error, status, statusText} = err;
    console.log(err)
    return(
        <div>
            <h1>Oops! Something went Wrong!</h1>

        </div>
    )
}

export default Error