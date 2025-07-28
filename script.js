let dessertList = document.querySelector(".dessert-list");


fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${item.image.desktop}" alt="${item.name}">
        <button>
          <img src="assets/images/icon-add-to-cart.svg" alt="add to cart">
          Add to Cart
        </button>
        <p>${item.category}</p>
        <h2>${item.name}</h2>
        <p>$ ${item.price}</p>
      `;
      dessertList.appendChild(card);

      let order = card.querySelector("button");
      order.addEventListener("click", function() {
        document.querySelector(".total").classList.add("show");
        document.querySelector(".carbon-neutral").classList.add("show");
        document.querySelector("section button").classList.add("show");
        document.querySelector(".orderedItem img").classList.add("hide")
        document.querySelector(".orderedItem>p").classList.add("hide")
      });
    });
  });