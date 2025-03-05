import { add } from '../src/StringCalculator';

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number for a single number input', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2')).toBe(3);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3,4,5,6,7,8,9')).toBe(45);
    });

    test('should return the sum of multiple numbers including new lines', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should return the sum of multiple numbers including new lines', () => {
        expect(add('1\n2,3\n4')).toBe(10);
    });

    test('should support custom delimiters of any length', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
    });

    test('should support multiple custom delimiters', () => {
        expect(add('//[*][%]\n1*2%3')).toBe(6);
    });

    test('should support multiple custom delimiters of any length', () => {
        expect(add('//[foo][baar]\n1foo2baar3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    test('should throw an error when a negative number is provided', () => {
        expect(() => add('-1,2')).toThrow('Negatives not allowed: -1');
    });

    test('should throw an error listing all negative numbers when multiple negatives are provided', () => {
        expect(() => add('1,-2,3,-5')).toThrow('Negatives not allowed: -2, -5');
    });

    test('should ignore numbers greater than or equal to 1000', () => {
        expect(add('1000,10')).toBe(10);
    });
});
