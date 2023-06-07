var slideIndex = 1;
showImage(slideIndex);

function prevImage() {
  showImage((slideIndex -= 1));
}

function nextImage() {
  showImage((slideIndex += 1));
}

function showImage(n) {
  var images = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
  if (n > images.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = images.length;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[slideIndex - 1].style.display = "block";
}
