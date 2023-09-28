import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInp = getElement(".price-filter");
  const priceVal = getElement(".price-value");

  let mxPrice = store.map((product) => product.price);

  mxPrice = Math.max(...mxPrice);
  mxPrice = Math.ceil(mxPrice / 100);

  priceInp.value = mxPrice;
  priceInp.max = mxPrice;
  priceInp.min = 0;

  priceVal.textContent = `Value : $${mxPrice}`;

  priceInp.addEventListener("input", function () {
    const value = parseInt(priceInp.value);

    priceVal.textContent = `Value : $${value}`;

    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement(".products-container"), true);

    if (newStore.length < 1) {
      const products = getElement(".products-container");

      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
