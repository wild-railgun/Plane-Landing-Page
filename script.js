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

/*
function toggleStyles(){
  let bookingNav = document.getElementsByClassName("booking_nav");
  let spanElements = bookingNav.getElementsByTagName("span");
  
  for (var i = 0; i < spanElements.length; i++) {
    var currentSpan = spanElements[i];
    
    currentSpan.classList.toggle("clicked");
  }
}
*/

/*
function toggleStyles() {
  let element = document.getElementById("myDiv");

  // Check if the element exists
  if (element) {
    let spanElements = element.getElementsByTagName("span");

    for (let i = 0; i < spanElements.length; i++) {
      var currentSpan = spanElements[i];
      currentSpan.classList.toggle("clicked");
    }
  } else {
    console.error("Element with ID 'myDiv' not found.");
  }
}
*/

function toggleStyles(clickedElement) {
  let element = document.getElementById("myDiv");

  // Check if the element exists
  if (element) {
      let spanElements = element.getElementsByTagName("span");

      // Reset style for all span elements
      for (let i = 0; i < spanElements.length; i++) {
          spanElements[i].classList.remove("clicked");
      }

      // Apply the 'clicked' class only to the clicked span element
      clickedElement.classList.add("clicked");
  } else {
      console.error("Element with ID 'myDiv' not found.");
  }
}