/* ============================================================
   MAİL MASKELEME PRO — Bootstrap 5 + Wizard + QR Kaydırıcı
   ============================================================ */

// Kısa querySelector yardımcılarım
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Bootstrap toast nesnesini bir kez oluşturup tekrar tekrar kullanıyorum
const toastEl = $("#toast");
const toastBS = new bootstrap.Toast(toastEl, { delay: 2200 });

// Kullanıcıya kısa bildirim göstermek için bu fonksiyonu her yerde çağıracağım
function toast(msg) {
  $("#toastMsg").textContent = msg;
  toastBS.show();
}

// ============ MASKELEME MOTORU ============

// Seçilen moda göre e-postayı maskeleyen ana fonksiyonum
function maskEmail(email, mode = "first-last") {
  if (!email || typeof email !== "string") return null;
  email = email.trim();

  const at = email.indexOf("@");
  // @ yoksa veya başta/sonda ise geçersiz sayıyorum
  if (at <= 0 || at === email.length - 1) return null;

  const user = email.slice(0, at);
  const domain = email.slice(at);
  const stars = (n) => "*".repeat(Math.max(0, n));

  switch (mode) {
    case "first-last":
      if (user.length <= 2) return user[0] + stars(user.length - 1) + domain;
      return user[0] + stars(user.length - 2) + user[user.length - 1] + domain;

    case "first2-last2":
      if (user.length <= 4) return maskEmail(email, "first-last");
      return user.slice(0, 2) + stars(user.length - 4) + user.slice(-2) + domain;

    case "hide-local":
      return stars(user.length) + domain;

    case "hide-domain": {
      const dot = domain.lastIndexOf(".");
      if (dot === -1) return user + "@****";
      return user + "@" + stars(domain.length - dot - 1) + domain.slice(dot);
    }

    case "full":
      return stars(user.length) + "@" + stars(domain.length - 1);

    default:
      return maskEmail(email, "first-last");
  }
}

// ============ SİHİRBAZ DURUMU ============

// Hangi moddayız: "single" veya "bulk"
let wizardMode = null;
// Her iki panelde de ayrı seçilen maskeleme stili tutuyorum
let modeSingle = "first-last";
let modeBulk = "first-last";
// Son üretilen sonuçları burada saklayacağım (kopyala için)
let lastResults = [];
// QR'ın maskeli mi maskesiz mi gösterileceğini burada tutuyorum (varsayılan: maskesiz)
let qrShowMasked = false;
// Aktif işlemdeki tüm e-postaları (orijinal + maskeli) saklıyorum, QR üretirken lazım
let currentItems = [];

// Adım göstergesini güncelleyen fonksiyonum
function setStep(step) {
  $$(".wizard-step").forEach((el) => {
    const n = Number(el.dataset.step);
    el.classList.toggle("active", n === step);
    el.classList.toggle("completed", n < step);
  });

  $("#step1").classList.toggle("d-none", step !== 1);
  $("#step2").classList.toggle("d-none", step !== 2);
  $("#step3").classList.toggle("d-none", step !== 3);
}

// ============ ADIM 1: MOD SEÇİMİ ============

$$(".mode-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".mode-card").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    wizardMode = btn.dataset.modeChoice;

    if (wizardMode === "single") {
      $("#step2Title").textContent = "Tek E-posta Gir";
      $("#singleInputGroup").classList.remove("d-none");
      $("#bulkInputGroup").classList.add("d-none");
    } else {
      $("#step2Title").textContent = "Toplu E-posta Gir";
      $("#singleInputGroup").classList.add("d-none");
      $("#bulkInputGroup").classList.remove("d-none");
    }

    setStep(2);
  });
});

// ============ GERİ VE TEKRAR BUTONLARI ============

// Uygulamayı tamamen sıfırlayan ortak fonksiyonum
function resetApp(goToStep = 1) {
  wizardMode = null;
  lastResults = [];
  currentItems = [];
  $("#emailInput").value = "";
  $("#bulkInput").value = "";
  $("#resultsArea").innerHTML = "";
  // Seçili kartları temizle
  $$(".mode-card").forEach((b) => b.classList.remove("selected"));
  renderQRs();
  setStep(goToStep);
}

// Adım 1'deki "Sıfırla" butonu
$("#backFromStep1").addEventListener("click", () => {
  resetApp(1);
  toast("Sıfırlandı");
});

// Adım 2'deki geri butonu: adım 1'e döner
$("#backToStep1").addEventListener("click", () => {
  setStep(1);
});

// Adım 3'teki geri butonu: aynı modda giriş ekranına döner
$("#backToStep2FromResult").addEventListener("click", () => {
  if (wizardMode === "bulk") {
    $("#step2Title").textContent = "Toplu E-posta Gir";
    $("#singleInputGroup").classList.add("d-none");
    $("#bulkInputGroup").classList.remove("d-none");
  } else {
    $("#step2Title").textContent = "Tek E-posta Gir";
    $("#singleInputGroup").classList.remove("d-none");
    $("#bulkInputGroup").classList.add("d-none");
  }
  setStep(2);
});

