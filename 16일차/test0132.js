const student = {
    name: "이현경",
    career:"publisher"
}

// JSON
// const studentJson = {
//     "name": "이현경",
//     "career": "publisher"
// }

const studentJson = JSON.stringify(student); //JSON으로 변환해주는 함수
console.log(student);
console.log(studentJson);

console.log(studentJson.name);

let studentAgain = JSON.parse(studentJson);
console.log(studentAgain.name);
console.log(studentAgain);