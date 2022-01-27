export function fizzBuzz(n) {
    var three = n % 3;
    var five = n % 5;
    if (three === 0 && five === 0){
        return 'FizzBuzz'
    }
    if (three === 0){
    return 'fizz'
    }
    if (five === 0){
        return 'buzz'
    }
    throw new Error('Not multiples of 3 or 5 !')

}
