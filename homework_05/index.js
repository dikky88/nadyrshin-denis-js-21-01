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

//5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
function average() {
    const arr = [12, 16, 20];

    let sum = 0;
    arr.forEach(function (v,i,a){a[i] = sum += v;})

    const middle = sum / arr.length;

    console.log(middle)
}

average();

//6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения,
// вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию,
// сбрасывающую значение в ноль.

function Calculator() {
    this.value = 0;
    this.add = function(value) {
        this.value += value;
    }

    this.subtract = function(value) {
        this.value -= value;
    }

    this.multiply = function(value) {
        this.value *= value;
    }

    this.divide = function(value) {
        this.value /= value;
    }

    this.clear = function() {
        this.value = 0;
    }
}

let calc1 = new Calculator();
calc1.add(5);
calc1.subtract(2);

console.log(calc1.value);

//7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers,
//strings и objects, содержащими массив со значениями, соответствующими названию поля.

function group(arr) {
    const obj = { numbers: [], strings: [], objects: [] };

    for (const value of arr) {
        if (typeof value === 'string') {
            obj.strings.push(value)
        } else if (typeof value === 'number') {
            obj.numbers.push(value)
        } else if (typeof value === 'object' && value !== null) {
            obj.objects.push(value)
        }

    }

    return obj;
}

console.log(group([1, "str", 3, {key: 'value'}, "343", { obj: { key: 'value' }}, undefined, null, function() {}]))

//8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,
//значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)
// [10, 20, 30, 35, 36, 40] 20, 35 -> [ 20, 30, 35]
// [10, 20, 30, 35, 36, 40] 35, 20 -> [ 20, 30, 35]

function range(arr, a, b) {
    const result = [];

    for(const value of arr) {
        if((a <= value && value <= b) || (b <= value && value <= a)) {
            result.push(value)
        }
    }

    return result;
}

console.log(range([10, 20, 30, 35, 36, 40], 20, 35))
console.log(range([10, 20, 30, 35, 36, 40], 35, 20 ))

//9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false

function anagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(anagram('нос', 'сон'))
console.log(anagram('встать', 'сесть'))
console.log(anagram('баян', 'баня'))

//10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую
//(считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты)
//сама функция в консоль выводиться не должна.

const obj = {
    key: 'value',
    key1: undefined,
    key2: 2,
    log: function () {
        let sum = '';
        for (let key in this) {
            if (key !== 'log')
                sum += `${key}: ${this[key]}, `;
        }
        console.log(sum.slice(0, -2))
    },
    key3: null,
    key4: 'another value'
}

obj.log()

//11. Создать функцию-конструктор для объекта, содержащего методы setProp (установить значение свойства),
//метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable
//(разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства).
//Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено

function MyObject() {
    this.setProp = function (key, value, options) {
        Object.defineProperty(this, key, {
            value: value,
            writable: options.writable ?? true,
            enumerable: options.enumerable ?? true,
            configurable: options.configurable ?? true,
        })
    }
}

const myObj1 = new MyObject();
myObj1.setProp('value', 0, { writable: false, enumerable: false, configurable: true });
console.log(myObj1)

myObj1.setProp('value', 0, { writable: true })
myObj1.value = 'hello';

console.log(myObj1)
