
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện.

// 2. Mô tả
// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c. 
// Tiến hành kiểm tra xem số nào là lớn nhất. 
// Sau đó in max và in ra màn hình console theo cú pháp “Số lớn nhất là - …”.

let a = +prompt("Nhập vào số a: ");
let b = +prompt("Nhập vào số b: ");
let c = +prompt("Nhập vào số c: ");

if (a >= b && a >= c) {
    console.log("Số lớn nhất là -", a);
} else if (a <= b && b >= c) {
    console.log("Số lớn nhất là -", b);
} else if (a <= c && b <= c) {
    console.log("Số lớn nhất là -", c);
}