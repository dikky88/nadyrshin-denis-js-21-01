//  Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.
const userInput = prompt();
const count = prompt();
const x = userInput.substring(0, count)

alert(x + "...")