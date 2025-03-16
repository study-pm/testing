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

});
