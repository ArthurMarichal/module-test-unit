import {fizzBuzz} from "../src/fizzbuzz";

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('should return buzz on multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test('should return fizzBuzz on multiples of both', () => {
  expect(fizzBuzz(75)).toBe('fizzbuzz');
});

test('Should throw an error', () => {
  expect( () => {fizzBuzz()}).toThrow('ot multiples of 3 or 5 !')
});
