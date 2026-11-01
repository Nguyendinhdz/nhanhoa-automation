/* =========================================================
   Phần dùng chung: header, mega menu, footer, danh sách báo giá
   ========================================================= */

/* ---------- Hình minh họa sản phẩm (SVG, thay bằng ảnh thật sau) ---------- */
const ICONS = {
  camera: `<rect x="18" y="34" width="64" height="40" rx="4"/><circle cx="50" cy="54" r="12"/><circle cx="50" cy="54" r="5"/><rect x="26" y="28" width="14" height="6" rx="1"/>`,
  controller: `<rect x="16" y="26" width="68" height="50" rx="4"/><line x1="16" y1="40" x2="84" y2="40"/><circle cx="26" cy="33" r="2"/><circle cx="34" cy="33" r="2"/><rect x="24" y="48" width="12" height="18"/><rect x="42" y="48" width="12" height="18"/><rect x="60" y="48" width="16" height="8"/>`,
  scanner: `<rect x="22" y="30" width="56" height="34" rx="6"/><rect x="34" y="40" width="32" height="14" rx="2"/><path d="M30 72 L70 72"/><path d="M38 78 L62 78"/>`,
  cube: `<path d="M50 20 L78 35 L78 66 L50 81 L22 66 L22 35 Z"/><path d="M22 35 L50 50 L78 35"/><path d="M50 50 L50 81"/>`,
  software: `<rect x="16" y="24" width="68" height="48" rx="4"/><line x1="16" y1="34" x2="84" y2="34"/><path d="M30 46 L38 54 L30 62"/><line x1="44" y1="62" x2="60" y2="62"/><path d="M40 80 L60 80"/>`,
  ring: `<circle cx="50" cy="50" r="28"/><circle cx="50" cy="50" r="16"/><circle cx="50" cy="26" r="2.5"/><circle cx="74" cy="50" r="2.5"/><circle cx="50" cy="74" r="2.5"/><circle cx="26" cy="50" r="2.5"/><circle cx="67" cy="33" r="2.5"/><circle cx="33" cy="67" r="2.5"/><circle cx="67" cy="67" r="2.5"/><circle cx="33" cy="33" r="2.5"/>`,
  bar: `<rect x="14" y="42" width="72" height="16" rx="3"/><circle cx="24" cy="50" r="2.5"/><circle cx="34" cy="50" r="2.5"/><circle cx="44" cy="50" r="2.5"/><circle cx="54" cy="50" r="2.5"/><circle cx="64" cy="50" r="2.5"/><circle cx="74" cy="50" r="2.5"/><path d="M30 64 L24 78"/><path d="M50 64 L50 80"/><path d="M70 64 L76 78"/>`,
  coaxial: `<rect x="28" y="22" width="44" height="44" rx="3"/><line x1="28" y1="66" x2="72" y2="22"/><rect x="74" y="34" width="8" height="20" rx="1"/><path d="M50 66 L50 82"/><circle cx="50" cy="16" r="4"/>`,
  dome: `<path d="M18 70 A32 32 0 0 1 82 70 Z"/><circle cx="50" cy="40" r="5"/><line x1="18" y1="70" x2="82" y2="70"/>`,
  backlight: `<rect x="16" y="56" width="68" height="14" rx="2"/><rect x="36" y="38" width="28" height="14" rx="2"/><path d="M24 52 L24 46"/><path d="M76 52 L76 46"/><path d="M30 30 L70 30"/>`,
  lens: `<rect x="30" y="18" width="40" height="64" rx="4"/><line x1="30" y1="30" x2="70" y2="30"/><line x1="30" y1="38" x2="70" y2="38"/><line x1="30" y1="62" x2="70" y2="62"/><ellipse cx="50" cy="82" rx="16" ry="3"/>`,
  cable: `<path d="M20 30 C 50 30, 50 70, 80 70"/><rect x="12" y="24" width="10" height="12" rx="2"/><rect x="78" y="64" width="10" height="12" rx="2"/><path d="M20 70 L40 70"/><path d="M60 30 L80 30"/>`,
  robot: `<rect x="30" y="72" width="40" height="10" rx="2"/><rect x="42" y="56" width="16" height="16" rx="3"/><path d="M50 56 L50 44"/><circle cx="50" cy="40" r="6"/><path d="M54 36 L70 22"/><circle cx="72" cy="20" r="5"/><path d="M76 22 L82 34"/><path d="M80 36 L76 42 M84 36 L88 42"/>`,
  gripper: `<rect x="38" y="16" width="24" height="16" rx="3"/><rect x="30" y="32" width="40" height="14" rx="2"/><path d="M36 46 L36 72 L42 76"/><path d="M64 46 L64 72 L58 76"/><rect x="44" y="62" width="12" height="12" rx="1"/>`,
  vacuum: `<rect x="20" y="22" width="60" height="12" rx="2"/><path d="M30 34 L30 54"/><path d="M50 34 L50 54"/><path d="M70 34 L70 54"/><path d="M22 54 L38 54 L34 62 L26 62 Z"/><path d="M42 54 L58 54 L54 62 L46 62 Z"/><path d="M62 54 L78 54 L74 62 L66 62 Z"/><rect x="18" y="68" width="64" height="12" rx="1"/>`,
  toolchanger: `<circle cx="50" cy="38" r="18"/><circle cx="50" cy="38" r="8"/><rect x="34" y="58" width="32" height="10" rx="2"/><rect x="38" y="68" width="24" height="12" rx="2"/>`,
  base: `<rect x="34" y="20" width="32" height="16" rx="3"/><rect x="42" y="36" width="16" height="30"/><rect x="18" y="66" width="64" height="8" rx="2"/><circle cx="26" cy="80" r="4"/><circle cx="74" cy="80" r="4"/>`,
  fhcustom: `<rect x="14" y="22" width="52" height="40" rx="3"/><line x1="14" y1="32" x2="66" y2="32"/><rect x="22" y="40" width="14" height="14"/><path d="M42 44 L58 44 M42 50 L54 50"/><path d="M60 58 L74 58 L86 70 L74 82 L60 82 Z"/><path d="M68 66 L64 70 L68 74 M76 66 L80 70 L76 74"/>`,
  inspect: `<rect x="18" y="22" width="64" height="48" rx="3"/><rect x="34" y="34" width="22" height="18" stroke-dasharray="3 3"/><path d="M60 58 L76 74"/><circle cx="56" cy="54" r="0.5"/>`,
  measure: `<rect x="16" y="40" width="68" height="20" rx="2"/><path d="M24 40 L24 48 M34 40 L34 52 M44 40 L44 48 M54 40 L54 52 M64 40 L64 48 M74 40 L74 52"/><path d="M16 28 L84 28 M16 24 L16 32 M84 24 L84 32"/>`,
  align: `<circle cx="50" cy="50" r="22"/><path d="M50 18 L50 38 M50 62 L50 82 M18 50 L38 50 M62 50 L82 50"/><rect x="44" y="44" width="12" height="12" transform="rotate(12 50 50)"/>`,
  pallet: `<rect x="22" y="22" width="24" height="20"/><rect x="54" y="22" width="24" height="20"/><rect x="22" y="44" width="24" height="20"/><rect x="54" y="44" width="24" height="20"/><path d="M16 68 L84 68 M16 76 L84 76 M24 68 L24 76 M50 68 L50 76 M76 68 L76 76"/>`,
  code: `<rect x="22" y="22" width="24" height="24"/><rect x="28" y="28" width="12" height="12"/><rect x="54" y="22" width="24" height="24"/><rect x="60" y="28" width="12" height="12"/><rect x="22" y="54" width="24" height="24"/><rect x="28" y="60" width="12" height="12"/><path d="M56 56 L62 56 M68 56 L78 56 M56 64 L64 64 M72 64 L78 64 M56 72 L60 72 M66 72 L78 72"/>`,
};

