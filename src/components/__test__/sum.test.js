import { sum } from "../sum"

test("checking the addition of 2 numbers", ()=>{
    const result = sum(5,5);

    // Assertion
    expect(result).toBe(10);
})