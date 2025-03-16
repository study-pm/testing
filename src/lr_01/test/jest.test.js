import Triangle from '../scripts/math.js';

const test_const = {
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    mean: Math.round(Number.MAX_SAFE_INTEGER/2)
}

describe('Triangle class', () => {
    it('should create a new Triangle instance', () => {
        const triangle = new Triangle([3, 4, 5]);
        expect(triangle).toBeInstanceOf(Triangle);
        expect(triangle.sides).toEqual([3, 4, 5]);
    });

    it('should identify an equilateral triangle', () => {
        const triangle = new Triangle([5, 5, 5]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('should identify an isosceles triangle', () => {
        const triangle = new Triangle([4, 4, 6]);
        expect(triangle.kind).toBe(2);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('isosceles');
    });

    it('should identify a scalene triangle', () => {
        const triangle = new Triangle([3, 4, 5]);
        expect(triangle.kind).toBe(1);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('scalene');
    });

    it('limit min: should handle extremely small (min) numbers', () => {
        const triangle = new Triangle([test_const.min, test_const.min, test_const.min]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('limit min+1: should handle extremely small (min) numbers', () => {
        const triangle = new Triangle([test_const.min+1, test_const.min+1, test_const.min+1]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });
    
    it('should throw an error for non-array input', () => {
        expect(() => new Triangle('123')).toThrowError('Invalid argument format string: must be array of three values');
    });

    it('should throw an error for array with less than three elements', () => {
        expect(() => new Triangle([1, 2])).toThrowError('Invalid input array arguments count 2: must be exactly three values');
    });

    it('should throw an error for array with more than three elements', () => {
        expect(() => new Triangle([1, 2, 3, 4])).toThrowError('Invalid input array arguments count 4: must be exactly three values');
    });

    it('should throw an error for non-numeric input', () => {
        expect(() => new Triangle(['a', 'b', 'c'])).toThrowError('Invalid input argument value a: должно быть натуральное число без пробелов и нецифровых символов');
    });

    it('should throw an error for negative or zero input', () => {
        expect(() => new Triangle([1, 0, 3])).toThrowError('Invalid input argument value 0: должно быть целое число больше нуля');
        expect(() => new Triangle([1, -2, 3])).toThrowError('Invalid input argument value -2: должно быть целое число больше нуля');
    });

    it('should throw an error for invalid triangle sides', () => {
        expect(() => new Triangle([1, 2, 5])).toThrowError('Invalid triangle: невозможно построить треугольник с указанными сторонами');
    });

    it('should throw an error for fractional numbers', () => {
        expect(() => new Triangle([3.5, 4.2, 5.1])).toThrowError('Invalid input argument value 3.5: должно быть целое число');
    });

    it('should handle non-numeric strings', () => {
        expect(() => new Triangle(['3', '4', 'a'])).toThrowError('Invalid input argument value a: должно быть натуральное число');
    });

    it('should handle non-string, non-number inputs', () => {
        expect(() => new Triangle([3, 4, null])).toThrowError('Invalid input argument type object: должно быть числом или строковым представлением числа');
        expect(() => new Triangle([3, 4, true])).toThrowError('Invalid input argument type boolean: должно быть числом или строковым представлением числа');
    });

    it('should handle extremely large inputs that exceed maximum integer value', () => {
        expect(() => new Triangle([test_const.max+1, test_const.max+1, test_const.max+1])).toThrowError('Invalid input argument value ' + (Number.MAX_SAFE_INTEGER + 1) + ': не должно превышать максимального значения');
    });

});
