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
