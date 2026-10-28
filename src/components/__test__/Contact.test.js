import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page TestCases", ()=>{

    test("should load contactus component", () => {
     
    render(<Contact></Contact>)

    const heading = screen.getByRole("heading")

    // Asssertion
    expect(heading).toBeInTheDocument()

    })


test("should find submit button in contactus component", () => {
     
    render(<Contact></Contact>)

    const button = screen.getByRole("button")

    // Asssertion
    expect(button).toBeInTheDocument()

    })

test("should find input - name in contactus component", () => {
     
    render(<Contact></Contact>)

    const inputName = screen.getByPlaceholderText("Name")

    // Asssertion
    expect(inputName).toBeInTheDocument()

    })
    

test("should find 2 input boxes in contactus component", () => {
    
    // Rendering
   render(<Contact></Contact>)


   // Querying
   const inputBoxes = screen.getAllByRole("textbox") // for multiple items, use AllBy

   // Assertion
   expect(inputBoxes.length).toBe(2)
    })

})


