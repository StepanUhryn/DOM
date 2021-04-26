'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

console.dir(btns);

/*
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.color = 'white';

btns[1].style.borderRadius = '100%';

//circles[1].style.backgroundColor = 'red';

/!*
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'red';
}*!/

hearts.forEach(item => {
    item.style.width = '10%';
})*/

const div = document.createElement('div');
//const text = document.createTextNode('Тут був я!');
div.classList.add('black');

//document.querySelector('.wrapper').append(div);

//document.body.append(div);

//wrapper.append(div);

//wrapper.prepend(div);

//hearts[0].before(div);
hearts[0].after(div);