function iconSVG(name, cls = "") {
  return `<svg class="ill ${cls}" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.camera}</svg>`;
}

function productImage(p) {
  // Ảnh chưa có trong thư mục thì tự quay về hình minh họa
  if (p.image) return `<img src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML=iconSVG('${p.icon}')">`;
  return iconSVG(p.icon);
}

const brandName = (id) => (BRANDS.find((b) => b.id === id) || {}).name || id;
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || id;
const subName = (catId, subId) => {
  const c = CATEGORIES.find((c) => c.id === catId);
  return c ? (c.children.find((s) => s.id === subId) || {}).name : "";
};

/* ---------- Danh sách báo giá (lưu trong trình duyệt) ---------- */
const QUOTE_KEY = "vt_quote_list";
/* Tìm sản phẩm cho danh sách báo giá.
   id thường: "ur12e-1300"; id theo model: "st-gige-areacamera::STC-MBS43POE" */
function findQuoteItem(id) {
  if (id.includes("::")) {
    const [pid, model] = id.split("::");
    const p = PRODUCTS.find((x) => x.id === pid);
    if (!p) return null;
    return { ...p, id, name: `Camera ${model}`, model, seriesName: p.name, seriesId: p.id };
  }
  return PRODUCTS.find((x) => x.id === id) || null;
}

