function Book (title, price) {
    this.title = title;
    this.price = price;
}

// chrome console에서 Book.prototype을 받는다. Object 상속

Book.prototype.buy = function () {
    console.log(`${this.title}책을 ${this.price}원에 구매했습니다.`);
}

const book1 = new Book("front-tech", 30000);
book1.buy();

function TextBook (title, price, major) {
    Book.call(this, title, price);
    this.major = major;
}

// 전공생이면 10000원 할인
TextBook.prototype.buyTextBook = function () {
    console.log(`${this.title}책을 ${this.major}전공생 할인을 받아서
    ${this.price-10000}원에 구매했습니다.`);
}

Object.setPrototypeOf(TextBook.prototype, Book.prototype);
const textBook = new TextBook("front-tech", 30000, "IT");
textBook.buy();
textBook.buyTextBook();
