# Web Vision – bản demo (HTML/CSS/JS thuần)

## Chạy thử
1. Giải nén, mở thư mục `web-vision` bằng **Visual Studio Code**.
2. Cài extension **Live Server** (Ritwick Dey) nếu chưa có.
3. Mở `index.html` → bấm **Go Live** ở thanh dưới cùng. Trình duyệt mở `http://127.0.0.1:5500`.

## Cấu trúc
```
index.html        Trang chủ (hero, danh mục, sản phẩm nổi bật, giải pháp, hãng, quy trình)
san-pham.html     Danh sách sản phẩm + bộ lọc danh mục / hãng / tìm kiếm
chi-tiet.html     Chi tiết sản phẩm (?id=...)
giai-phap.html    Các giải pháp, "thêm cả bộ vào báo giá"
bao-gia.html      Danh sách báo giá + form liên hệ
assets/css/style.css   Giao diện, màu thương hiệu ở đầu file (:root)
assets/js/data.js      TOÀN BỘ nội dung: tên công ty, danh mục, hãng, sản phẩm, giải pháp
assets/js/main.js      Header, mega menu, footer, danh sách báo giá dùng chung
```

## Sửa nội dung
- Tên công ty, hotline, Zalo, email, địa chỉ: `SITE` trong `assets/js/data.js`.
- Thêm sản phẩm: chép một dòng trong `PRODUCTS`, đổi `id` (không trùng), `cat`, `sub`, `brand`, `specs`.
- Ảnh thật: tạo thư mục `assets/img/`, thêm `image: "assets/img/ten-anh.jpg"` vào sản phẩm.
- Màu: sửa `--steel` (màu chính) và `--amber` (màu nhấn) trong `style.css`.

## Lưu ý
- Thông số sản phẩm là **tham khảo**, cần đối chiếu catalogue chính hãng trước khi đăng.
- Danh sách báo giá lưu trong trình duyệt (localStorage). Form chưa gửi về máy chủ.

## Bước tiếp theo (gợi ý)
- Nối form về email/CRM (EmailJS, Formspree hoặc backend riêng).
- Trang quản trị để thêm/sửa sản phẩm (ví dụ Next.js + database, hoặc WordPress/WooCommerce chế độ báo giá).
- Song ngữ Việt/Anh, SEO, tên miền + hosting.
