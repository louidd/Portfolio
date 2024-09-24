let pname = document.getElementById("pname");
let price = document.getElementById("price");
let qty = document.getElementById("qty");
let desc = document.getElementById("desc");
let images = document.getElementById("images");
let submit = document.getElementById("submit");
let products_content = document.getElementById("products_content");
let currentEditIndex = -1; // Track index for editing

let products = JSON.parse(localStorage.getItem("products")) || []; 

submit.addEventListener("click", function() {
    if (images.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function() {
            let product = {
                product_name: pname.value,
                product_price: price.value,
                product_qty: qty.value,
                product_desc: desc.value,
                total: (price.value * qty.value).toFixed(2),
                image: reader.result 
            };

            if (currentEditIndex > -1) {
                products[currentEditIndex] = product; // Edit existing
                currentEditIndex = -1; // Reset index
            } else {
                products.push(product); // Add new product
            }

            localStorage.setItem("products", JSON.stringify(products)); 
            renderProducts();
            clearInputs();
        };
        reader.readAsDataURL(images.files[0]);
    } else {
        alert("Please select an image.");
    }
});

function renderProducts() {
    products_content.innerHTML = products.map((product, i) => `
        <tr>
            <td>${i + 1}</td>
            <td><img src="${product.image}" style="width: 100px; height: 100px;"></td>
            <td>${product.product_name}</td>
            <td>${product.product_price}</td>
            <td>${product.product_qty}</td>
            <td>${product.total}</td>
            <td>
                <button onclick="viewProduct(${i})">View</button>
                <button onclick="editProduct(${i})">Edit</button>
                <button onclick="deleteProduct(${i})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function viewProduct(index) {
    const product = products[index];
    const params = new URLSearchParams({
        name: product.product_name,
        image: product.image,
        price: product.product_price,
        qty: product.product_qty,
        total: product.total
    });
    window.location.href = `viewP.html?${params.toString()}`;
}

function editProduct(index) {
    let product = products[index];
    pname.value = product.product_name;
    price.value = product.product_price;
    qty.value = product.product_qty;
    desc.value = product.product_desc;
    currentEditIndex = index; // Set index for editing
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products)); 
        renderProducts(); 
    }
}

function clearInputs() {
    pname.value = "";
    price.value = "";
    qty.value = "";
    desc.value = "";
    images.value = "";
}

renderProducts();
