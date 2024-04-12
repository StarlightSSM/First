// 선언형 프로그래밍
// 결과를 묘사
// <img>
const numbers = [1, 2, 3, 4];
const evenNumber = numbers.filter(num=>num%2==0);

// 명령형, 절차 지향 프로그래밍

const evenNumbers = []
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num %2 == 0) {
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);

// 1. 돈을 받는다. 얼마인지 검출한다.
// 2. 구매 가능한 음료를 표시하고 기다린다.
// 3. 사용자가 제품을 선택한다.
// 4. 캔을 제공한다.
// 5. 잔돈을 반환한다.
// 자판기 설계
// 막막?: 돈을 누가 어떻게 검출해? 관리? => money객체
// 음료 표시(사용자 선택은 누가 관리? => Serving객체)
// 캔은 누가? => Goods 객체

// 객체 지향적 설계 (클래스 다이어그램)
// money 객체
// 프로퍼티: moneyType, GoodsPrice, CardCompanyURL, jangum
// 메소드: AuthCard(usercard), jangumUo(money), jangumDown(money),
const moneyType = {
    CHEONWON: 1000,
    OCHEONWON: 5000,
    MANWON: 10000,
    OBAEKWON: 500,
    BAEKWON: 100
}

// Serving 객페 
// 프로퍼티: GoodsAvailable, UserSelection
// 메소드: whatIsAvailable(Goods, Money)
const serving = {

}

// 상품 객체
const GoodsPrice = {
    Milkis: 100,
    FantaOrange: 1500,
    Zerocoke: 1000
}