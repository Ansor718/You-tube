let elMenyu = document.querySelector(".menyu");
let sideBar = document.querySelector(".sidebar");
let heroUl = document.querySelector(".hero-ul");
let login = document.querySelector(".login");
let modal = document.querySelector(".modal");
let elClose = document.querySelector(".close");
let modalContent = document.querySelector(".modal_content");

elMenyu.addEventListener("click", function () {
  sideBar.classList.toggle("svag");
  heroUl.classList.toggle("goss");
});

login.addEventListener("click", function () {});

login.onclick = function () {
  modal.style.display = "block";
};

elClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal || e.target === elClose) {
    modal.style.display = "none";
  }
};
