const priceSlider = document.getElementById('price-slider');
const sliderProgressEl = document.querySelector('.slider-bar.--progress');

function sliderChangeHandler(e) {
  const sliderValue = Number.parseInt(e.target.value);
  sliderProgressEl.style.width = `${
    sliderValue < 10 ? sliderValue + 3 : sliderValue
  }%`;

  sliderProgressEl.style.backgroundColor =
    sliderValue === 100 ? 'hsl(174, 77%, 80%)' : 'hsl(174, 86%, 45%)';
}

priceSlider.addEventListener('input', sliderChangeHandler);
