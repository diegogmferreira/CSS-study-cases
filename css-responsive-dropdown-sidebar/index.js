let arrows = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("show-menu");
  });
};

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})



