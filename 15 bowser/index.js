console.log('hello');
console.log(globalThis.innerWidth)

const row_1 = document.querySelector('#row_1');
const row_2 = document.querySelector('#row_2');

row_1.addEventListener('click', (e) => {
    console.log('hello', e.target.innerText);
})

row_2.addEventListener("mousemove", ({ clientX, clientY }) => {
    console.log(clientX, clientY);
})