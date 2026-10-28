const { render, screen } = require("@testing-library/react")
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("should render header compoenent with a login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument()

})