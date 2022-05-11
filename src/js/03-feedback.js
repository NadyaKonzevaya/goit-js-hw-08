// Задание 3 - форма обратной связи
// В HTML есть разметка формы. Напиши скрипт 
// который будет сохранять значения полей 
// в локальное хранилище когда пользователь что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>
// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. 
// Разбей его на несколько подзадач:

// +1. Отслеживай на форме событие input, и каждый раз записывай 
//      в локальное хранилище объект с полями email и message, 
//      в которых сохраняй текущие значения полей формы.
// +2. Пусть ключом для хранилища будет строка "feedback-form-state".
// +3. При загрузке страницы проверяй состояние хранилища, 
//      и если там есть сохраненные данные, заполняй ими поля формы.
//      В противном случае поля должны быть пустыми.
// +4. При сабмите формы очищай хранилище и поля формы,
//      а также выводи объект с полями email, message 
//      и текущими их значениями в консоль.
// 5. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//      Для этого добавь в проект и используй библиотеку lodash.throttle.

const ref = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};    
const FORM_KEY = "feedback-form-state";
const filledForm = localStorage.getItem(FORM_KEY);
const parsedFormValue = JSON.parse(filledForm);
const throttle = require('lodash.throttle');


// ref.form.addEventListener("input", throttle((onFormInput), 500));
ref.form.addEventListener("input", onFormInput);
ref.form.addEventListener("submit", onFormSubmit);


if (filledForm) {
   updateData();
};

function updateData() {
    ref.input.value = parsedFormValue.email;
    ref.textarea.value = parsedFormValue.message;

};

function onFormInput(event) {
    const FORM_VALUE = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
}
    localStorage.setItem(FORM_KEY, JSON.stringify(FORM_VALUE));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(parsedFormValue);
    // localStorage.clear();
//    event.currentTarget.reset();
}
