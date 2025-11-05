// Menunggu sampai semua konten halaman dimuat
window.addEventListener("DOMContentLoaded", (event) => {
  // 1. Pilih elemen header
  const header = document.querySelector("header");

  // 2. Buat fungsi untuk 'mengecek' scroll
  const handleScroll = () => {
    // Cek jika posisi scroll lebih dari 10px dari atas
    if (window.scrollY > 10) {
      // Jika ya, tambahkan class 'header-scrolled'
      header.classList.add("header-scrolled");
    } else {
      // Jika tidak (kembali ke atas), hapus class 'header-scrolled'
      header.classList.remove("header-scrolled");
    }
  };

  // 3. 'Dengarkan' event scroll dan jalankan fungsi di atas
  window.addEventListener("scroll", handleScroll);
});

// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const navContainer = document.querySelector(".nav-container");

menuToggle.addEventListener("click", () => {
  navContainer.classList.add("active");
  menuToggle.classList.add("hidden"); // Hide hamburger
});

menuClose.addEventListener("click", () => {
  navContainer.classList.remove("active");
  menuToggle.classList.remove("hidden"); // Show hamburger
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-container ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.classList.remove("active");
    menuToggle.classList.remove("hidden"); // Show hamburger
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navContainer.contains(e.target) && !menuToggle.contains(e.target)) {
    navContainer.classList.remove("active");
    menuToggle.classList.remove("hidden");
  }
});
