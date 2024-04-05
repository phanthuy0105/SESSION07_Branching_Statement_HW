
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện.

// 2. Mô tả
// Viết chương trình yêu cầu người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI: bmi = weight / ( height ^ 2 )

let weight = prompt("Nhập vào cân nặng kg: ");
let height = prompt("Nhập vào chiều cao m: ");

let bmi = weight / (height ^ 2);
let message = "";

if (bmi < 18.5) {
    message = bmi + " - Cân nặng thấp (gầy)";
} else if (bmi > 18.5 && bmi < 24.9) {
    message = bmi + " - Bình thường";
} else if (bmi >= 25) {
    message = bmi + " - Thừa cân";
} else if (bmi > 25 && bmi < 29.9) {
    message = bmi + " - Tiền béo phì";
} else if (bmi > 30 && bmi < 34.9) {
    message = bmi + " - Béo phì độ I";
} else if (bmi > 35 && bmi < 39.9) {
    message = bmi + " - Béo phì độ II";
} else if (bmi >= 40) {
    message = bmi + " - Béo phì độ III";
}
document.write(message);