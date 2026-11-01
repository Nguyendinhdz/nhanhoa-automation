/* =========================================================
   BÀI VIẾT KỸ THUẬT
   - featured: true  → ghim lên trang chủ
   - cover: ảnh bìa; coverBg: màu nền sau ảnh bìa (ảnh PNG trong suốt)
   - body: nội dung HTML
   ========================================================= */

const ARTICLES = [
  {
    id: "anh-2-5d-phase-deflection",
    featured: true,
    title: "Ảnh 2.5D (phase deflection): bắt vết xước, vết lõm trên bề mặt bóng",
    date: "2026-10-31",
    tags: ["Kiểm tra ngoại quan", "Chiếu sáng", "K-WELL"],
    cover: "assets/img/kwell/kwell-25d-cover.webp",
    coverBg: "#dfe7f0",
    coverCredit: "Ảnh: K-WELL – Line-scan 2.5D phase deflection imaging system",
    excerpt: "Vết xước nông trên kính, vỏ nhôm, bề mặt sơn bóng gần như vô hình với đèn thường. Ảnh 2.5D đọc độ nghiêng của bề mặt từ vân sọc phản chiếu, nên vết xước, vết cấn, gợn sóng hiện rõ, còn bụi và vết bẩn thì không.",
    related: ["kwell-line", "kwell-backlight", "omron-fh-5553"],
    body: `
<p class="lead">Kiểm tra vết xước trên bề mặt bóng là một trong những bài toán khó nhất của vision. Bề mặt càng bóng, đèn chiếu càng dễ bị chói, còn vết xước nông chỉ vài micron thì gần như không đổi độ sáng trên ảnh. Kỹ thuật <strong>phase deflection</strong> (đo lệch pha trên bề mặt phản xạ) giải quyết chuyện này bằng cách không nhìn độ sáng, mà nhìn <strong>độ nghiêng</strong> của bề mặt.</p>

<h2>Vì sao đèn thường khó thấy vết xước trên bề mặt bóng</h2>
<p>Bề mặt bóng như kính, nhựa sơn bóng, nhôm anod hay inox đánh bóng phản xạ ánh sáng như gương. Camera chỉ thấy hình ảnh phản chiếu của nguồn sáng, nên:</p>
<ul>
  <li>Chỗ nào phản chiếu đèn thì cháy sáng, chỗ không phản chiếu thì tối, vùng nhìn được rất hẹp.</li>
  <li>Vết xước, vết cấn nông chỉ làm bề mặt nghiêng đi một chút. Độ sáng gần như không đổi, phần mềm khó tách khỏi nền.</li>
  <li>Bụi, vân tay, vết bẩn lại tạo tương phản mạnh hơn cả vết xước thật, dễ gây báo lỗi giả.</li>
</ul>

<h2>Nguyên lý: đọc độ nghiêng bề mặt từ vân sọc</h2>
<p>Thay vì chiếu sáng đều, hệ thống dùng một tấm đèn phát <strong>vân sọc sáng tối</strong>. Camera nhìn hình ảnh vân sọc phản chiếu trên bề mặt sản phẩm.</p>
<ol>
  <li><strong>Phát vân sọc và dịch pha.</strong> Tấm đèn phát vân sọc hình sin, rồi dịch vân đi vài bước (thường 3–4 bước pha). Mỗi bước, camera chụp một ảnh.</li>
  <li><strong>Bề mặt nghiêng làm vân bị lệch.</strong> Ở chỗ phẳng, vân phản chiếu đều. Ở chỗ có vết xước hay vết lõm, bề mặt nghiêng đi, tia phản xạ đổi hướng và vân sọc bị lệch pha.</li>
  <li><strong>Tính bản đồ độ dốc.</strong> Từ các ảnh dịch pha, phần mềm tính ra pha tại từng điểm ảnh, rồi đổi thành độ dốc bề mặt theo hai phương X và Y.</li>
  <li><strong>Tạo ảnh đầu ra.</strong> Từ độ dốc, hệ thống dựng ảnh độ cong và các ảnh kết quả. Vết xước, vết cấn, gợn sóng nổi lên rõ ràng, sẵn sàng cho bước phát hiện lỗi.</li>
</ol>

<h2>Vì sao gọi là 2.5D</h2>
<p>Kết quả của phương pháp này là thông tin <strong>hình dạng bề mặt</strong> (độ dốc, độ cong), không phải tọa độ 3D đầy đủ của từng điểm như camera 3D. Nó nằm giữa ảnh 2D thông thường và đo 3D, nên thường được gọi là ảnh <strong>2.5D</strong>. Bù lại, độ nhạy với thay đổi hình dạng nhỏ rất cao, phù hợp để phát hiện khuyết tật bề mặt hơn là đo kích thước.</p>

<h2>Bản line scan: kiểm tra khi sản phẩm đang chạy</h2>
<p>Với hệ thống <strong>line scan</strong>, camera quét từng dòng khi sản phẩm di chuyển qua trên băng tải hoặc bàn trượt, tấm đèn sọc đặt cố định phía trên. Cách này có ưu điểm:</p>
<ul>
  <li>Không cần dừng sản phẩm, phù hợp dây chuyền chạy liên tục.</li>
  <li>Quét được tấm lớn, sản phẩm dài, dạng cuộn mà camera area scan phải chụp ghép nhiều ảnh.</li>
  <li>Độ phân giải theo chiều chạy có thể tăng bằng cách chỉnh tốc độ và tần số quét.</li>
</ul>

<h2>Thấy được gì, bỏ qua được gì</h2>
<table>
  <thead><tr><th>Loại khuyết tật</th><th>Ảnh 2D thông thường</th><th>Ảnh 2.5D</th></tr></thead>
  <tbody>
    <tr><td>Vết xước nông</td><td>Mờ, phụ thuộc góc đèn</td><td>Rõ trên ảnh độ dốc, độ cong</td></tr>
    <tr><td>Vết lõm, vết cấn, móp nhẹ</td><td>Rất khó thấy</td><td>Rõ</td></tr>
    <tr><td>Gợn sóng, cong vênh nhẹ</td><td>Gần như không thấy</td><td>Rõ trên ảnh độ cong</td></tr>
    <tr><td>Bụi, vân tay, vết bẩn</td><td>Tương phản mạnh, dễ báo lỗi giả</td><td>Không đổi hình học nên tách được khỏi lỗi thật</td></tr>
  </tbody>
</table>

<h2>Ứng dụng tiêu biểu</h2>
<ul>
  <li>Kính màn hình, kính cường lực, nắp lưng điện thoại.</li>
  <li>Vỏ nhôm anod, khung kim loại đánh bóng của thiết bị điện tử.</li>
  <li>Bề mặt sơn bóng: chi tiết ô tô, vỏ thiết bị gia dụng.</li>
  <li>Tấm inox, tấm nhựa bóng, màng phim có độ phản xạ cao.</li>
</ul>

<h2>Giới hạn cần biết</h2>
<ul>
  <li>Hiệu quả nhất với bề mặt <strong>bóng hoặc bán bóng</strong>. Bề mặt nhám, tán xạ mạnh nên dùng chiếu sáng nhiều góc (photometric stereo), xem <a href="bai-viet.html?id=photometric-stereo-be-mat-nham">bài viết riêng</a>.</li>
  <li>Cần hiệu chuẩn vị trí đèn, camera và bề mặt chuẩn. Rung động và thay đổi khoảng cách ảnh hưởng tới kết quả.</li>
  <li>Không thay thế đo 3D khi cần số đo chiều cao tuyệt đối.</li>
</ul>

<h2>Triển khai cùng chúng tôi</h2>
<p>Mỗi loại bề mặt phản xạ khác nhau, nên bước quan trọng nhất là <strong>chụp thử với mẫu thật</strong>. Bạn gửi mẫu có lỗi và không lỗi, kỹ sư của chúng tôi dựng hệ thống chụp 2.5D, đánh giá khả năng phát hiện, rồi đề xuất cấu hình đèn, camera và bộ xử lý. Kết quả OK/NG được gửi về PLC và lưu ảnh lỗi để truy xuất.</p>
`,
  },

  {
    id: "photometric-stereo-be-mat-nham",
    featured: true,
    title: "Chiếu sáng nhiều góc (photometric stereo): thấy chữ dập và vết xước trên bề mặt nhám",
    date: "2026-10-30",
    tags: ["Kiểm tra ngoại quan", "Chiếu sáng", "K-WELL"],
    cover: "assets/img/kwell/kwell-ring.webp",
    coverBg: "#e6edf5",
    coverCredit: "Ảnh: K-WELL",
    excerpt: "Bề mặt nhám, có vân, có màu loang khiến vết xước và chữ dập chìm vào nền. Chụp với đèn chia vùng chiếu từ nhiều hướng rồi ghép lại giúp tách hình dạng bề mặt khỏi màu sắc.",
    related: ["kwell-ring", "kwell-dome", "kwell-controller"],
    body: `
<p class="lead">Trên bề mặt nhám như nhựa vân, kim loại đúc, cao su hay giấy carton, vết xước, chữ dập nổi và ký tự khắc laser thường lẫn vào vân bề mặt và màu loang. <strong>Photometric stereo</strong> là kỹ thuật chụp cùng một vị trí dưới nhiều hướng chiếu sáng khác nhau, rồi tính ra hình dạng bề mặt, tách hẳn khỏi màu sắc.</p>

<h2>Nguyên lý</h2>
<ol>
  <li><strong>Đèn chia vùng.</strong> Một đèn vòng hoặc đèn cột được chia thành 4 hoặc 8 vùng, mỗi vùng chiếu từ một hướng.</li>
  <li><strong>Chụp lần lượt.</strong> Bộ điều khiển bật từng vùng, camera chụp một ảnh cho mỗi hướng chiếu. Vật đứng yên hoặc được đồng bộ với encoder.</li>
  <li><strong>Tính hướng bề mặt.</strong> Cùng một điểm, sáng hay tối thay đổi theo hướng đèn tùy độ nghiêng tại điểm đó. Từ các ảnh này, phần mềm tính hướng pháp tuyến của bề mặt tại từng điểm ảnh.</li>
  <li><strong>Ảnh kết quả.</strong> Hệ thống xuất ảnh hình dạng (độ cong, độ dốc) và ảnh màu nền (albedo). Vết xước, chữ dập hiện rõ trên ảnh hình dạng, còn vết bẩn, màu loang chỉ nằm ở ảnh albedo.</li>
</ol>

<h2>So với ảnh 2.5D phase deflection</h2>
<table>
  <thead><tr><th></th><th>Photometric stereo</th><th>Phase deflection (2.5D)</th></tr></thead>
  <tbody>
    <tr><td>Bề mặt phù hợp</td><td>Nhám, tán xạ, có vân</td><td>Bóng, phản xạ gương</td></tr>
    <tr><td>Nguồn sáng</td><td>Đèn chia 4/8 vùng, đa góc</td><td>Tấm đèn phát vân sọc</td></tr>
    <tr><td>Thế mạnh</td><td>Chữ dập, khắc laser, xước trên nhựa và kim loại đúc</td><td>Xước nông, lõm, gợn sóng trên kính, sơn bóng</td></tr>
  </tbody>
</table>

<h2>Ứng dụng tiêu biểu</h2>
<ul>
  <li>Đọc ký tự dập nổi, dập chìm trên chi tiết kim loại, lốp xe.</li>
  <li>Kiểm tra vết xước, vết va đập trên vỏ nhựa nhám, chi tiết đúc.</li>
  <li>Kiểm tra mối hàn, bavia, gờ nổi trên chi tiết cơ khí.</li>
  <li>Bao bì, giấy carton có in nổi, dập chìm.</li>
</ul>

<h2>Lưu ý khi triển khai</h2>
<ul>
  <li>Cần chụp nhiều ảnh cho một lần kiểm tra, nên chu kỳ dài hơn chụp một ảnh. Với vật đang chạy, phải đồng bộ đèn, camera và encoder.</li>
  <li>Bề mặt quá bóng sẽ gây chói ở một số hướng đèn. Khi đó nên cân nhắc ảnh 2.5D, xem <a href="bai-viet.html?id=anh-2-5d-phase-deflection">bài viết về phase deflection</a>.</li>
  <li>Bộ điều khiển đèn phải chuyển vùng sáng đủ nhanh và đồng bộ chính xác với tín hiệu trigger của camera.</li>
</ul>
`,
  },

  {
    id: "chon-den-kiem-tra-vet-xuoc",
    title: "Chọn đèn kiểm tra vết xước: 5 kiểu chiếu sáng nên thử trước",
    date: "2026-10-29",
    tags: ["Chiếu sáng", "Hướng dẫn"],
    cover: "assets/img/kwell/kwell-bar.webp",
    coverBg: "#eef1f4",
    coverCredit: "Ảnh: K-WELL",
    excerpt: "Với kiểm tra vết xước, chọn đúng đèn quan trọng hơn chọn camera đắt. Bảng so sánh đèn góc thấp, dome, coaxial, backlight và hệ chụp 2.5D giúp bạn biết nên thử kiểu nào trước.",
    related: ["kwell-bar", "kwell-dome", "kwell-coaxial", "kwell-backlight"],
    body: `
<p class="lead">Trong kiểm tra ngoại quan, phần lớn kết quả được quyết định trước khi phần mềm chạy: <strong>ảnh có làm lỗi nổi lên hay không</strong>. Dưới đây là 5 kiểu chiếu sáng thường dùng cho bài toán vết xước, kèm cách chọn nhanh theo bề mặt sản phẩm.</p>

<h2>1. Đèn góc thấp (bar, ring góc thấp)</h2>
<p>Đèn chiếu gần song song với bề mặt. Bề mặt phẳng phản xạ ánh sáng đi chỗ khác nên tối, còn mép vết xước bắt sáng và hiện thành vệt sáng trên nền tối.</p>
<ul><li><strong>Hợp với:</strong> kim loại, nhựa phẳng, bề mặt mờ hoặc bán bóng.</li><li><strong>Lưu ý:</strong> vết xước song song với hướng chiếu khó thấy, nên chiếu từ 2–4 phía.</li></ul>

<h2>2. Đèn dome (khuếch tán)</h2>
<p>Ánh sáng đến từ mọi hướng, xóa bóng và chói. Dùng khi cần ảnh đều để <em>loại bỏ</em> ảnh hưởng của bề mặt cong, bóng, rồi tìm lỗi màu, vết bẩn.</p>
<ul><li><strong>Hợp với:</strong> bề mặt cong, bao bì bóng, lon, chi tiết có nhiều mặt.</li><li><strong>Lưu ý:</strong> vì xóa bóng nên dome thường làm vết xước nông <em>mờ đi</em>. Đây là đèn để kiểm tra màu, in ấn, hơn là xước.</li></ul>

<h2>3. Đèn đồng trục (coaxial)</h2>
<p>Ánh sáng chiếu thẳng xuống cùng trục với camera qua gương bán phản xạ. Bề mặt phẳng bóng phản xạ thẳng về camera nên sáng đều, chỗ xước làm tia lệch đi nên hiện thành vệt tối.</p>
<ul><li><strong>Hợp với:</strong> bề mặt phẳng, bóng như gương: wafer, kính phẳng, kim loại đánh bóng.</li><li><strong>Lưu ý:</strong> bề mặt hơi cong hoặc nghiêng sẽ mất sáng, cần gá đặt chính xác.</li></ul>

<h2>4. Đèn nền (backlight)</h2>
<p>Đèn đặt phía sau vật, tạo bóng đen rõ nét. Không dùng để tìm vết xước trên bề mặt vật đục, nhưng rất tốt cho vật trong suốt và cho đo kích thước, kiểm tra lỗ, biên dạng.</p>
<ul><li><strong>Hợp với:</strong> đo kích thước, kiểm tra vết nứt, bọt khí trong kính và nhựa trong.</li></ul>

<h2>5. Hệ chụp 2.5D và chiếu sáng nhiều góc</h2>
<p>Khi các cách trên chưa đủ, đặc biệt với vết xước rất nông, vết lõm nhẹ hoặc bề mặt có vân và màu loang, nên chuyển sang hệ chụp nhiều ảnh: <a href="bai-viet.html?id=anh-2-5d-phase-deflection">phase deflection 2.5D</a> cho bề mặt bóng, hoặc <a href="bai-viet.html?id=photometric-stereo-be-mat-nham">photometric stereo</a> cho bề mặt nhám.</p>

<h2>Bảng chọn nhanh</h2>
<table>
  <thead><tr><th>Bề mặt</th><th>Nên thử trước</th><th>Thử tiếp</th></tr></thead>
  <tbody>
    <tr><td>Kim loại, nhựa mờ phẳng</td><td>Góc thấp 4 phía</td><td>Photometric stereo</td></tr>
    <tr><td>Phẳng, bóng như gương</td><td>Coaxial</td><td>2.5D phase deflection</td></tr>
    <tr><td>Bóng và cong (kính 2.5D, vỏ sơn)</td><td>2.5D phase deflection</td><td>Dome kết hợp góc thấp</td></tr>
    <tr><td>Nhám, có vân, màu loang</td><td>Photometric stereo</td><td>Góc thấp nhiều hướng</td></tr>
    <tr><td>Vật trong suốt</td><td>Backlight</td><td>Đèn góc thấp nền tối</td></tr>
  </tbody>
</table>

<h2>Màu đèn cũng quan trọng</h2>
<ul>
  <li><strong>Đỏ</strong>: phổ biến, camera đen trắng nhạy tốt, giá hợp lý.</li>
  <li><strong>Xanh dương</strong>: bước sóng ngắn, làm nổi chi tiết nhỏ và vết xước nông tốt hơn trên nhiều bề mặt kim loại.</li>
  <li><strong>Hồng ngoại (IR)</strong>: xuyên qua lớp mực, giảm ảnh hưởng màu in.</li>
  <li><strong>Đèn RGB đa tầng</strong>: đổi màu và góc chiếu bằng bộ điều khiển, rất tiện khi một trạm kiểm tra nhiều loại sản phẩm.</li>
</ul>

<p>Cách nhanh nhất để chọn đúng vẫn là chụp thử với mẫu thật. Gửi mẫu cho chúng tôi, kỹ sư sẽ thử các kiểu chiếu sáng và gửi lại ảnh so sánh trước khi bạn quyết định.</p>
`,
  },
  /* ===================== ỨNG DỤNG UNIVERSAL ROBOTS ===================== */
  {
    id: "ung-dung-tieu-bieu-cobot-ur",
    featured: true,
    title: "Cobot UR trong thực tế: 4 ứng dụng tiêu biểu từ xếp pallet đến hàn",
    date: "2026-11-01",
    tags: ["Robot", "Ứng dụng", "Universal Robots"],
    cover: "assets/img/ur/case-thg.webp",
    coverFit: "cover",
    coverCredit: "Ảnh: Universal Robots – THG Automation",
    excerpt: "Xếp pallet, cấp phôi CNC, hàn và lắp đặt trên công trường: bốn câu chuyện thực tế cho thấy robot cộng tác UR giải bài toán thiếu người, nâng hạ nặng và chất lượng không đồng đều như thế nào.",
    related: ["ur12e-1300", "ur20-1750", "ur30-1300", "ur10g-1750"],
    source: { name: "Universal Robots – Case stories", url: "https://www.universal-robots.com/vn/" },
    body: `
<p class="lead">Universal Robots cho biết đã có hơn 100.000 robot cộng tác (cobot) được triển khai trên toàn cầu. Dưới đây là bốn ứng dụng tiêu biểu được UR công bố, kèm con số cụ thể, để bạn hình dung cobot phù hợp với công đoạn nào trong nhà máy của mình.</p>

<h2>1. Xếp pallet: giảm một nửa số lần nâng của công nhân</h2>
<p>Tại nhà máy Svenstrup (Đan Mạch) của Danish Crown, ba cobot UR10e đảm nhận việc xếp thùng lên pallet ở cuối ba dây chuyền đóng gói. Số lần nâng hằng ngày của công nhân giảm một nửa, hiệu suất thiết bị tổng thể (OEE) tăng 19%.</p>
<p><a href="bai-viet.html?id=ur-xep-pallet-danish-crown">Đọc chi tiết</a></p>

<h2>2. Cấp phôi máy CNC: OEE từ khoảng 70% lên khoảng 95%</h2>
<p>EMI Integrated Systems dùng nền tảng tự động hóa dạng module với cobot UR để cấp phôi cho máy phay, máy phay-tiện CNC, máy đo CMM và máy khắc laser. Doanh nghiệp tăng thêm hàng trăm giờ sản xuất mỗi năm, hoàn vốn trong 12–18 tháng.</p>
<p><a href="bai-viet.html?id=ur-cap-phoi-cnc-emi">Đọc chi tiết</a></p>

<h2>3. Hàn: robot đồng bộ với trục quay ngoài</h2>
<p>THG Automation tích hợp tính năng Coordinated Motion của UR, cho phép cobot chuyển động đồng bộ với một hoặc nhiều trục ngoài. Nhờ đó hàn được các chi tiết tròn, hình dạng phức tạp mà trước đây phải dừng lại xoay phôi bằng tay.</p>
<p><a href="bai-viet.html?id=ur-han-thg-automation">Đọc chi tiết</a></p>

<h2>4. Xây dựng: lắp giá đỡ kính mặt dựng nhà cao tầng</h2>
<p>Raise Robotics dùng hai cánh tay UR20 làm nền cho robot lắp giá đỡ kính mặt dựng. Một người vận hành robot thay cho nhóm 2–4 công nhân phải treo mình bên ngoài tòa nhà, và robot hoàn vốn chỉ trong một dự án 13 tầng.</p>
<p><a href="bai-viet.html?id=ur-xay-dung-raise-robotics">Đọc chi tiết</a></p>

<h2>Điểm chung của các dự án thành công</h2>
<ul>
  <li><strong>Chọn công đoạn lặp lại, nặng nhọc hoặc nguy hiểm</strong> để tự động hóa trước, giải phóng người có tay nghề cho việc giá trị cao hơn.</li>
  <li><strong>Dùng đầu công cụ và phần mềm có sẵn</strong> (tay gắp, giác hút, bộ hàn) thay vì tự chế từ đầu, rút ngắn thời gian triển khai.</li>
  <li><strong>Thiết kế linh hoạt</strong> để đổi sản phẩm nhanh: thêm module, đổi tay gắp, đổi chương trình.</li>
</ul>

<h2>Kết hợp với vision</h2>
<p>Khi vị trí phôi không cố định hoặc cần kiểm tra chất lượng ngay trên robot, chúng tôi kết hợp cobot UR với camera 3D Mech-Mind hoặc bộ xử lý ảnh OMRON FH. Xem thêm giải pháp <a href="giai-phap.html#robot-guidance">Robot + Vision gắp vật</a> và <a href="giai-phap.html#palletizing">Xếp & dỡ pallet</a>.</p>
`,
  },

  {
    id: "ur-xep-pallet-danish-crown",
    title: "Danish Crown: 3 cobot UR10e giảm một nửa số lần nâng thùng",
    date: "2026-10-28",
    tags: ["Robot", "Ứng dụng", "Universal Robots"],
    cover: "assets/img/ur/case-danish-crown.webp",
    coverFit: "cover",
    coverCredit: "Ảnh: Universal Robots – Danish Crown",
    excerpt: "Ba cobot UR10e xếp thùng xúc xích lên pallet ở nhà máy Svenstrup, giảm 50% số lần nâng của công nhân và tăng OEE 19%.",
    related: ["ur12e-1300", "ur20-1750", "gripper-vacuum", "robot-base"],
    source: { name: "Universal Robots – Danish Crown", url: "https://www.universal-robots.com/case-stories/danish-crown/" },
    body: `
<p class="lead">Danish Crown là một trong những nhà sản xuất thịt lớn nhất thế giới. Tại nhà máy Svenstrup ở miền Bắc Đan Mạch, công nhân xử lý khoảng 5 tấn thịt mỗi ngày, bao gồm cả khâu đóng thùng và xếp pallet.</p>

<h2>Bài toán</h2>
<ul>
  <li>Cuối dây chuyền, công nhân đóng 8 túi xúc xích vào thùng, dán băng keo rồi tự tay xếp thùng lên pallet. Công việc tốn thời gian, nặng nhọc và có rủi ro chấn thương.</li>
  <li>Có khoảng 20 sản phẩm khác nhau chạy liên tục, cùng loại thùng nhưng khác khối lượng, nên phải đổi cấu hình xếp nhanh.</li>
  <li>Nhu cầu nhân lực dao động theo mùa vụ, khó tuyển người vào giờ cao điểm.</li>
</ul>

<h2>Giải pháp</h2>
<ul>
  <li>Từ mùa xuân 2023, cobot UR10e đầu tiên được lắp ở cuối dây chuyền đóng gói. Sau đó thêm hai robot nữa, tổng cộng ba cobot cho ba dây chuyền.</li>
  <li>Hệ thống do nhà phân phối Bila (chuyên giải pháp xếp pallet) triển khai, dùng tay gắp chân không dạng xốp của đối tác UR+ Joulin.</li>
</ul>

<h2>Kết quả theo UR công bố</h2>
<table>
  <tbody>
    <tr><th>Số lần nâng của công nhân mỗi ngày</th><td>Giảm 50%</td></tr>
    <tr><th>Hiệu suất thiết bị tổng thể (OEE)</th><td>Tăng 19%</td></tr>
    <tr><th>Số cobot</th><td>3 × UR10e</td></tr>
  </tbody>
</table>

<h2>Áp dụng tại Việt Nam</h2>
<p>Bài toán xếp thùng cuối dây chuyền rất phổ biến trong ngành thực phẩm, đồ uống, điện tử. Với dòng hiện tại, UR12e (12.5 kg) phù hợp thùng nhẹ, UR20 (20 kg, tầm với 1750 mm) hoặc UR30 phù hợp thùng nặng và pallet cao. Kết hợp camera 3D, robot có thể nhận diện thùng không cố định vị trí.</p>
`,
  },

  {
    id: "ur-cap-phoi-cnc-emi",
    title: "EMI: cobot UR cấp phôi máy CNC, OEE tăng từ khoảng 70% lên khoảng 95%",
    date: "2026-10-27",
    tags: ["Robot", "Ứng dụng", "Universal Robots"],
    cover: "assets/img/ur/case-emi.webp",
    coverFit: "cover",
    coverCredit: "Ảnh: Universal Robots – EMI Integrated Systems",
    excerpt: "Nền tảng module acubez với cobot UR cấp phôi cho máy CNC, máy đo CMM và máy khắc laser, hoàn vốn trong 12–18 tháng.",
    related: ["ur7e-920", "ur12e-1300", "gripper-electric", "tool-changer"],
    source: { name: "Universal Robots – EMI Integrated Systems", url: "https://www.universal-robots.com/case-stories/emi-integrated-systems-ltd/" },
    body: `
<p class="lead">EMI Integrated Systems sản xuất chi tiết chính xác cao, phức tạp cho ngành công nghệ cao, y tế và hàng không. Công ty chủ yếu dùng máy CNC phay và phay-tiện 4–5 trục, sản xuất lô nhỏ và vừa từ vài chục đến vài nghìn chi tiết.</p>

<h2>Bài toán</h2>
<ul>
  <li>Thiếu thợ lành nghề, trong khi vẫn phải tăng năng suất để cạnh tranh.</li>
  <li>Thợ giỏi đang mất thời gian cho việc lặp lại đơn giản như cấp và lấy phôi.</li>
</ul>

<h2>Giải pháp</h2>
<ul>
  <li>Nền tảng tự động hóa dạng module <strong>acubez</strong> kết hợp cobot UR10 và UR5. Mỗi trạm chọn cánh tay theo tải trọng, thêm khay, module nâng và tay gắp khác nhau.</li>
  <li>Cobot cấp phôi cho máy phay, máy phay-tiện CNC, máy đo CMM và máy khắc laser.</li>
  <li>Có thể bắt đầu với cấu hình nhỏ rồi thêm module sau khi nhu cầu thay đổi, giảm rủi ro đầu tư.</li>
</ul>

<h2>Kết quả theo UR công bố</h2>
<table>
  <tbody>
    <tr><th>Hiệu suất thiết bị tổng thể (OEE)</th><td>Từ khoảng 70% lên khoảng 95%</td></tr>
    <tr><th>Năng lực sản xuất</th><td>Tăng thêm hàng trăm giờ mỗi năm</td></tr>
    <tr><th>Thời gian hoàn vốn</th><td>12–18 tháng</td></tr>
  </tbody>
</table>

<h2>Áp dụng tại Việt Nam</h2>
<p>Cấp phôi CNC là ứng dụng cobot dễ hoàn vốn nhất cho xưởng cơ khí chính xác. Dòng UR mới tương đương là UR7e (7.5 kg) cho phôi nhỏ và UR12e (12.5 kg) cho phôi vừa. Khi phôi để lộn xộn trong khay, chúng tôi thêm camera 3D Mech-Eye để robot tự tìm vị trí gắp.</p>
`,
  },

  {
    id: "ur-han-thg-automation",
    title: "THG Automation: hàn chi tiết tròn với cobot UR đồng bộ trục ngoài",
    date: "2026-10-26",
    tags: ["Robot", "Ứng dụng", "Universal Robots"],
    cover: "assets/img/ur/case-thg.webp",
    coverFit: "cover",
    coverCredit: "Ảnh: Universal Robots – THG Automation",
    excerpt: "Tính năng Coordinated Motion cho cobot UR chuyển động đồng bộ với trục quay ngoài, hàn liền mạch chi tiết tròn và hình dạng phức tạp.",
    related: ["ur20-1750", "ur30-1300", "ur12e-1300"],
    source: { name: "Universal Robots – THG Automation", url: "https://www.universal-robots.com/case-stories/thg-automation/" },
    body: `
<p class="lead">THG Automation (Indianapolis, Mỹ) là đối tác của UR, phát triển giải pháp hàn và cắt dựa trên cobot UR. Công ty đã cùng UR phát triển và đưa vào sản phẩm tính năng <strong>Coordinated Motion</strong> (chuyển động đồng bộ).</p>

<h2>Coordinated Motion là gì</h2>
<p>Tính năng này cho phép cobot UR chuyển động đồng bộ chính xác với một hoặc nhiều trục ngoài, ví dụ bàn xoay hoặc mâm quay phôi. Robot và trục ngoài phối hợp theo mili giây để đầu hàn luôn đi đúng quỹ đạo trong khi phôi đang quay. Tính năng nằm trong gói phần mềm MotionPlus, dành cho các đối tác OEM, UR+ và nhà tích hợp được UR chứng nhận.</p>

<h2>Lợi ích</h2>
<ul>
  <li><strong>Hàn liền mạch chi tiết tròn, hình dạng phức tạp</strong>: trước đây phải dừng lại xoay phôi bằng tay hoặc hàn làm hai lần.</li>
  <li><strong>Rút ngắn chu kỳ</strong> nhờ hàn trong khi phôi đang chuyển động.</li>
  <li><strong>Mở rộng ứng dụng</strong>: hàn đắp bề mặt ống gió hình dạng phức tạp, hàn chi tiết dạng xoắn như trục vít, máy ly tâm, những việc trước đây thường phải từ chối.</li>
</ul>

<h2>Kết quả</h2>
<p>Theo UR, THG Automation đã rút ngắn khoảng 60% thời gian trong quá trình hàn với cobot UR. CEO của THG dự đoán Coordinated Motion sẽ mang lại mức tăng năng suất hai con số cho khách hàng.</p>

<h2>Áp dụng tại Việt Nam</h2>
<p>Hàn bằng cobot phù hợp xưởng sản xuất lô nhỏ, nhiều mã hàng, nơi robot hàn truyền thống khó lập trình lại. UR20 và UR30 thường được chọn cho hàn nhờ tầm với dài và tải lớn để mang mỏ hàn, cáp và cảm biến.</p>
`,
  },

  {
    id: "ur-xay-dung-raise-robotics",
    title: "Raise Robotics: hai cánh tay UR20 lắp giá đỡ kính trên nhà cao tầng",
    date: "2026-10-25",
    tags: ["Robot", "Ứng dụng", "Universal Robots"],
    cover: "assets/img/ur/case-raise.webp",
    coverFit: "cover",
    coverCredit: "Ảnh: Universal Robots – Raise Robotics",
    excerpt: "Robot dựa trên UR20 thay công nhân treo mình ngoài tòa nhà để khoan và siết giá đỡ kính, tăng năng suất gấp 3 lần, hoàn vốn trong một dự án 13 tầng.",
    related: ["ur20-1750", "ur30-1300"],
    source: { name: "Universal Robots – Raise Robotics", url: "https://www.universal-robots.com/case-stories/raise-robotics/" },
    body: `
<p class="lead">Raise Robotics đặt mục tiêu đưa công nhân xây dựng ra khỏi các vị trí nguy hiểm. Robot đầu tiên của công ty dùng hai cánh tay <strong>UR20</strong> để lắp giá đỡ cho tấm kính mặt dựng trên các tòa nhà cao tầng.</p>

<h2>Bài toán</h2>
<ul>
  <li>Lắp giá đỡ kính bằng tay, công nhân phải đeo dây an toàn và treo mình bên ngoài tòa nhà, có khi cao hơn 300 m.</li>
  <li>Ở tư thế đó vẫn phải căn chỉnh, khoan và siết giá đỡ đúng thông số, công việc nguy hiểm, sai tư thế và lặp lại.</li>
  <li>Dụng cụ hoặc giá đỡ rơi xuống có thể gây tai nạn cho người bên dưới.</li>
</ul>

<h2>Giải pháp</h2>
<ul>
  <li>Robot tự căn chỉnh, khoan và siết giá đỡ với quy trình chính xác, lực siết và vị trí trong dung sai khoảng ±3/16 inch (khoảng ±5 mm).</li>
  <li>Robot ghi dữ liệu thời gian thực để kiểm soát chất lượng từng vị trí lắp.</li>
  <li>Harmon, công ty kính mặt dựng hàng đầu của Mỹ, là khách hàng sử dụng sớm.</li>
</ul>

<h2>Kết quả theo UR công bố</h2>
<table>
  <tbody>
    <tr><th>Nhân lực</th><td>1 người vận hành robot thay cho 2–4 công nhân mỗi vị trí</td></tr>
    <tr><th>Năng suất</th><td>Gấp 3 lần so với làm thủ công</td></tr>
    <tr><th>Hoàn vốn</th><td>Trong khoảng một dự án 13 tầng</td></tr>
    <tr><th>An toàn</th><td>Công nhân làm việc phía trong lan can thay vì treo bên ngoài</td></tr>
  </tbody>
</table>

<h2>Bài học cho nhà máy</h2>
<p>Cobot UR20 có thể làm nền cho cả những ứng dụng ngoài nhà máy. Điểm mấu chốt là chọn công việc nguy hiểm, lặp lại, cần độ chính xác đồng đều, rồi ghép robot với dụng cụ và phần mềm chuyên dụng.</p>
`,
  },
];

function articleDate(d) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

function articleCard(a) {
  return `
    <article class="acard">
      <a href="bai-viet.html?id=${a.id}" class="acard-img" style="background:${a.coverBg || "var(--paper)"}">
        <img src="${a.cover}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()" class="${a.coverFit === "cover" ? "is-cover" : ""}">
      </a>
      <div class="acard-body">
        <p class="acard-meta">${articleDate(a.date)} · ${a.tags[0]}</p>
        <h3 class="acard-title"><a href="bai-viet.html?id=${a.id}">${a.title}</a></h3>
        <p class="acard-text">${a.excerpt}</p>
        <a href="bai-viet.html?id=${a.id}" class="link-more">Đọc bài</a>
      </div>
    </article>`;
}
