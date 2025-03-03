const data = [
    {id:1, name:"Julia", job: "Front-end", age:23},
    {id:2, name:"Huesos", job: "Sis-huesos", age:26},
    {id:3, name:"Mike", job: "Front-end", age:25},
]

/* 1. Увеличить каждому человеку возраст на 1 год */
function addOneYear (array) {
    return array.map(person => {
        return {
            ...person, age: person.age + 1
        };
    });
}

const result = addOneYear(data);
console.log(result)

/* 2. Вернуть новый массив где каждому будет добавлено поле country = Russia */
function addCountry (array) {
    return array.map(item => {
        return {
            ...item, country: "Russia"
        };
    })
}

const result2 = addCountry(data);
console.log(result2)

/* 3. Убрать из массива всех у кого job не Front-end */ 
function deleteHuesos (array) {
    return array.filter(item => item.job === "Front-end");
}

const result3 = deleteHuesos(data);
console.log(result3)

/* 4. Расположить элементы в массиве в порядке возрастания года */
function sortAge (array) {
    return array.sort((a, b) => a.age - b.age);
}

const result4 = sortAge(data);
console.log(result4)

/* 5. Написать функцию, которая проверит есть ли в массиве хотя бы один человек
с именем Oleg, если нет - вернуть - "Человека с именем Oleg нет в списке"
(потом добавить его и проверить еще раз, вывести - "человек с именем Oleg найден
его возраст - 24, работа - inginier") */
function checkGuy (array, name, job, age) {
        const person = array.find(item => item.name === name);
        if (person) {
            return `человек с именем ${name} найден, его возраст - ${person.age}, работа - ${person.job}`;
        } else {
            const newPerson = {id: array.length + 1, name: name, job: job, age: age};
            array.push(newPerson);
            return `Человека с именем ${name} нет в списке`
        }
}

const result5 = checkGuy(data, 'Oleg', 'inginier', 24);
console.log(result5)

const result5Again = checkGuy(data, 'Oleg', 'inginier', 24);
console.log(result5Again);

sortAge(data)
