import { formatPrice } from "./utils.js";

const display = (products, element, filters) => {
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;

      return `<article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="prouct-price">${formatPrice(price)}</h4>
          </footer>
        </article>`;
    })
    .join("");

  if (filters) return;

  element.addEventListener("click", function (e) {
    const prnt = e.target.parentElement;

    if (prnt.classList.contains("product-cart-btn")) {
      addToCart(prnt.dataset.id);
    }
  });
};

export default display;
