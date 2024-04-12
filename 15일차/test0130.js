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
