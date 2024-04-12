class CBook {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}책을 ${this.price}원에 구매했습니다.`);
    }
}

const book1 = new CBook("front-tech", 30000);
book1.buy();

class TextBook extends CBook {
    constructor(title, price, major) {
        super(title, price);
        this.major = major;
    }
    buyTextBook() {
        console.log(`${this.title}책을 ${this.major}전공생 할인을 받아서
        ${this.price-10000}원에 구매했습니다.`);
    }
}

const textBook = new TextBook("front-tech", 30000, "IT");
textBook.buy();
textBook.buyTextBook();