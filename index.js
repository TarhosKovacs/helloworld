let text = document.getElementById('text');
let moon = document.getElementById('moon');
let header = document.querySelector('header');
let scene = document.querySelector('scene');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * 1.05 + 'px';
    moon.style.marginLeft = value * 4.5 + 'px';
    text.style.marginRight = value * 6 + 'px';
    text.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 +'px';
    scene.style.top = value * 0.1 + 'px';
});

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card2 = document.querySelector(".card__inner2");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector(".card__inner3");

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector(".card__inner4");

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped');
});

const card5 = document.querySelector(".card__inner5");

card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped');
});

const card6 = document.querySelector(".card__inner6");

card6.addEventListener("click", function (e) {
  card6.classList.toggle('is-flipped');
});

const card7 = document.querySelector(".card__inner7");

card7.addEventListener("click", function (e) {
  card7.classList.toggle('is-flipped');
});