// 배열 관련 함수 3형제(map, filter, reduce)

// map: 일괄 계산
let num50manjum = [10, 20, 30, 40, 50];
let num100manjum = [10, 20, 40, 30, 70];
let num50to100 = [];
for (let i = 0; i < 5; i++) {
    num50to100[i] = num50manjum[i]*2;
}
console.log(num50to100);

let num50to100_2 = num50manjum.map(num=>num*2);
console.log(num50to100_2);

// filter: 조건으로 걸러냄
let data = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i];
}
console.log(sum);

let sum2 = data.reduce((total, now) => total + now, 0);
console.log(sum2);

let filtered60_2 = [];
filtered60_2 = nums50to100_2.filter(score => score >= 60);
console.log(filtered60_2);

// reduce: 누적 계산
let data2 = [1, 2, 3, 4, 5];
let sum3 = 0;
for(let i = 0; i < data2.length; i++) {
    sum2 += data2[i];
}
