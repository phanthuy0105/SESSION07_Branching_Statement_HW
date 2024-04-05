
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện.

// 2. Mô tả
// Phân biệt câu lệnh if/else và switch/case bằng comment trong code
// Và đưa ra ví dụ cụ thể với cả 2 loại câu lệnh điều kiện.

// if/else
if (condition) { // condition là điều kiện
    // condition = true thì code ở đây sẽ chạy
} else {
    // condition = false thì code ở đây sẽ chạy
}

// Example if/else
let a = 2;

if (number % 2 == 0) {
    console.log(number + " là số chẵn");
} else {
    console.log(number + " là số lẻ");
}

// result: 2 là số chẵn

// switch/case 
switch (key) { // key là giá trị người dùng nhập vào
    case value: // value là giá trị ta so sánh, kiểm tra
        // block code
        break; // khi chạy đến đây đúng thì gặp break nó sẽ dừng. kết thúc câu lệnh, sai thì nó sẽ kiểm tra value 2: nếu đúng thì break dừng lại
    case value:
        // block code
        break;

    default: // là trường hợp mặc định sẽ trả về nếu không thỏa các case bên trên.
        // block code
        break;
}

// Example switch/case 
let month = 3;
switch (month) {
    case 1:
        console.log("Đây là tháng 1");

        break;
    case 2:
        console.log("Đây là tháng 2");

        break;
    case 3:
        console.log("Đây là tháng 3");

        break;

    default:

        break;
}

// result: Đây là tháng 3


