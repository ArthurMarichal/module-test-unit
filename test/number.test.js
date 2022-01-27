import {sum} from "../src/sum";

test("Should throw an error if it's not numbers", () => {
    expect( () => {sum('a','b')}).toThrow('Une des valeurs n\'est pas un nombre !')
})