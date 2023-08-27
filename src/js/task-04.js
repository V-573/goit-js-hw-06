const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

let counterValue = 0;

function updateCounter(value) {
    counterValue = value;
    valueElement.textContent = counterValue;

}

decrementButton.addEventListener('click', () => {
    updateCounter(counterValue - 1);
});

incrementButton.addEventListener('click', () => {
    updateCounter(counterValue + 1);
});

updateCounter(counterValue);

