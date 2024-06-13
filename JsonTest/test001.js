let arr1 = [1, 7, 4, 2];
arr1.sort();
console.log(arr1);

let arr2 = [1, 7, 14, 2, 153];
arr2.sort();
console.log(arr2);

// sort()가 정렬 대상을 아스키 코드 기준으로 함.

// sort는 compare를 사용자 정의
function compare(a, b) {
    if (a > b) return 1;
    else if (a===b) {
        return 0;
    }
    else if (a < b) return -1;
}

let arr3 = [1, 7, 14, 2, 153];
arr3.sort(compare);
console.log(arr3);

let arr4 = ["1", "7", "14", "2", "153"];
arr4.sort();
console.log(arr4);

function compareDec(a, b) {
    if (a < b) return 1;
    else if (a===b) {
        return 0;
    }
    else if (a > b) return -1;
}

let arr5 = [1, 7, 14, 2, 153];
arr5.sort(compareDec);
console.log(arr5);
