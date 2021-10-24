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
