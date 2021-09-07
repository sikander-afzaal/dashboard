const btn = document.querySelector(".status-btn");
const btnClose = document.querySelector(".fa-times");
const btnConfirm = document.querySelector(".confirm");
btn.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("open-modal");
  document.querySelector(".overlay").classList.add("open-overlay");
});
btnClose.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("open-modal");
  document.querySelector(".overlay").classList.remove("open-overlay");
});
btnConfirm.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("open-modal");
  document.querySelector(".overlay").classList.remove("open-overlay");
});
