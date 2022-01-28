import {numberToWords} from "../src/numberToWords";

test('test nombre to word', () => {
    expect(numberToWords(1)).toBe('un')
});

test('test nombre to word', () => {
    expect(numberToWords(10)).toBe('dix')
});

test('test nombre to word', () => {
    expect(numberToWords(100)).toBe('cent')
});

test('test nombre to word', () => {
    expect(numberToWords(161)).toBe('cent soixante-un')
});

test('test nombre to word', () => {
    expect(numberToWords(1000)).toBe('mille')
});

test('test nombre to word', () => {
    expect(numberToWords(1001)).toBe('mille un')
});

test('test nombre to word', () => {
    expect(numberToWords(20)).toBe('vingt')
});