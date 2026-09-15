"use strict";

// ★ LINE公式の「友だち追加URL」をここに設定。すべてのCTAに反映します。
// 例: LINE_URL: "https://lin.ee/実際のID"
const CONFIG = Object.freeze({ LINE_URL: "https://lin.ee/rs66ISnG" });

const notice = document.querySelector("#line-notice");
document.querySelectorAll("[data-line-link]").forEach((link) => {
  let valid = false;
  try { valid = new URL(CONFIG.LINE_URL).protocol === "https:"; } catch { /* 未設定時は案内を表示 */ }
  if (valid) {
    link.href = CONFIG.LINE_URL;
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      notice.hidden = false;
      notice.focus({ preventScroll: true });
      notice.scrollIntoView({ block: "center", behavior: "instant" });
    });
  }
});

