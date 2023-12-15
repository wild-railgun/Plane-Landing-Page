function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const questionBox = document.getElementsByClassName("question_box");

for (let i = 0; i < questionBox.length; i++) {
  questionBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
