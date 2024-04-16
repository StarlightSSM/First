// 햄버거 주문 과정
// 1. 고객 주문 1000ms
// 2. 결제 500ms
// 3. 조리 측에 주문 전달 300ms
// 4. 햄버거 조리 3000ms
// 5. 햄버거 포장 100ms
// 6. 고객에게 전달 500ms
// 7. 고객이 내용물 확인하고 먹는다. 100ms

function order() {setTimeout(() => {console.log("1")}, 1000);}
function pay() {setTimeout(() => {console.log("2")}, 500);}
function ordderTx() {setTimeout(() => {console.log("3")}, 300);}
function cook() {setTimeout(() => {console.log("4")}, 3000);}
function pack() {setTimeout(() => {console.log("5")}, 100);}
function out() {setTimeout(() => {console.log("6")}, 500);}
function confirmBurger() {setTimeout(() => {console.log("7")}, 100);}

function getBurger() {order(); ordderTx(); cook(); pack(); out(); confirmBurger();}
//getBurger();

function getBurgerByCallback() {
    setTimeout(
        () => {
            console.log("1. 고객 주문");
            setTimeout(() => {
                    console.log("2. 결제");
                    setTimeout(() => {
                        console.log("3. 조리 측에 주문 전달");
                        setTimeout(() => {
                            console.log("4. 햄버거 조리");
                            setTimeout(() => {
                                console.log("5. 햄버거 포장");
                                setTimeout(() => {
                                    console.log("6. 고객에게 전달");
                                    setTimeout(() => {
                                        console.log("7. 고객이 내용물을 확인하고 먹는다.");
                                    }, 1000);
                                }, 500);
                            }, 100);
                        }, 3000);
                    }, 300);
                }, 500);
        }, 1000);
}
getBurgerByCallback();