var slideIndex = 0;
var slideIndex1 = 0;
var slideIndex3 = 0;

function inProgress() {
  alert("We are currently creating this website! Send us an email to learn more about our progress: mastheaddevs@gmail.com");
}

function textCarousel() {
  var i;
  var x = document.getElementsByClassName("myParas");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(textCarousel, 4000); // set duration in ms
}

function carousel() {
  var u;
  var y = document.getElementsByClassName("mySlides");
  for (u = 0; u < y.length; u++) {
    y[u].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > y.length) {slideIndex1 = 1}
  y[slideIndex1-1].style.display = "block";
  setTimeout(carousel, 4000); // set duration in ms
}

var slideIndex2 = 1;
showSlides(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  var w;
  var slides = document.getElementsByClassName("newsCard");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (w = 0; w < slides.length; w++) {
      slides[w].style.display = "none";
  }
  for (w = 0; w < dots.length; w++) {
      dots[w].className = dots[w].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}

/*

function inProgress() {
  alert("We are currently creating this website! Send us an email to learn more about our progress: mastheaddevs@gmail.com");
}

*/

function riggingTextCarousel() {
  var p;
  var z = document.getElementsByClassName("coSlides");
  for (p = 0; p < z.length; p++) {
    z[p].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > z.length) {slideIndex3 = 1}
  z[slideIndex3-1].style.display = "block";
  setTimeout(riggingTextCarousel, 4000); // set duration in ms
}
