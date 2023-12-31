import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];

  const companiesCat = getElement(".companies");

  companiesCat.innerHTML = companies
    .map((company) => {
      return `<button class="company-link">${company}</button>`;
    })
    .join("");

  companiesCat.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("company-btn")) {
      let newStore = [];

      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      display(newStore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
