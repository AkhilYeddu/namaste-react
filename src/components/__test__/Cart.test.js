
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter, useParams } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../../utils/all_menus.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn()
}))

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("should load Restaurant Menu Component", async () => {

    useParams.mockReturnValue({ resId: "1001" })

    render(
       <BrowserRouter>
            <Provider store={appStore}>
            <Header></Header>
            <RestaurantMenu />
            <Cart></Cart>
            </Provider>
       </BrowserRouter>
        
        
        
    )

    const accordionHeader = await screen.findByText("Pizzas (4)")

    fireEvent.click(accordionHeader)

    const foodItems = screen.getAllByTestId("foodItems")

    expect(foodItems.length).toBe(4)

    const addBtns = screen.getAllByRole("button", {name : "Add"})


    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument()
    
    fireEvent.click(addBtns[0])
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    fireEvent.click(addBtns[1])
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()


    expect(screen.getAllByTestId("foodItems").length).toBe(6) // card count will 6 i.e resMenu + Cart both share the same itemList

    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"})) // will clear cards in cart compoent, so count comes back 4 (i.e resmenu cards)

    expect(screen.getAllByTestId("foodItems").length).toBe(4)
    expect(screen.getByText("Your cart is empty!")).toBeInTheDocument

    
    
    
})

