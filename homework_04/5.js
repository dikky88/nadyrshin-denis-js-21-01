// На вход дана строка в PamalCase, преобразовать строку в snake_case

const regexp = /(?=[A-Z])/g;
const regexp2 = /_/;


const str = 'PamalCase';

const str2 = str.replace(regexp, `_`);

const str3 = str2.toLowerCase();

alert(str3.replace(regexp2, ""))