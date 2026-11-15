// MonteKey トップページ試作：メニューの開閉、ヘッダーの境界線、フォームの試作用の動き

(function () {
  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  // スマホのメニュー開閉
  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // スクロールしたらヘッダーの下に線を出す
  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // 試作なのでフォームは送信しない。入力チェックだけ通して、その旨を表示する
  // （フォームがないページでは何もしない）
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.hidden = false;
    });
  }
})();
