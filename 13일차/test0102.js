var now = new Date();

var now = new Date("2024-04-09");

var now = new Date("2024-04-08=9T09:42:00");

var date1 = new Date("2024-04-09");
var time1 = date1.getTime();

console.log(time1);

var date2 = new Date("2024-04-09T10:06:00");
var date3 = new Date("2024-04-09T10:06:01");
var time2 = date2.getTime();
var time3 = date3.getTime();
console.log(time2);
console.log(time3);

console.log(1712620800000/(1000*60*60*24*365));

var start = new Date("2024-03-20").getTime();
var now = new Date("2024-04-09").getTime();
var end = new Date("2024-08-06").getTime();

var timePassed = now - start;
var dayPassed = timePassed  / (1000*60*60*24);
console.log(`우리 과정 ${dayPassed}일 만큼 지났어요.`);

var timeLeft = end - now;
var dayLeft = timeLeft / (1000*60*60*24);
console.log(`우리 과정 ${dayLeft}일 만큼 남았어요.`);

console.log(`우리 과정 ${100*dayPassed/(dayPassed+dayLeft)}% 진행 중이에요.`);

// 올림
var num = 1234.56789;
console.log(Math.ceil(num,));
var num100 = num * 100;
num100 = Math.ceil(num100);
num100 = num100 / 100;
console.log(num100);

// 반올림
var num = 1234.56789;
console.log("round: ", Math.round(num));

console.log("fixed: ", num.toFixed(2));

// min, max
console.log("min: ", Math.min(1,2,3,4,5));
console.log("max: ", Math.max(1,2,3,4,5,6));

// random 함수
console.log("random: ", Math.random());
console.log("random: ", Math.random());
console.log("random: ", Math.random());
console.log("random: ", Math.random());

console.log("주사위 값: ", Math.floor(Math.random()*6+1));
console.log("주사위 값: ", Math.floor(Math.random()*6+1));
console.log("주사위 값: ", Math.floor(Math.random()*6+1));
console.log("주사위 값: ", Math.floor(Math.random()*6+1));
console.log("주사위 값: ", Math.floor(Math.random()*6+1));