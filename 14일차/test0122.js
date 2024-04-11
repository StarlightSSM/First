// function hello() {
//     console.log("안녕!");
// }
// setInterval(hello, 1000);

var count = 0;

let timer = setInterval(() => {
    console.log("안녕!");
    count++;
    if (count > 5) {
        clearInterval(timer);
    }
}, 1000);
