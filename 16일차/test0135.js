function whatIsYourOrder() {
    let myOrder = "한솥도시락";
    return new Promise((resolve, reject) => resolve(myOrder));
}
function showYourOrder(mes) {
    return new Promise(
        (resolve, reject) => resolve(`promise로부터 ${mes}를 주문 받았습니다.`)
    )
}
whatIsYourOrder().then(showYourOrder).then(console.log);

async function asyncWhatIsYourOrder() {
    let myOrder = "한솥도시락";
    return myOrder;
}

async function asyncShowYourOrder(mes) {
    `promise로부터 ${mes}를 주문 받았습니다.`;
}
asyncWhatIsYourOrder().then(asyncShowYourOrder).then(console.log);

async function order() {
    const res = await asyncWhatIsYourOrder();
    const res2 = await whatIsYourOrder(res);
    console.log(res2);
}
order();
