# 30 Bài Tập JavaScript Cơ Bản - Lesson 1

Bộ bài tập JavaScript cơ bản với 30 bài tập về Functions và ES6 Features, được thiết kế đặc biệt cho học sinh Việt Nam.

## 📁 Cấu Trúc Project

```
lesson1/
├── index.html          # Giao diện chính
├── style.css           # CSS styling
├── index.js            # JavaScript tương tác và console
├── utils.js            # Module chứa 30 functions
├── package.json        # Quản lý dependencies
└── README.md           # Hướng dẫn sử dụng
```

## 🚀 Cách Sử Dụng

### 1. Chạy trên trình duyệt (Khuyến nghị)
```bash
# Cài đặt dependencies
npm install

# Chạy server local
npm run dev
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8080`

### 2. Chạy trên console
```bash
# Chạy tất cả tests trong console
npm start
```

### 3. Mở trực tiếp file HTML
Mở file `index.html` trong trình duyệt (cần server local để ES6 modules hoạt động)

## 📋 Danh Sách 30 Bài Tập

### Bài 1-10: Functions Cơ Bản
1. **Template Literals và Function** - `productInfo(tenSanPham, gia)`
2. **Hàm chào người dùng** - `greet(ten)`
3. **Tính tổng từ 1 đến n** - `sumUpTo(n)`
4. **Tính bình phương** - `square(so)`
5. **Kiểm tra số chẵn lẻ** - `isEven(so)`
6. **Lấy phần tử đầu mảng** - `firstElement(mang)`
7. **Rest Operator tính tổng** - `sum(...cacSo)`
8. **Tách giá trị từ object** - `extractUserInfo(user)`
9. **In danh sách tên từ mảng object** - `getNames(people)`
10. **Tính độ dài chuỗi** - `stringLength(chuoi)`

### Bài 11-20: String và Number Methods
11. **Chuyển chuỗi thành chữ hoa** - `toUpperCase(chuoi)`
12. **Format tiền tệ** - `formatCurrency(soTien)`
13. **Tìm số lớn nhất trong mảng** - `max(mang)`
14. **Kiểm tra số nguyên tố** - `isPrime(so)`
15. **Lặp lại chuỗi n lần** - `repeatString(chuoi, soLan)`
16. **Tính tổng số lẻ trong mảng** - `sumOdd(mang)`
17. **Tính tổng số lớn hơn n** - `sumGreaterThan(mang, giaTri)`
18. **Format ngày tháng** - `formatDate(ngay)`
19. **Lấy 3 phần tử đầu mảng** - `firstThree(mang)`
20. **Kiểm tra chuỗi chứa ký tự** - `containsChar(chuoi, kyTu)`

### Bài 21-30: Array Methods và Algorithms
21. **Gộp hai mảng** - `mergeArrays(mang1, mang2)`
22. **Đếm số lần xuất hiện** - `countOccurrences(mang, phanTu)`
23. **Lọc số lẻ từ mảng** - `filterOdd(mang)`
24. **Tìm số lớn hơn giá trị cho trước** - `greaterThan(mang, giaTri)`
25. **Tính giai thừa** - `factorial(so)`
26. **Tách số chẵn lẻ** - `separateEvenOdd(mang)`
27. **Sắp xếp mảng tăng dần** - `sortAsc(mang)`
28. **Tính tổng số ở vị trí chẵn** - `sumEvenIndex(mang)`
29. **Nhân mảng với 2** - `multiplyByTwo(mang)`
30. **Tạo chuỗi từ mảng** - `arrayToString(mang)`

## 🎯 Tính Năng

### Giao Diện Web
- ✅ Thiết kế responsive, hiện đại
- ✅ Hiển thị tất cả 30 bài tập
- ✅ Test từng bài riêng lẻ
- ✅ Chạy tất cả tests cùng lúc
- ✅ Hiển thị kết quả trực quan
- ✅ Xóa kết quả để test lại

### Console Testing
- ✅ Import/Export ES6 modules
- ✅ Test tất cả functions trong console
- ✅ Hiển thị kết quả chi tiết
- ✅ Dễ dàng debug và học tập

### Code Quality
- ✅ Sử dụng ES6+ features
- ✅ Tên biến tiếng Việt không dấu
- ✅ Code tự nhiên, không AI-generated
- ✅ Comments rõ ràng
- ✅ Error handling cơ bản

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling và animations
- **JavaScript ES6+** - Logic và tương tác
- **ES6 Modules** - Import/Export
- **Node.js** - Runtime environment

## 📚 Học Tập

### Cách Học Hiệu Quả
1. **Đọc yêu cầu** - Hiểu rõ input/output mong muốn
2. **Tự code** - Thử viết function trước khi xem đáp án
3. **So sánh** - Đối chiếu với code mẫu trong `utils.js`
4. **Test** - Chạy test để kiểm tra kết quả
5. **Thực hành** - Thay đổi input để hiểu rõ hơn

### Tips
- Sử dụng `console.log()` để debug
- Mở Developer Tools để xem console
- Thử nghiệm với các input khác nhau
- Tìm hiểu thêm về ES6 features được sử dụng

## 🔧 Troubleshooting

### Lỗi ES6 Modules
Nếu gặp lỗi CORS khi mở file HTML trực tiếp:
```bash
# Sử dụng server local
npm run dev
```

### Lỗi Import/Export
Đảm bảo file có extension `.js` và sử dụng `type="module"`:
```html
<script type="module" src="index.js"></script>
```

## 📝 License

MIT License - Tự do sử dụng cho mục đích học tập và giảng dạy.

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request để cải thiện project.

---

**Chúc bạn học tập hiệu quả! 🚀** 