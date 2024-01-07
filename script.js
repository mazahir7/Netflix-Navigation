"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", function () {

  nav.forEach(nav => nav.classList.add("visible"));
});

closeBtn.addEventListener("click", function () {
  nav.forEach(nav => nav.classList.remove("visible"));
});