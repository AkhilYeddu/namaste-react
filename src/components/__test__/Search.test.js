import {  fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { data } from "@remix-run/router"
import MOCK_DATA from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
import "@testing-library/jest-dom"

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
const searchInput = screen.getByTestId("searchInput")

fireEvent.change(searchInput, { target : { value : "pizza"}}) // mimicking the event obj (i.e event.target.value)
fireEvent.click(searchBtn)

// screen should load 2 cards with pizza
const cards =   screen.getAllByTestId("resCard")

console.log(cards.length)
expect(cards.length).toBe(2)

    


})