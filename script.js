const priceSlider = document.getElementById('price-slider');
const sliderProgressEl = document.querySelector('.slider-bar.--progress');
const discountTagEl = document.querySelector('.discount-tag');

function sliderChangeHandler(e) {
  const sliderValue = Number.parseInt(e.target.value);
  sliderProgressEl.style.width = `${
    sliderValue < 10 ? sliderValue + 3 : sliderValue
  }%`;

  //   update slider color
  sliderProgressEl.style.backgroundColor =
    sliderValue === 100 ? 'hsl(174, 77%, 80%)' : 'hsl(174, 86%, 45%)';
}

function responsiveDesign() {
  console.log(window.innerWidth);
  if (window.innerWidth > 500) {
    discountTagEl.innerText = '25% discount';
  } else {
    discountTagEl.innerText = '-25%';
  }
}

priceSlider.addEventListener('input', sliderChangeHandler);
addEventListener('resize', responsiveDesign);

console.log(window.innerWidth);
