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
        expect(() => new Triangle(['a', 'b', 'c'])).toThrowError('Invalid input argument value a: должно быть натуральное число');
    });

    it('should throw an error for negative or zero input', () => {
        expect(() => new Triangle([1, 0, 3])).toThrowError('Invalid input argument value 0: должно быть целое число больше нуля');
        expect(() => new Triangle([1, -2, 3])).toThrowError('Invalid input argument value -2: должно быть целое число больше нуля');
    });

});
