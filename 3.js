const arr1 = [1, 3, 4, 5];
const arr2 = [1, 2, 4, 7, 8];

// 1 Задача
// Создать функцию которая будет принимать два массива и возвращать новый массив без повторяющихся элементов
// должно получиться [2,3,5,7,8]

function combineArrays(array1, array2) {
    return array3 = (array1.concat(array2)).sort();
}


function makeArrayWithoutDuplicate(array1, array2) {
    let array3 = combineArrays(array1, array2)
    let resultArr = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] !== array3[i+1] && array3[i] !== array3[i-1]) {
            resultArr.push(array3[i])
        };
    };
    return resultArr
};

let result = makeArrayWithoutDuplicate(arr1, arr2);
console.log(result);

// 2 Задача
// Создать функцию которая будет принимать два массива и возвращать новый массив с элементами которые повторились
// должно получиться [1,4]

function getDuplicate(array1, array2) {
    let array3 = combineArrays(array1, array2);
    let resultArr = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] == array3[i+1]) {
            resultArr.push(array3[i]);
        };
    };
    return resultArr
};

let result2 = getDuplicate(arr1, arr2);
console.log(result2);


