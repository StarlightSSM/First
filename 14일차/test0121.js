let fruits = ["banana", "strawberry", "watermelon"];

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(...fruits);

const addNums = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(addNums(1, 2, 3));
console.log(addNums(1,2,3,4,5));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

const arr4 = [0, ...arr1, ...arr2, 7,8,9];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);