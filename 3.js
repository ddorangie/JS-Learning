const arr1 = [1, 3, 4, 5];
const arr2 = [1, 2, 4, 7, 8];

// 1 Задача
// Создать функцию которая будет принимать два массива и возвращать новый массив без повторяющихся элементов
// должно получиться [2,3,5,7,8]

function sortArray (array1, array2) {
    let array = new Set (array1.concat(array2));
    return array;
};

let result = sortArray(arr1, arr2)
console.log(result)

