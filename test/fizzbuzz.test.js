import {fizzBuzz} from "../src/fizzbuzz";

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
  expect(fizzBuzz(5)).toBe('buzz');
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});

// A completer