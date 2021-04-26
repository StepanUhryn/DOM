/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


// задача 1

const advertising = document.querySelectorAll('img'),
      poster = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      pi_item = document.querySelectorAll('.promo__interactive-item'),
      movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
            ]
      };

advertising.forEach(item => {
    item.remove();
});

// задача 2

genre.textContent = 'ДРАМА';

// задача 3

poster.style.cssText = 'background-image: url(img/bg.jpg)';

// задача 4

/*for (let i = 0; i < movieDB.movies.length; i++) {



    console.log(i, movieDB.movies[i]);
};*/

movieDB.movies = movieDB.movies.sort();
pi_item.forEach((item, i) => {
    item.textContent = `${i+1}) ${movieDB.movies[i]}`;
});
