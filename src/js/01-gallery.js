// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Задание 1 - библиотека SimpleLightbox
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// 1. Добавь библиотеку SimpleLightbox как зависимость проекта используя npm 
//     (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы,
//    но выполни рефакторинг с учетом того,
//   что библиотека была установлена через npm(синтаксис import /export).
// 
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.
// // Описан в документации
// import SimpleLightbox from 'simplelightbox';
// // Дополнительный импорт стилей
// import 'simplelightbox/dist/simple-lightbox.min.css';



import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);


// Создаем рефы
const refs = {
    gallery : document.querySelector(".gallery"),
}


// создаем разметку по массиву данных

function createItemsMarkup (items) {
    return items.map(item => {
        return `
        <a class="gallery__item" href=${item.original}>
            <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
    `}).join("");
};

const markup = createItemsMarkup(galleryItems);

// рендерим разметку

refs.gallery.innerHTML = markup;

// Реализация делегирования на div.gallery и получение url большого изображения
// добавить отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const lightbox = new SimpleLightbox('.gallery a', { 
    // caption: true, 
    // captionSelector: 'img',
    // captionType: 'attr',
    captionsData: 'alt',
    // captionPosition: 'bottom',
    captionDelay: 250,
})

refs.gallery.addEventListener("click", (event) => event.preventDefault());




