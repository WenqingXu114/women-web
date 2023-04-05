// get the image element
const image = document.querySelector('.hero');

// add a click event listener to the image element
image.addEventListener('click', function() {
  // generate a random color value
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  // set the filter property with the random color value
  image.style.filter = `hue-rotate(${randomColor}deg)`;
});