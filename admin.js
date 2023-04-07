// attach data from the db
function displayProducts(product) {
    let tableRow = document.createElement("tr")
    tableRow.id = "table-row"
    tableRow.innerHTML = `
    <th scope="row">${product.id}</th>
    <td>${product.title}</td>
    <td>${product.description}</td>
    <td>${product.image}</td>
    <td>${product.price}</td>
    <td><button class="btn" id="edit">Edit</button></td>
    <td><button class="btn btn-light" style="background-color: red;" id="delete">Delete</button></td>
    `
    document.querySelector('#table-body').append(tableRow)
}

// fetching data from the db
function fetchProduct() {
    fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then(products => 
        products.forEach((product) => {
            displayProducts(product)
        }))
}
fetchProduct()

// function to collect the form data
function collectFormData () {
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = {
            title: e.target.name.value,
            image: e.target.name.value,
            description: e.target.name.value
        }
        console.log(formData)
    })
}
collectFormData();