function displayProduct(product) {
    let card = document.createElement("li")
    card.className = "card col-2 p-0 m-2"
    card.innerHTML = `
    <img src="${product.image}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <h6 class="card-title">Ksh: ${product.price}</h6>
        <a href="#" class="btn">Add to Cart</a>
    </div>
    `
    document.querySelector("#item-list").append(card)
}

//fetch 
//GET request

//POST create
//DELETE
//UPDATE

function fetchProducts() {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then((products) => {
        products.forEach((product) =>{
            displayProduct(product)
        })
    })
}
fetchProducts()