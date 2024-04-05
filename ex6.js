
// 1. Mục tiêu
// Luyện tập sử dụng câu điều kiện.
// 2. Mô tả
// Viết chương trình cho phép người dùng nhập điểm các môn: toán, văn, anh.
// Tính điểm trung bình các môn học và hiển thị xếp loại theo điều kiện:
// 8.0  <= ĐTB <= 10: xếp loại GIỎI.
// 6.5 <= ĐTB <= 7.9: xếp loại KHÁ.
// 5.0 <= ĐTB <= 6.4: xếp loại TRUNG BÌNH.
// ĐTB < 5.0: xếp loại YẾU.

let toan = +prompt("Nhập điểm môn Toán: ");
let van = +prompt("Nhập điểm môn Văn: ");
let anh = +prompt("Nhập điểm môn Anh: ");

let dTB = (toan + van + anh) / 3;

if (8.0 <= dTB && dTB <= 10) {
    console.log("Xếp loại GIỎI");
} else if (6.5 <= dTB && dTB <= 7.9) {
    console.log("Xếp loại KHÁ");
} else if (5.0 <= dTB && dTB <= 6.4) {
    console.log("Xếp loại TRUNG BÌNH");
} else {
    console.log("Xếp loại YẾU");
}

