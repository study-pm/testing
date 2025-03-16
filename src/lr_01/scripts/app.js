import Triangle from './math.js';

document.form_novalidate.addEventListener('submit', (evt) => {
    evt.preventDefault(); // Prevent form submission

    const sides = [evt.target.a.value, evt.target.b.value, evt.target.c.value];
    const output = evt.target.form_out
    const result = evt.target.result;
    const legend = evt.target.form_out.querySelector('legend');

    try {
        const triangle = new Triangle([sides[0], sides[1], sides[2]]);
        const kind = Triangle.kinds.get(triangle.kind).ru;
        legend.textContent = "Результат";
        result.textContent = `Треугольник ${kind}.`;
        output.classList.remove("state_error");
    }
    catch (err) {
        legend.textContent = "Ошибка";
        result.textContent = `${err.message}`;
        output.classList.add("state_error");
    }

    output.classList.add("is_on");
});

document.form_novalidate.addEventListener('reset', (evt) => {
    evt.target.result.textContent = null;
    evt.target.form_out.classList.remove("is_on");
});
