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