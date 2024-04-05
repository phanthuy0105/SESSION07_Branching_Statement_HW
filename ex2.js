
// 1. Mục tiêu
// Luyện tập sử dụng cấu trúc if…else if…else.

// 2. Mô tả
// Viết chương trình yêu cầu người dùng nhập vào một số bất kỳ. 
// Tiến hành kiểm tra số nhập vào và in ra theo 3 trường hợp: số chẵn, số lẻ và không hợp lệ.

let number = +prompt("Nhập vào 1 số: ");
if (number % 2 == 0) {
    console.log(number + " là số chẵn");
} else if (number % 2 == 1) {
    console.log(number + " là số lẻ");
} else {
    console.log("Không hợp lệ");
}