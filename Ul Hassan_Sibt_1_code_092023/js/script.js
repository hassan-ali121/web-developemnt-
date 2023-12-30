let slideIndex = 0;
let slideInterval;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment index and show the next slide
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset index if it exceeds the number of slides
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  clearInterval(slideInterval); // Stop automatic slideshow when navigating manually
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  clearInterval(slideInterval); // Stop automatic slideshow when navigating manually
  showSlide((slideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function pauseSlides() {
  clearInterval(slideInterval);
}

function playSlides() {
  slideInterval = setInterval(showSlides, 2000); // Adjust timing as needed
}
let isPlaying = true;

function togglePlayPause() {
  const playPauseButton = document.querySelector(".play-pause");

  if (isPlaying) {
    playPauseButton.innerHTML = "&#9658;"; // Pause symbol

    pauseSlides();
  } else {
    playPauseButton.innerHTML = "&#10074;&#10074;"; // Play symbol
    playSlides();
  }

  isPlaying = !isPlaying;
}

// Call the function to start the slideshow
showSlides();
