import Triangle from './math.js';

document.form_novalidate.addEventListener('submit', (evt) => {
    evt.preventDefault(); // Prevent form submission

    const sides = [evt.target.side1.value, evt.target.side2.value, evt.target.side3.value];
    const output = evt.target.result;

    try {
        const triangle = new Triangle([sides[0], sides[1], sides[2]]);
        const kind = Triangle.kinds.get(triangle.kind).en;
        output.textContent = `The triangle is ${kind}.`;
    }
    catch (err) {
        output.textContent = `Error: ${err.message}`;
    }
});

document.form_novalidate.addEventListener('reset', (evt) => {
    evt.target.result.textContent = null;
});
