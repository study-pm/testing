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
                throw new Error(`Invalid input argument type ${typeof item}: must be a string or number`);
            }
            const parsed = parseInt(item);
            try {
                if (Number.isNaN(parsed)) {
                    throw new Error(`must be a natural number`);
                }
                if (parsed < 1) {
                    throw new Error(`must be an integer greater than zero`);
                }
                if (parsed > Number.MAX_SAFE_INTEGER) {
                    throw new Error(`must be within safe integer range`);
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
            throw new Error("Invalid triangle: no triangle can be constructed from the input values");
        }
        this.sides = sides
    }
    static kinds = new Map([
        [1, { en: "scalene", ru: "равносторонний" }],
        [2, { en: "isosceles", ru: "равнобедренный" }],
        [3, { en: "equilateral", ru: "равносторонний" }]
    ]);
    get kind() {
        if (this.sides[0] === this.sides[1] === this.sides[2]) return 3;
        if (this.sides[0] === this.sides[1]
         || this.sides[0] === this.sides[2]
         || this.sides[1] === this.sides[2])
            return 2;
        return 1;
    }
}
