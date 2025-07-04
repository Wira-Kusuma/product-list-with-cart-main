let dessertList = document.querySelector(".dessert-list");

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
        let name = item.name;
        let category = item.category;
        let price = item.price;
        let img = item.image.desktop;
        console.log(name);
        console.log(category);
        console.log(price);
        console.log(img);

        const card = document.createElement("div");
        card.classList.add("card")
        card.innerHTML = `
        <img src="${img}" alt=$"name">
        <p>${category}</p>
        <h2>${name}</h2>
        <p>$ ${price}</p>
        `;
        dessertList.appendChild(card);
    });
  });
