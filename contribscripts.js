var slideIndex = 0;
var slideIndex1 = 0;

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
