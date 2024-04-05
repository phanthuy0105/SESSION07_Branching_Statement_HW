
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện.

// 2. Mô tả
// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b và c.
// Tiến hành in 3 số ra màn hình console theo thứ tự tăng dần

let a = +prompt("Nhập vào số a: ");
let b = +prompt("Nhập vào số b: ");
let c = +prompt("Nhập vào số c: ");

if (a > b && a > c && b > c) {
    console.log("Số thứ tự tăng dần là ", c, b, a);
} else if (a >= b && a >= c && b <= c) {
    console.log("Số thứ tự tăng dần là ", b, c, a);
} else if (a <= b && a <= c && b >= c) {
    console.log("Số thứ tự tăng dần là ", a, c, b);
} else if (a <= b && a >= c && b >= c) {
    console.log("Số thứ tự tăng dần là ", c, a, b);
} else if (a <= b && a <= c && b <= c) {
    console.log("Số thứ tự tăng dần là ", a, b, c);
} else if (a >= b && a <= c && b <= c) {
    console.log("Số thứ tự tăng dần là ", b, a, c);
}
