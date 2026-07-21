import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    const {error, status, statusText} = err;
    console.log(err)
    return(
        <div>
            <h1>Oops! Something went Wrong!</h1>
            <h2>{error.message}</h2>
            <h3>{status} : {statusText}</h3>

        </div>
    )
}

export default Error