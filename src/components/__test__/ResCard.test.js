import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"

it("should render RestaurantCard component with props data", ()=>{
    
    render(<RestaurantCard resData = {MOCK_DATA}></RestaurantCard>)

    const name = screen.getByText("Pizza Huttt")

    expect(name).toBeInTheDocument()

})