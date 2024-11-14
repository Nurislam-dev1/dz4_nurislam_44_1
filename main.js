                      //1.Счетчик
let count = 0;
const counterElement = document.getElementById('counter');

document.getElementById('increment').onclick = function() {
    count++;
    counterElement.textContent = count;
    counterElement.className = 'green'; // Меняем цвет на зеленый
};

document.getElementById('decrement').onclick = function() {
    if (count > 0) {
        count--;
        counterElement.textContent = count;
        counterElement.className = 'red'; // Меняем цвет на красный
    }
};
                      //Задание 2
const box = document.getElementById('box');
const coordsDisplay = document.getElementById('coords');

box.addEventListener('mousemove', function(event) {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    coordsDisplay.textContent = `X: ${x}, Y: ${y}`;
});
                            //Задание-3

document.addEventListener('DOMContentLoaded', function() {
    const redLight = document.getElementById('red');
    const greenLight = document.getElementById('green');
    const yellowLight = document.getElementById('yellow');

    const color = prompt("Введите цвет: 'Красный' или 'Зеленый'");
    if (color === 'Красный') {
        redLight.classList.add('red');
        alert("STOP");
    } else if (color === 'Зеленый') {
        greenLight.classList.add('green');
        alert("GO");
    }
});