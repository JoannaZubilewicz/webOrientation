let pilka = document.querySelector('.pilka');
let kwadrat = document.querySelector('.kwadrat');
let output = document.querySelector('.output');

window.addEventListener("deviceorientation", (e) => {
    let x = e.beta;  // -180, 180
    let y = e.gamma;  // -90, 90
});
if (x > 90) { x = 90 };
if (x < -90) { x = -90 };