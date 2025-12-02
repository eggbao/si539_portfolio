var wrapperMenu = document.querySelector(".wrapper-menu");
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var scrollbutton = document.querySelector(".scroll-to-top");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  if (wrapperMenu.classList.contains("open")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

document.querySelectorAll("li").forEach((li) => {
  if (li.innerHTML === "UI Design") {
    li.style.backgroundColor = "#EB52B830";
    li.style.borderColor = "#EB52B8";
  } else if (li.innerHTML === "User Research") {
    li.style.backgroundColor = "#21AECF30";
    li.style.borderColor = "#21AECF";
  } else if (li.innerHTML === "Branding") {
    li.style.backgroundColor = "#A566F230";
    li.style.borderColor = "#A566F2";
  } else if (li.innerHTML === "Visual Design") {
    li.style.backgroundColor = "#6BC92630";
    li.style.borderColor = "#6BC926";
  }
});

// scroll code taken from from w3schools and edited
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollbutton.addEventListener("click", function () {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
});
