// Initialize slideIndex to 1
let slideIndex = 1;

// Call the showSlides function with the initial slideIndex
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  // Call showSlides and update slideIndex by n
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  // Call showSlides and set slideIndex to n
  showSlides((slideIndex = n));
}

// Main function to display slides
function showSlides(n) {
  let i;
  // Get all elements with the class "myProjects" (slides)
  let slides = document.getElementsByClassName("myProjects");
  // Get all elements with the class "dot" (thumbnail indicators)
  let dots = document.getElementsByClassName("dot");

  // Check if n is greater than the total number of slides
  if (n > slides.length) {
    // If true, set slideIndex to 1 (restart the slideshow)
    slideIndex = 1;
  }
  // Check if n is less than 1
  if (n < 1) {
    // If true, set slideIndex to the last slide
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Add the "active" class to the dot corresponding to the current slide
  dots[slideIndex - 1].className += " active";
}