// Adım 3'teki "Tek E-posta Maskele" butonu
$("#repeatSingle").addEventListener("click", () => {
  wizardMode = "single";
  $("#step2Title").textContent = "Tek E-posta Gir";
  $("#singleInputGroup").classList.remove("d-none");
  $("#bulkInputGroup").classList.add("d-none");
  $("#emailInput").value = "";
  $("#emailInput").focus();
  setStep(2);
});

// Adım 3'teki "Toplu Maskele" butonu
$("#repeatBulk").addEventListener("click", () => {
  wizardMode = "bulk";
  $("#step2Title").textContent = "Toplu E-posta Gir";
  $("#singleInputGroup").classList.add("d-none");
  $("#bulkInputGroup").classList.remove("d-none");
  $("#bulkInput").value = "";
  $("#bulkInput").focus();
  setStep(2);
});

// Adım 3'teki "En Baştan Başla" butonu
$("#restart").addEventListener("click", () => {
  resetApp(1);
  toast("Baştan başlandı");
});

// ============ MOD PİLLERİ ============

$$("#modes .mode-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    $$("#modes .mode-pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    modeSingle = pill.dataset.mode;
  });
});

$$("#modesBulk .mode-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    $$("#modesBulk .mode-pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    modeBulk = pill.dataset.mode;
  });
});

// ============ ADIM 2: TEK MAİL İŞLEME ============

$("#singleSubmit").addEventListener("click", () => {
  const email = $("#emailInput").value.trim();
  if (!email) return toast("Lütfen bir e-posta gir");

  const masked = maskEmail(email, modeSingle);
  if (!masked) return toast("Geçersiz e-posta adresi");

  lastResults = [{ original: email, masked }];
  currentItems = [{ original: email, masked }];

  renderResults();
  addHistory(email, masked);
  renderQRs();
  setStep(3);
});

// ============ ADIM 2: TOPLU MAİL İŞLEME ============

$("#bulkSubmit").addEventListener("click", () => {
  const raw = $("#bulkInput").value;

  const list = raw.split(/[\n,;]+/).map((s) => s.trim()).filter(Boolean);
  if (!list.length) return toast("Liste boş");

  const results = [];
  let invalid = 0;
  list.forEach((mail) => {
    const masked = maskEmail(mail, modeBulk);
    if (masked) {
      results.push({ original: mail, masked });
      addHistory(mail, masked);
    } else {
      invalid++;
    }
  });

  if (!results.length) return toast("Hiç geçerli adres yok");
  lastResults = results;
  currentItems = results;

  renderResults();
  renderQRs();
  setStep(3);

  if (invalid) toast(`${results.length} işlendi, ${invalid} geçersiz`);
  else toast(`${results.length} adres maskelendi`);
});

// ============ ADIM 3: SONUÇLARI ÇİZME ============

function renderResults() {
  const area = $("#resultsArea");
  area.innerHTML = "";

  lastResults.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `
      <div class="flex-grow-1">
        <span class="orig-email">${escapeHtml(r.original)}</span>
        <span>${escapeHtml(r.masked)}</span>
      </div>
      <button class="copy-btn" data-index="${i}" title="Kopyala">
        <i class="bi bi-clipboard"></i>
      </button>
    `;
    area.appendChild(div);
  });

  $$(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const idx = Number(btn.dataset.index);
      await navigator.clipboard.writeText(lastResults[idx].masked);
      toast("✓ Kopyalandı");
    });
  });
}

// XSS koruması için HTML kaçışı
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Tümünü kopyala butonu
$("#copyAllBtn").addEventListener("click", async () => {
  if (!lastResults.length) return toast("Kopyalanacak sonuç yok");
  const text = lastResults.map((r) => r.masked).join("\n");
  await navigator.clipboard.writeText(text);
  toast("✓ Tümü kopyalandı");
});

// ============ GEÇMİŞ + LOCALSTORAGE ============

const HISTORY_KEY = "mask_history_v2";
let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");

function addHistory(original, masked) {
  if (history.some((h) => h.original === original && h.masked === masked)) return;
  history.unshift({ original, masked, date: new Date().toISOString() });
  history = history.slice(0, 50);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const list = $("#historyList");
  $("#historyCount").textContent = history.length;

  if (!history.length) {
    list.innerHTML = '<p class="text-muted small text-center py-3">Henüz kayıt yok.</p>';
    return;
  }

  list.innerHTML = history
    .map((h) => `
      <div class="history-item">
        <span class="text-truncate me-2">${escapeHtml(h.masked)}</span>
        <span class="text-muted small text-nowrap">
          ${new Date(h.date).toLocaleDateString("tr-TR")}
        </span>
      </div>
    `)
    .join("");
}

