
// 1. Mục tiêu
// Luyện tập sử dụng câu điều kiện.

// 2. Mô tả
// Viết chương trình yêu cầu người dùng nhập vào số tháng trong năm, in ra số ngày trong tháng đó.

let month = +prompt("Nhập vào số tháng: ");
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("Tháng " + month + " có 31 ngày");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("Tháng " + month + " có 30 ngày");
} else if (month === 2) {
    let year = +prompt("Nhập vào số năm: ");
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log("Tháng " + month + " có 29 ngày");
    } else {
        console.log("Tháng " + month + " có 28 ngày");
    }
} else {
    console.log("Nhập tháng không hợp lệ");
}