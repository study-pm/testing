import Triangle from './math.js';

let note = document.getElementById("admonition");
note.textContent += ` (но не более ${Number.MAX_SAFE_INTEGER.toLocaleString('ru')})`;

document.form_novalidate.addEventListener('submit', (evt) => {
    evt.preventDefault(); // Prevent form submission

    const sides = [evt.target.a.value, evt.target.b.value, evt.target.c.value];
    const output = evt.target.outputs;
    const result = evt.target.result;
    const legend = evt.target.outputs.querySelector('legend');

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
    evt.target.outputs.classList.remove("is_on");
});

document.form_novalidate.addEventListener("input", () => {
    form_novalidate.outputs.classList.remove("is_on");
});
