let fruits = [];
let apple = fruits[0];
let banana = fruits[1];

console.log(apple, banana);

let [apple2, banana2] = ["사과", "바나나"];
console.log(apple2, banana2);

let [a, b] = [];
console.log(a);
console.log(b);

let seasons = ["봄", "여름", "가을", "겨울"];
let spring = seasons[0];
let fall = seasons[2];

let [spring2, , fall2, ] = ["봄", "여름", "가을", "겨울"];
console.log(spring2, fall2);

let [teacher, ...students] = ["강사님", "s1", "s2", "s3", "s4", "s5"];
console.log(teacher);
console.log(students);

let frontendClass = {
    className: "front(react) ban",
    gisu: 8
}

let {className, gisu} = frontendClass;
console.log(className, gisu);

let {className:cName, gisu:gisoo} = frontendClass;
console.log(cName, gisoo);