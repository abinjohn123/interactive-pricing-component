const priceSlider = document.querySelector('#price-slider');
const sliderProgressEl = document.querySelector('.slider-bar.--progress');
const discountTagEl = document.querySelector('.discount-tag');

const pageViewsEl = document.querySelector('.pageviews');
const priceEl = document.querySelector('.price-value');
const monthYearEl = document.querySelector('.price-range');
const subscriptionType = document.querySelector('#sub-choice');

const pricingOptions = {
  0: {
    pageviews: '10K',
    price: 8,
  },
  25: {
    pageviews: '50K',
    price: 12,
  },
  50: {
    pageviews: '100K',
    price: 16,
  },
  75: {
    pageviews: '500K',
    price: 24,
  },
  100: {
    pageviews: '1M',
    price: 36,
  },
};

function updateDOM() {
  const sliderValue = Number.parseInt(priceSlider.value);
  const { pageviews, price } = pricingOptions[sliderValue];
  pageViewsEl.innerText = `${pageviews} PAGEVIEWS`;

  priceEl.innerText = `$${price.toFixed(2)}`;
}

function sliderChangeHandler(e) {
  // update slider color
  const sliderValue = Number.parseInt(e.target.value);
  sliderProgressEl.style.width = `${
    sliderValue < 10 ? sliderValue + 3 : sliderValue
  }%`;

  sliderProgressEl.style.backgroundColor =
    sliderValue === 100 ? 'hsl(174, 86%, 45%)' : 'hsl(174, 77%, 80%)';

  // Update DOM
  updateDOM();
}

function responsiveDesign() {
  if (window.innerWidth > 500) {
    discountTagEl.innerText = '25% discount';
  } else {
    discountTagEl.innerText = '-25%';
  }
}

priceSlider.addEventListener('input', sliderChangeHandler);
addEventListener('resize', responsiveDesign);

// init
responsiveDesign();
