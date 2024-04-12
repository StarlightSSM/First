let car1 = {
    name: 'Avante',
    color: 'blue',
    engineSize: 1.6
}

// 객체 (참조ref 복사)
let car2 = car1;
console.log(car1);
console.log(car2);

car2.color = 'red';
console.log(car1);
console.log(car2);

// 배열 복사하기
const arr1 = [10, 20, 30];
const arr2 = arr1.reverse();
console.log(arr1);
console.log(arr2);

const arr3 = [10, 20, 30];
const arr4 = [...arr3].reverse();
console.log(arr3);
console.log(arr4);

let sedan1 = {
    name: 'Avante',
    color: 'blue',
    engineSize: 1.6
}

let sedan2 = {...sedan1};
sedan2.color = "red";
console.log(sedan1);
console.log(sedan2);
