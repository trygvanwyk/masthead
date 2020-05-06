var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // set duration in ms
}

var slideIndex = 0;

function textCarousel() {
  var i;
  var x = document.getElementsByClassName("coverParagraph");
  for (i = 0; q < x.length; i++) {
    x[q].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // set duration in ms
}
