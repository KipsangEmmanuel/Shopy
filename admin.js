// attach data from the db
function displayProduct() {
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
    tableRow.querySelector("#edit").addEventListener('click', () => {
        // updatePrice(product.id)
    })

    tableRow.querySelector("#delete").addEventListener('click', () => {
        tableRow.remove()
        //deleteRecord(product.id)
    })
}
