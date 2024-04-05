
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện if/else.

// 2. Mô tả
// Sử dụng cấu trúc if…else, viết chương trình yêu cầu người dùng nhập vào cầu trả lời cho câu hỏi “Bạn sinh năm bao nhiêu”. 
// Nếu câu trả lời nhập vào là một số thì hiển thị số tuổi của người dùng, nếu không thì hiển thị giá trị không hợp lệ.

let year = +prompt("Bạn sinh năm bao nhiêu: ");

if (year = Number(year)) {
    console.log("Tuổi của bạn là: ", year);
} else {
    console.log("Giá trị không hợp lệ");
}

