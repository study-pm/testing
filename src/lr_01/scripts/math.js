export default class Triangle {
    constructor(input) {
        if (!Array.isArray(input)) {
            throw new Error(`Invalid argument format ${typeof input}: must be array of three values`);
        }
        if (input.length !== 3) {
            throw new Error(`Invalid input array arguments count ${input.length}: must be exactly three values`);
        }
        const sides =  input.map(item => {
            if (typeof item !== 'string' && typeof item !== 'number') {
                throw new Error(`Invalid input argument type ${typeof item}: должно быть числом или строковым представлением числа`);
            }
            let parsed = item;
            if (typeof item === 'string') parsed = parseFloat(item);
            try {
                if (Number.isNaN(parsed)) {
                    throw new Error(`должно быть натуральное число`);
                }
                if (parsed % 1 !== 0) {
                    throw new Error(`должно быть целое число`);
                }
                if (parsed < 1) {
                    throw new Error(`должно быть целое число больше нуля`);
                }
                if (parsed > Number.MAX_SAFE_INTEGER) {
                    throw new Error(`должно быть внутри безопасного числового диапазона`);
                }
                return parsed;
            }
            catch(exc) {
                throw new Error(`Invalid input argument value ${item}: ${exc.message}`);
            }
        })
        if (sides[0] + sides[1] <= sides[2]
         || sides[0] + sides[2] <= sides[1]
         || sides[1] + sides[2] <= sides[0]) {
            throw new Error("Invalid triangle: невозможно построить треугольник с указанными сторонами");
        }
        this.sides = sides
    }
    static kinds = new Map([
        [1, { en: "scalene", ru: "разносторонний" }],
        [2, { en: "isosceles", ru: "равнобедренный" }],
        [3, { en: "equilateral", ru: "равносторонний" }]
    ]);
    get kind() {
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) return 3;
        if (this.sides[0] === this.sides[1]
         || this.sides[0] === this.sides[2]
         || this.sides[1] === this.sides[2])
            return 2;
        return 1;
    }
}
