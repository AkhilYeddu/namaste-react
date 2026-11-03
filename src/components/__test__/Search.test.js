import { render } from "@testing-library/react"
import Body from "../Body"
import { data } from "@remix-run/router"

global.fetch = jest.fn(
    ()=>{
        return Promise.resolve({
            json : ()=>{
                return Promise.resolve(data)
            }
        })
    }
)

it("should render body component with search button", ()=>{
    render(<Body/>)

})