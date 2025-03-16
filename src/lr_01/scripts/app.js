import Triangle from './math.js';

document.form_novalidate.addEventListener('submit', (evt) => {
    evt.preventDefault(); // Prevent form submission

    const sides = [evt.target.a.value, evt.target.b.value, evt.target.c.value];
    const output = evt.target.result;

    try {
        const triangle = new Triangle([sides[0], sides[1], sides[2]]);
        const kind = Triangle.kinds.get(triangle.kind).en;
        output.textContent = `The triangle is ${kind}.`;
    }
    catch (err) {
        output.textContent = `Error: ${err.message}`;
    }

    evt.target.form_out.classList.add("is_on");
});

document.form_novalidate.addEventListener('reset', (evt) => {
    evt.target.result.textContent = null;
    evt.target.form_out.classList.remove("is_on");
});
