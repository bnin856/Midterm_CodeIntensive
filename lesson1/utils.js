// ===== BÀI 1: Template Literals và Function =====
export function productInfo(tenSanPham, gia) {
    return `Sản phẩm: ${tenSanPham}, Giá: ${gia.toLocaleString('vi-VN')} VNĐ`;
}

// ===== BÀI 2: Hàm chào người dùng =====
export function greet(ten) {
    return `Xin chào, ${ten}!`;
}

// ===== BÀI 3: Tính tổng từ 1 đến n =====
export function sumUpTo(n) {
    return (n * (n + 1)) / 2;
}

// ===== BÀI 4: Tính bình phương =====
export function square(so) {
    return so * so;
}

// ===== BÀI 5: Kiểm tra số chẵn lẻ =====
export function isEven(so) {
    return so % 2 === 0;
}

// ===== BÀI 6: Lấy phần tử đầu mảng =====
export function firstElement(mang) {
    return mang[0];
}

// ===== BÀI 7: Rest Operator tính tổng =====
export function sum(...cacSo) {
    return cacSo.reduce((tong, so) => tong + so, 0);
}

// ===== BÀI 8: Tách giá trị từ object =====
export function extractUserInfo(user) {
    const { name, age } = user;
    return `Name: ${name}, Age: ${age}`;
}

// ===== BÀI 9: In danh sách tên từ mảng object =====
export function getNames(people) {
    return people.map(person => person.name).join(', ');
}

// ===== BÀI 10: Tính độ dài chuỗi =====
export function stringLength(chuoi) {
    return chuoi.length;
}

// ===== BÀI 11: Chuyển chuỗi thành chữ hoa =====
export function toUpperCase(chuoi) {
    return chuoi.toUpperCase();
}

// ===== BÀI 12: Format tiền tệ =====
export function formatCurrency(soTien) {
    return `${soTien.toLocaleString('vi-VN')} VNĐ`;
}

// ===== BÀI 13: Tìm số lớn nhất trong mảng =====
export function max(mang) {
    return Math.max(...mang);
}

// ===== BÀI 14: Kiểm tra số nguyên tố =====
export function isPrime(so) {
    if (so < 2) return false;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) return false;
    }
    return true;
}

// ===== BÀI 15: Lặp lại chuỗi n lần =====
export function repeatString(chuoi, soLan) {
    return chuoi.repeat(soLan);
}

// ===== BÀI 16: Tính tổng số lẻ trong mảng =====
export function sumOdd(mang) {
    return mang.filter(so => so % 2 !== 0).reduce((tong, so) => tong + so, 0);
}

// ===== BÀI 17: Tính tổng số lớn hơn n =====
export function sumGreaterThan(mang, giaTri) {
    return mang.filter(so => so > giaTri).reduce((tong, so) => tong + so, 0);
}

// ===== BÀI 18: Format ngày tháng =====
export function formatDate(ngay) {
    const [nam, thang, ngayThang] = ngay.split('-');
    return `${ngayThang}/${thang}/${nam}`;
}

// ===== BÀI 19: Lấy 3 phần tử đầu mảng =====
export function firstThree(mang) {
    return mang.slice(0, 3);
}

// ===== BÀI 20: Kiểm tra chuỗi chứa ký tự =====
export function containsChar(chuoi, kyTu) {
    return chuoi.includes(kyTu);
}

// ===== BÀI 21: Gộp hai mảng =====
export function mergeArrays(mang1, mang2) {
    return [...mang1, ...mang2];
}

// ===== BÀI 22: Đếm số lần xuất hiện =====
export function countOccurrences(mang, phanTu) {
    return mang.filter(item => item === phanTu).length;
}

// ===== BÀI 23: Lọc số lẻ từ mảng =====
export function filterOdd(mang) {
    return mang.filter(so => so % 2 !== 0);
}

// ===== BÀI 24: Tìm số lớn hơn giá trị cho trước =====
export function greaterThan(mang, giaTri) {
    return mang.filter(so => so > giaTri);
}

// ===== BÀI 25: Tính giai thừa =====
export function factorial(so) {
    if (so <= 1) return 1;
    return so * factorial(so - 1);
}

// ===== BÀI 26: Tách số chẵn lẻ =====
export function separateEvenOdd(mang) {
    return {
        even: mang.filter(so => so % 2 === 0),
        odd: mang.filter(so => so % 2 !== 0)
    };
}

// ===== BÀI 27: Sắp xếp mảng tăng dần =====
export function sortAsc(mang) {
    return [...mang].sort((a, b) => a - b);
}

// ===== BÀI 28: Tính tổng số ở vị trí chẵn =====
export function sumEvenIndex(mang) {
    return mang.filter((_, index) => index % 2 === 0).reduce((tong, so) => tong + so, 0);
}

// ===== BÀI 29: Nhân mảng với 2 =====
export function multiplyByTwo(mang) {
    return mang.map(so => so * 2);
}

// ===== BÀI 30: Tạo chuỗi từ mảng =====
export function arrayToString(mang) {
    return mang.join('');
} 