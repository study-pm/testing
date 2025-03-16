import Triangle from '../scripts/math.js';

const test_const = {
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    mean: Math.round(Number.MAX_SAFE_INTEGER/2)
}

describe('Triangle class', () => {
    it('exists: should create a new Triangle instance', () => {
        const triangle = new Triangle([3, 4, 5]);
        expect(triangle).toBeInstanceOf(Triangle);
        expect(triangle.sides).toEqual([3, 4, 5]);
    });

    it('equilateral: should identify an equilateral triangle', () => {
        const triangle = new Triangle([5, 5, 5]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('isosceles: should identify an isosceles triangle', () => {
        const triangle = new Triangle([4, 4, 6]);
        expect(triangle.kind).toBe(2);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('isosceles');
    });

    it('scalene: should identify a scalene triangle', () => {
        const triangle = new Triangle([3, 4, 5]);
        expect(triangle.kind).toBe(1);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('scalene');
    });

    it('lmt min: should handle extremely small numbers', () => {
        const triangle = new Triangle([test_const.min, test_const.min, test_const.min]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('near lmt min+1: should handle near small numbers', () => {
        const triangle = new Triangle([test_const.min+1, test_const.min+1, test_const.min+1]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('mean max/2: should handle mean numbers', () => {
        const triangle = new Triangle([test_const.mean, test_const.mean, test_const.mean]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('near lmt max-1: should handle near large numbers', () => {
        const triangle = new Triangle([test_const.max-1, test_const.max-1, test_const.max-1]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });

    it('lmt max: should handle extremely large numbers', () => {
        const triangle = new Triangle([test_const.max, test_const.max, test_const.max]);
        expect(triangle.kind).toBe(3);
        expect(Triangle.kinds.get(triangle.kind).en).toBe('equilateral');
    });
    
    it('not-exists: should throw an error for invalid triangle sides', () => {
        expect(() => new Triangle([1, 2, 5])).toThrowError('Invalid triangle: невозможно построить треугольник с указанными сторонами');
    });
    
    it('underflow min-1: should throw an error for negative or zero input', () => {
        expect(() => new Triangle([1, 0, 3])).toThrowError('Invalid input argument value 0: должно быть целое число больше нуля');
        expect(() => new Triangle([1, -2, 3])).toThrowError('Invalid input argument value -2: должно быть целое число больше нуля');
    });

    it('overflow max+1: should throw an error for exceeding maximum integer value', () => {
        expect(() => new Triangle([test_const.max+1, test_const.max+1, test_const.max+1])).toThrowError(`Invalid input argument value ${test_const.max+1}: не должно превышать максимального значения`);
    });
    
    it('format frac: should throw an error for fractional input', () => {
        expect(() => new Triangle([1, 2.0, 3.4])).toThrowError('Invalid input argument value 3.4: должно быть целое число');
    });
    
    it('format frac: should throw an error for fractional numbers', () => {
        expect(() => new Triangle([3.5, 4.2, 5.1])).toThrowError('Invalid input argument value 3.5: должно быть целое число');
    });

    it('type args NaN: exc non-numeric: should throw an error for non-numeric input', () => {
        expect(() => new Triangle(['a', 'b', 'c'])).toThrowError('Invalid input argument value a: должно быть натуральное число');
        expect(() => new Triangle(['3', '4', 'a'])).toThrowError('Invalid input argument value a: должно быть натуральное число');
    });
        
    it('type args NaN: should handle non-string, non-number inputs', () => {
        expect(() => new Triangle([3, 4, null])).toThrowError('Invalid input argument type object: должно быть числом или строковым представлением числа');
        expect(() => new Triangle([3, 4, true])).toThrowError('Invalid input argument type boolean: должно быть числом или строковым представлением числа');
    });

    it('type agrument: not array: should throw an error for non-array input', () => {
        expect(() => new Triangle('123')).toThrowError('Invalid argument format string: must be array of three values');
    });

    it('args count under: should throw an error for array with less than three elements', () => {
        expect(() => new Triangle([1, 2])).toThrowError('Invalid input array arguments count 2: must be exactly three values');
    });

    it('args count over: should throw an error for array with more than three elements', () => {
        expect(() => new Triangle([1, 2, 3, 4])).toThrowError('Invalid input array arguments count 4: must be exactly three values');
    });

});
