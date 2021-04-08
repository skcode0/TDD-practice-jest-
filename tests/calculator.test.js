import { expect } from '@jest/globals';
import {calculator} from '../code/calculator';

// addition
test('adding two integers', () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test('adding two floats', () => {
    expect(calculator.add(-0.5, 10.5)).toBeCloseTo(10.0);
});

// subtraction
test('subtracting two integers', () => {
    expect(calculator.subtract(1, 3)).toBe(-2);
});

test('subtracting two floats', () => {
    expect(calculator.subtract(-4.2, -5.3)).toBeCloseTo(1.1);
});

// multiplication
test('multiplying two integers', () => {
    expect(calculator.multiply(0, 14)).toBe(0);
});

test('multiplying two floats', () => {
    expect(calculator.multiply(2.0, 0.5)).toBeCloseTo(1.0);
});

// division
test('dividing two integers', () => {
    expect(calculator.divide( 10, 5)).toBeCloseTo(2);
});

test('dividing two floats', () => {
    expect(calculator.divide(2.0, 0.5)).toBeCloseTo(4.0);
});

test('dividing by 0', () =>{
    expect(calculator.divide(1.53, 0)).toBe("undefined");
});


// default value test
test('only 1 parameter given', () => {
    expect(calculator.add(1)).toBeCloseTo(1);
    expect(calculator.subtract(5)).toBeCloseTo(5);
    expect(calculator.multiply(1000)).toBeCloseTo(1000);
    expect(calculator.divide(-4)).toBeCloseTo(-4);
});