const { render, screen } = require("@testing-library/react")
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("should render header component with a login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name : "login"});

    expect(loginButton).toBeInTheDocument()

})

it("should render header component with a Cart 0 items", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)")

    expect(cartItems).toBeInTheDocument()

})

it("should render header component with a Cart items", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/) // we can also write regex

    expect(cartItems).toBeInTheDocument()

})