const Quote = {
  get() {
    try { return JSON.parse(localStorage.getItem(QUOTE_KEY)) || []; } catch { return []; }
  },
  save(list) {
    try { localStorage.setItem(QUOTE_KEY, JSON.stringify(list)); } catch {}
    updateQuoteBadge();
  },
  add(id, qty = 1) {
    const list = Quote.get();
    const item = list.find((i) => i.id === id);
    if (item) item.qty += qty; else list.push({ id, qty });
    Quote.save(list);
    toast("Đã thêm vào danh sách báo giá");
  },
  setQty(id, qty) {
    const list = Quote.get().map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
    Quote.save(list);
  },
  remove(id) { Quote.save(Quote.get().filter((i) => i.id !== id)); },
  clear() { Quote.save([]); },
  count() { return Quote.get().reduce((s, i) => s + i.qty, 0); },
};

function updateQuoteBadge() {
  document.querySelectorAll("[data-quote-count]").forEach((el) => {
    const n = Quote.count();
    el.textContent = n;
    el.hidden = n === 0;
  });
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.innerHTML = `${msg} <a href="bao-gia.html">Xem danh sách</a>`;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2600);
}

/* Nút "Thêm vào báo giá" ở mọi trang */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add-quote]");
  if (btn) { e.preventDefault(); Quote.add(btn.dataset.addQuote); }
});

/* ---------- Header + mega menu ---------- */
function renderHeader(active) {
  const megaCols = CATEGORIES.map((c) => `
    <div class="mega-col">
      <a class="mega-head" href="san-pham.html?cat=${c.id}">${iconSVG(c.icon, "mini")}<span>${c.name}</span></a>
      <ul>${c.children.slice(0, 8).map((s) => `<li><a href="san-pham.html?cat=${c.id}&sub=${s.id}">${s.name}</a></li>`).join("")}
        ${c.children.length > 8 ? `<li><a class="mega-more" href="san-pham.html?cat=${c.id}">+ ${c.children.length - 8} nhóm khác</a></li>` : ""}</ul>
    </div>`).join("");

  const megaBrands = BRANDS.filter((b) => b.id !== "other").map((b) =>
    `<a href="san-pham.html?brand=${b.id}">${b.name}</a>`).join("");

  const solItems = SOLUTIONS.map((s) =>
    `<li><a href="${s.link || "giai-phap.html#" + s.id}">${s.name}</a></li>`).join("");

  const nav = (id, href, label) =>
    `<a href="${href}" class="nav-link ${active === id ? "is-active" : ""}">${label}</a>`;

  document.getElementById("site-header").innerHTML = `
    <div class="topbar">
      <div class="container topbar-in">
        <span>${SITE.slogan}</span>
        <span class="topbar-r">
          <a href="tel:${SITE.phone.replace(/\s/g, "")}">Hotline ${SITE.phone}</a>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </span>
      </div>
    </div>
    <div class="navbar">
      <div class="container navbar-in">
        <a href="index.html" class="logo" aria-label="${SITE.name} trang chủ">
          <img class="logo-img" src="assets/img/brand/logo.webp" width="242" height="240" alt="">
          <span class="logo-text">${SITE.name}</span>
        </a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">Menu</button>
        <nav id="main-nav" class="main-nav" aria-label="Menu chính">
          ${nav("home", "index.html", "Trang chủ")}
          <div class="has-mega">
            <a href="san-pham.html" class="nav-link ${active === "products" ? "is-active" : ""}" aria-haspopup="true">Sản phẩm</a>
            <div class="mega">
              <div class="container mega-in">
                <div class="mega-cols">${megaCols}</div>
                <div class="mega-side">
                  <p class="mega-label">Theo hãng</p>
                  <div class="mega-brands">${megaBrands}</div>
                  <a href="san-pham.html" class="btn btn-ghost btn-sm">Xem tất cả sản phẩm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="has-drop">
            <a href="giai-phap.html" class="nav-link ${active === "solutions" ? "is-active" : ""}" aria-haspopup="true">Giải pháp</a>
            <ul class="drop">${solItems}</ul>
          </div>
          ${nav("articles", "kien-thuc.html", "Kiến thức")}
          ${nav("about", "index.html#gioi-thieu", "Giới thiệu")}
          ${nav("contact", "bao-gia.html#lien-he", "Liên hệ")}
          <a href="bao-gia.html" class="btn btn-primary btn-sm nav-quote">
            Báo giá <span class="badge" data-quote-count hidden>0</span>
          </a>
        </nav>
      </div>
    </div>`;

  const toggle = document.querySelector(".menu-toggle");
  const navEl = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const open = navEl.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  updateQuoteBadge();
}

