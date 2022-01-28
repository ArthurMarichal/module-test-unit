// Add the unit tests of the sum function here
import {sum} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test("Should throw an error if it's not numbers", () => {
    expect( () => {sum('a','b')}).toThrow('Une des valeurs n\'est pas un nombre !')
})
