
// 1. Mục tiêu
// Luyện tập sử dụng câu lệnh điều kiện switch/case.

// 2. Mô tả
// Viết chương trình yêu cầu nhập vào một số và hiển thị ngày trong tuần tương ứng với số vừa nhập.
// Khi người dùng nhập 2 thì hiển thị monday, 3 thì hiển thị tuesday,... 8 thì hiển thị sunday, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

let day = +prompt("Mời bạn nhập ngày: ");
// Nguyên lý so sánh: sử dụng toán tử so sánh === với các case

switch (day) { // key là giá trị người dùng nhập vào
    case 2: // value là giá trị ta so sánh
        console.log("Monday");
        break; // khi chạy đến đây đúng thì gặp break nó sẽ dừng. kết thúc câu lệnh
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;

    default:
        console.log("Lựa chọn chưa hợp lệ");
        break;
}