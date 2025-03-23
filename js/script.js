//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika isi menu di klik
document.querySelector("#isi-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const isi = document.querySelector("#isi-menu");

document.addEventListener("click", function (e) {
  if (!isi.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
