import {  render, screen } from "@testing-library/react"
import Body from "../Body"
import { data } from "@remix-run/router"
import MOCK_DATA from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"


global.fetch = jest.fn(
    ()=>{
        return Promise.resolve({
            json : ()=>{
                return Promise.resolve(MOCK_DATA)
            }
        })
    }
)

it("should render body component with search button", async()=>{

    await act(async()=>
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
)

const searchBtn = screen.getByRole("button", {name : "Search"})

expect(searchBtn).toBeInTheDocument()
    


})