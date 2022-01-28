export function fizzBuzz(n) {
    if (isNaN(n)) {
        throw new Error('Not multiples of 3 or 5 !');
    } else {
        let result = '';
        if (n % 3 === 0) {
            result = 'fizz';
        }
        if (n % 5 === 0) {
            result += 'buzz;
        }
        return result;
    }
}
