'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circle = document.getElementsByClassName('circle');
console.log(circle);

const circle1 = document.querySelectorAll('.circle');
console.log(circle1);

circle1.forEach((item, i) => {
    console.log(i + 1,': ', item);
});

const oneCircle = document.querySelector('.circle');
console.log(oneCircle);

const oneButton = document.querySelector('button');
console.log(oneButton);


