// Задание 2 - видео плеер
// В HTML есть <iframe> с видео для Vimeo плеера. 
// Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и,
// при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>
// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// +1. Ознакомься с документацией библиотеки Vimeo плеера.
// +2. Добавь библиотеку как зависимость проекта через npm.
// +3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
// но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// 4. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// 5. Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так, 
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');




const CURRENT_TIME = "videoplayer-current-time";   
const loaded = localStorage.getItem(CURRENT_TIME);

if (loaded) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
};

player.on('timeupdate', throttle(function() {
    console.log('timeupdate');
    player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
    }).catch(function(error) {
   console.log(error.name)
        });
}, 1000));