/* ---------- Footer ---------- */
function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo logo-light"><span class="logo-badge"><img class="logo-img" src="assets/img/brand/logo.webp" width="242" height="240" alt=""></span><span class="logo-text">${SITE.name}</span></a>
        <p class="footer-about">Phân phối thiết bị vision, robot cộng tác và tích hợp giải pháp tự động hóa cho nhà máy.</p>
      </div>
      <div>
        <h4>Sản phẩm</h4>
        <ul>${CATEGORIES.map((c) => `<li><a href="san-pham.html?cat=${c.id}">${c.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Giải pháp</h4>
        <ul>${SOLUTIONS.map((s) => `<li><a href="${s.link || "giai-phap.html#" + s.id}">${s.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Kiến thức</h4>
        <ul><li><a href="kien-thuc.html">Bài viết kỹ thuật</a></li><li><a href="kien-thuc.html?tag=Chi%E1%BA%BFu%20s%C3%A1ng">Chiếu sáng vision</a></li><li><a href="kien-thuc.html?tag=Ki%E1%BB%83m%20tra%20ngo%E1%BA%A1i%20quan">Kiểm tra ngoại quan</a></li></ul>
      </div>
      <div>
        <h4>Liên hệ</h4>
        <ul class="footer-contact">
          <li>${SITE.address}</li>
          <li><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} ${SITE.name}. Tên và nhãn hiệu sản phẩm thuộc về các hãng sở hữu.</span>
    </div>`;

  // Nút liên hệ nổi (Zalo + gọi)
  const fab = document.createElement("div");
  fab.className = "fab";
  fab.innerHTML = `
    <a href="https://zalo.me/${SITE.zalo}" target="_blank" rel="noopener" class="fab-btn fab-zalo">Zalo</a>
    <a href="tel:${SITE.phone.replace(/\s/g, "")}" class="fab-btn fab-call">Gọi</a>`;
  document.body.appendChild(fab);
}

/* ---------- Thẻ sản phẩm ---------- */
function productCard(p) {
  return `
    <article class="pcard">
      <a href="chi-tiet.html?id=${p.id}" class="pcard-img">${productImage(p)}</a>
      <div class="pcard-body">
        <span class="pcard-brand">${brandName(p.brand)}</span>
        <h3 class="pcard-title"><a href="chi-tiet.html?id=${p.id}">${p.name}</a></h3>
        <p class="pcard-text">${p.short}</p>
        <div class="pcard-actions">
          <button class="btn btn-primary btn-sm" data-add-quote="${p.id}">Thêm vào báo giá</button>
          <a href="chi-tiet.html?id=${p.id}" class="link-more">Chi tiết</a>
        </div>
      </div>
    </article>`;
}

/* Khung video YouTube (chỉ tải khi người xem bấm phát) */
function videoEmbed(id, title) {
  return `<div class="video">
    <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${title || "Video"}" loading="lazy"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
  </div>`;
}

function initPage(active) {
  renderHeader(active);
  renderFooter();
  document.title = document.title.replace("{SITE}", SITE.name);
}
