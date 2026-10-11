const button = document.getElementById('change-color');
const colorValue = document.getElementById('color-value');
let currentColor = '#DCEBFF';

button.addEventListener('click', () => {
  let nextColor;
  do {
    nextColor = '#' + Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();
  } while (nextColor === currentColor);

  currentColor = nextColor;
  document.body.style.backgroundColor = nextColor;
  colorValue.textContent = nextColor;
});
