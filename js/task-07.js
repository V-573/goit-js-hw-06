const inputFontSize = document.getElementById('font-size-control');
const textFontSize = document.getElementById('text');

inputFontSize.addEventListener('input', () => {
    const fontSize = inputFontSize.value + 'px';
    textFontSize.style.fontSize = fontSize;


});