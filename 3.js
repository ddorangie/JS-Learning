const arr1 = [1, 3, 4, 5];
const arr2 = [1, 2, 4, 7, 8];

// 1 Задача
// Создать функцию которая будет принимать два массива и возвращать новый массив без повторяющихся элементов
// должно получиться [2,3,5,7,8]


const arr3 = arr1.concat(arr2)
console.log(arr3)

let result = arr3.sort()
console.log(result)
let newArr = []

for (let i = 0; i < arr3.length; i++) {
    
    if (arr3[i] > arr3[i - 1] || arr3[i] < arr3[i-1]) {
        newArr.push(arr3[i])
    }
}

console.log(newArr)