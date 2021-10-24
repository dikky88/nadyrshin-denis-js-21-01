//1. На вход поступает массив, вывести массив, удалив неуникальные значения.
function unique() {
    const arr = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7];
    const uniq = Array.from(new Set(arr));
    console.log(uniq)
}

unique()

//2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.
function reverse() {
    const arr = [1, 2, 3, 4, 5]
    arr.forEach(function (v,i,a){a[i] = arr.length - i;})
    console.log(arr)
}
reverse()

//3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект,
//где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.
function map() {
    const arr = [[1, 2], [3, 4]];
    const obj = Object.fromEntries(arr);
    console.log(obj);
}

map()

//4 На вход поступает объект, вывести сумму числовых свойств объекта.
function objSum() {
    const obj = {x: 1, y: 2, z: 3, a: undefined, b: 'hell0' };

    let sum = 0;
    for(let v of Object.values(obj)) {
        if(!isNaN(v))
            sum += v;
    }

    console.log(sum)
}

objSum()