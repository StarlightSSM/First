const book = {
    title: "front-tech",
    totalPages: 3,
    nowPage: 1,
    read: function() {
        this.nowPage++;
        if (this.nowPage >= this.totalPages) {
            console.log(`마지막 페이지입니다.`);
        } else {
            console.log(`${this.title}을 읽습니다. 지금 ${this.nowPage}페이지를
        읽고 있습니다.`);
        }
    }
};

book.read();
book.read();
book.read();
book.read();
book.read();

// 생성자 함수
function Book(title, totalPages, nowPage=1) {
    this.title = title;
    this.totalPages = totalPages;
    this.nowPage = nowPage;
    this.read = function() {
        this.nowPage++;
        if (this.nowPage >= this.totalPages) {
            console.log(`마지막 페이지입니다.`);
        } else {
            console.log(`${this.title}을 읽습니다. 지금 ${this.nowPage}페이지를
        읽고 있습니다.`);
        }
    };
};

let book1 = new Book("front-tech", 3);
let book2 = new Book("backend-tech", 4, 2);
book1.read();
book2.read();
