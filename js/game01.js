'use strict';

const min = Math.ceil(1);
const max = Math.floor(100);
let randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);
const gameBot = () => {

    while (true) {
        let userNumber = +prompt('Отгадайте мое число');

        if (isNaN(userNumber)) {
            alert('Введите число');
            continue;
        }

        if (userNumber === 0) {
            alert('Игра окончена!')
            break;
        }

        if (userNumber === randomNumber) {
            alert('Правильно!')
            break;
        } else if (userNumber > randomNumber) {
            alert('Меньше!');
        } else if (userNumber < randomNumber) {
            alert('Больше!')
        }
    }
}

gameBot();