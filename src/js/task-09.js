const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener('click', () => {
  
  const randonColor = getRandomHexColor();

  document.body.style.backgroundColor = randonColor;
  colorSpan.textContent = randonColor;


});


