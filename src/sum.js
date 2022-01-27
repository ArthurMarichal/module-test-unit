export function sum(a, b) {
    if (typeof a === 'number'&& typeof b === 'number') {
    return a + b;
    } else {
        throw new Error('Une des valeurs n\'est pas un nombre !');
    }
}