$("#exportCsv").addEventListener("click", () => {
  if (!history.length) return toast("Geçmiş boş");
  const rows = [["original", "masked", "date"], ...history.map((h) => [h.original, h.masked, h.date])];
  const csv = rows.map((r) => r.map((v) => `"${v}"`).join(",")).join("\n");
  download("mask-history.csv", "\uFEFF" + csv, "text/csv;charset=utf-8");
});

$("#exportJson").addEventListener("click", () => {
  if (!history.length) return toast("Geçmiş boş");
  download("mask-history.json", JSON.stringify(history, null, 2), "application/json");
});

$("#clearHistory").addEventListener("click", () => {
  if (!history.length) return toast("Geçmiş zaten boş");
  if (!confirm("Tüm geçmiş silinsin mi? Bu işlem geri alınamaz.")) return;
  history = [];
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
  toast("✓ Geçmiş temizlendi");
});

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  toast("✓ İndirildi");
}

// ============ QR KOD (Kaydırıcılı + Çoklu) ============

function getQrTexts() {
  if (!currentItems.length) return [];
  return currentItems.map((it) => (qrShowMasked ? it.masked : it.original));
}

function renderQRs() {
  const container = $("#qrContainer");
  container.innerHTML = "";

  const texts = getQrTexts();
  const dlBtn = $("#downloadQrBtn");

  if (!texts.length) {
    container.innerHTML = `
      <div class="qr-box mx-auto" id="qrPlaceholder">
        <span class="text-muted small">QR burada</span>
      </div>`;
    dlBtn.disabled = true;
    return;
  }

  if (typeof QRCode === "undefined") {
    dlBtn.disabled = true;
    return;
  }

  texts.forEach((text, i) => {
    const item = document.createElement("div");
    item.className = "qr-item";

    const box = document.createElement("div");
    box.className = "qr-box";
    box.dataset.qrIndex = i;

    const label = document.createElement("span");
    label.className = "qr-label";
    label.textContent = text;
    label.title = text;

    const dl = document.createElement("button");
    dl.className = "btn btn-outline-secondary btn-sm qr-dl-btn";
    dl.innerHTML = '<i class="bi bi-download"></i>';
    dl.dataset.qrIndex = i;
    dl.title = "Bu QR'ı PNG indir";

    item.appendChild(box);
    item.appendChild(label);
    item.appendChild(dl);
    container.appendChild(item);

    new QRCode(box, {
      text,
      width: 120,
      height: 120,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M,
    });
  });

  dlBtn.disabled = false;

  $$(".qr-dl-btn").forEach((btn) => {
    btn.addEventListener("click", () => downloadQrByIndex(Number(btn.dataset.qrIndex)));
  });
}

function downloadQrByIndex(index) {
  const box = document.querySelector(`.qr-box[data-qr-index="${index}"]`);
  if (!box) return;
  const canvas = box.querySelector("canvas");
  const img = box.querySelector("img");

  let dataUrl;
  if (canvas) {
    dataUrl = canvas.toDataURL("image/png");
  } else if (img) {
    const tmp = document.createElement("canvas");
    tmp.width = img.width || 120;
    tmp.height = img.height || 120;
    tmp.getContext("2d").drawImage(img, 0, 0);
    dataUrl = tmp.toDataURL("image/png");
  } else {
    return toast("QR henüz hazır değil");
  }

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `qr-${index + 1}-${qrShowMasked ? "maskeli" : "maskesiz"}.png`;
  a.click();
  toast("✓ QR PNG indirildi");
}

$("#downloadQrBtn").addEventListener("click", () => {
  const count = $$(".qr-box[data-qr-index]").length;
  if (!count) return toast("QR hazır değil");
  for (let i = 0; i < count; i++) {
    setTimeout(() => downloadQrByIndex(i), i * 250);
  }
  toast(count > 1 ? `${count} QR indiriliyor…` : "✓ QR indirildi");
});

$("#qrModeSwitch").addEventListener("change", (e) => {
  qrShowMasked = e.target.checked;

  $("#labelUnmasked").classList.toggle("text-muted", qrShowMasked);
  $("#labelMasked").classList.toggle("text-muted", !qrShowMasked);

  $("#qrModeHint").innerHTML = qrShowMasked
    ? 'Şu an: <strong>maskelenmiş</strong> adres'
    : 'Şu an: <strong>maskelenmemiş</strong> adres';

  renderQRs();
});

// ============ TEMA ============

const THEME_KEY = "mask_theme_v2";
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  $("#themeToggle").innerHTML = theme === "dark"
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-stars"></i>';
  localStorage.setItem(THEME_KEY, theme);
}

$("#themeToggle").addEventListener("click", () => {
  const current = root.getAttribute("data-bs-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

// ============ BAŞLANGIÇ ============

applyTheme(localStorage.getItem(THEME_KEY) || "light");
renderHistory();
renderQRs();
setStep(1);