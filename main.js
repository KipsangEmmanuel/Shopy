function displayProduct(product) {
    let card = document.createElement("li")
    card.className = "card col-2 m-2"
    card.innerHTML = `
    <img src="${product.image}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <h6 class="card-title">
            Ksh:<span>${product.price}</span>
        </h6>
        <a class="btn btn-primary">Buy</a>
    </div>
    `
    //add the card to the DOM
    document.querySelector("#item-list").append(card)
}

//fetch product data
function getProducts() {
    fetch(" http://localhost:3000/products")
    .then(res => res.json())
    .then((products) => {
        // console.log(products)
        products.forEach((product) => {
            displayProduct(product)
        })
    })
}
getProducts()