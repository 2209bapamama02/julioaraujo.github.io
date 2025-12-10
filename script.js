// JavaScript untuk Toggle Halaman
const navbarItems = document.querySelectorAll(".navbar-item");
const pages = document.querySelectorAll(".page");

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Hapus active dari semua
    navbarItems.forEach((i) => i.classList.remove("active"));
    pages.forEach((p) => p.classList.remove("active"));

    // Tambah active ke yang diklik
    item.classList.add("active");
    const pageId = item.getAttribute("data-page");
    document.getElementById(pageId).classList.add("active");
  });
});
