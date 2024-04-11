setTimeout(() => {console.log("안녕!");}, 3000);

let arr1 = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.forEach((char) => {
    console.log(char);
});

const student = {
    name: "조민성",
    age: "맏형",
    etc: "사람들 괴롭히지는 않습니다."
};

for (key in student) {
    console.log(`${key}: ${student[key]}`);
}
// console.log(student[0]);    // undefined
