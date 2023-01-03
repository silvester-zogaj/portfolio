"use strict";

const navLinks = document.querySelectorAll(".nav__list--link");
const navUnderline = document.querySelectorAll(".nav__list li div");

const projects = document.getElementById("projects");
const aboutMe = document.getElementById("about-me");

const aboutMeContainer = document.querySelector(".about-me__container");
const aboutMeImgContainer = document.querySelector(".about-me__img-container");

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    for (let x = 0; x < navLinks.length; x++) {
      navUnderline[x].classList.remove("underline");
    }
    navUnderline[i].classList.add("underline");
  });
}

link1.addEventListener("click", function () {
  aboutMe.style.display = "none";
  projects.style.display = "grid";
  projects.style.animation = "fade 1s forwards";
});

link2.addEventListener("click", function () {
  projects.style.display = "none";
  aboutMe.style.display = "block";
  aboutMe.style.animation = "fade 1s forwards";
});
