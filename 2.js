// 1. Написать функцию, которая возвращает сумму заработка этих людей
const data2 = [
    {id:1, name:'Julia', job:'Front-end', age:23, salary:25322},
    {id:2, name:'Ivan', job:'Sis-Huesos', age:26, salary:50},
    {id:3, name:'Mike', job:'Front-end', age:25, salary:55390}
]

function getSumSalary (array) {
    return array.reduce((acc, item) => acc + item.salary, 0);
}

console.log(getSumSalary(data2));

// 2. Написать функцию, которая возвращает уникальные имена с двух массивов (удалить все дубляжи)
const arr1 = ['Mike', 'Ivan', 'Julia']
const arr2 = ['Oleg', 'Ivan', 'Petr', 'julia']

function filterNames (array1, array2) {
    let arrayOne = array1.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
    let arrayTwo = array2.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
    let array = [...new Set(arrayOne.concat(arrayTwo))];
    return array;
}

console.log(filterNames(arr1, arr2));

// 3. Написать функцию, которая делает первую букву переданной строки заглавной
function toUpperFirst (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(toUpperFirst('julia'))
console.log(toUpperFirst('hello, Julia'))

// 4. Написать функцию, которая переворачивает переданное число
function reversedNumber (number) {
    return number.toString().split('').reverse().join('');
}

console.log(reversedNumber(12345))

// 5. Написать функцию, которая возвращает сумму переданных чисел, разделенных запятой
function getSum (string) {
    let Sum = string.split(',')
    Sum = Sum.map(Number).reduce((acc, curr) => acc + curr, 0);
    return Sum;
}

console.log(getSum('1,2,3,4,5'))