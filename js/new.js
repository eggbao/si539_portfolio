var wrapperMenu = document.querySelector(".wrapper-menu");
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var scrollbutton = document.querySelector(".scroll-to-top");
var body = document.querySelector("body");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  if (wrapperMenu.classList.contains("open")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

document.querySelectorAll("li").forEach((li) => {
  if (li.innerHTML === "UI Design" || li.innerHTML === "Figma") {
    li.style.backgroundColor = "#EB52B830";
    li.style.borderColor = "#EB52B8";
  } else if (li.innerHTML === "User Research" || li.innerHTML === "Miro") {
    li.style.backgroundColor = "#21AECF30";
    li.style.borderColor = "#21AECF";
  } else if (li.innerHTML === "Branding" || li.innerHTML === "Photoshop") {
    li.style.backgroundColor = "#A566F230";
    li.style.borderColor = "#A566F2";
  } else if (
    li.innerHTML === "Visual Design" ||
    li.innerHTML === "Google Drive"
  ) {
    li.style.backgroundColor = "#6BC92630";
    li.style.borderColor = "#6BC926";
  } else if (li.innerHTML === "User Flows" || li.innerHTML === "Blender") {
    li.style.backgroundColor = "#e69a2730";
    li.style.borderColor = "#e8a126ff";
  } else if (li.innerHTML === "Interaction Design" || li.innerHTML === "Google Forms") {
    li.style.backgroundColor = "#3adcb130";
    li.style.borderColor = "#16c28cff";
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

scrollbutton.addEventListener("click", function () {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
if (document.querySelector(".logo")) {
  document.querySelector(".logo").addEventListener("click", function () {
    this.classList.toggle("animate");
  });
}

document
  .querySelector(".dark-mode-button")
  .addEventListener("click", function () {
    console.log("Button text:", JSON.stringify(this.innerHTML));
    if (this.innerHTML == "dark_mode") {
      this.innerHTML = "light_mode";
      this.style.backgroundColor = "#ebd547ff";
      this.style.borderColor = "#e9ae30ff";
      this.classList.add("dark-font");
      body.classList.add("dark-mode");
    } else {
      this.innerHTML = "dark_mode";
      this.style.backgroundColor = "#294724";
      this.style.borderColor = "#243f1e";
      this.classList.remove("dark-font");
      body.classList.remove("dark-mode");
    }
  });
