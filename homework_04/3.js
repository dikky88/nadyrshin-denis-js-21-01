//Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения
function dateFormat () {
    let text = "12/02/2021 12-00";
    let regexp = /\//g;

    let x = text.replace(regexp, ".")

    let regexp2 = /-/g;

    let y = x.replace(regexp2, ":")

    alert(y)
}

dateFormat()