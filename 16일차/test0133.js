// 비동기 처리 방식
// 동기 처리(주류) vs 비동기 처리
// 멀티 스레드(Java) vs 싱글 스레드(Js)
// 줌 미팅으로 설명
// 멀티 스레드: 소회의실 5개(1조~5조) 1명 선생님 독점 관리
// 또는, 싱글 스레드 여러 개
// 싱글 스레드: 전체 회의실(오류수정요청), 선생님 1명이 상황 인식 처리(양보)
// 양보: 급한 일 먼저 처리(우선순위?)

// function dispA() {
//     console.log("A");
// }
// function dispB() {
//     console.log("B");
// }
// function dispB_delay2() {
//     setTimeout(() => console.log("B"), 2000);
// }
// function dispC() {
//     console.log("C");
// }
// function proc1() {
//     dispA();
//     dispB();
//     dispC();
// }

// proc1();

// function proc2() {
//     dispA();
//     dispB_delay2();
//     dispC();
// }

// proc2();

// 콜백함수를 써서 순서를 지켜준다.
function dispA() {
    console.log("A");
}
function dispC() {
    console.log("C");
}
function dispB_callback(callback) {
    setTimeout( () => {
        console.log("B");
        callback();
    }, 2000);
}

function proc3() {
    dispA();
    dispB_callback(dispC);
}

console.log("proc3()");
proc3();
