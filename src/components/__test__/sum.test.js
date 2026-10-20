import { sum } from "../sum"

test("Addition of 2 numbers is : ", ()=>{
    const result = sum(5,5);

    // Assertion
    expect(result).toBe(10);
})