// window.addEventListener("scroll", () => {
//   console.log("Бет айналдырылды");
// });
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector("arrow");

  window.addEventListener("scroll", () => {
    console.log("scrolled");
    if (window.scrollY > 500) {
      arrow.style.transform = "transLateX(0)";
    } else {
      arrow.style.transform = "transLateX(-100px)";
    }
  });
});
