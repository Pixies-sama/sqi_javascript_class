let productDetails = document.getElementById('productDetails');

let params = new URLSearchParams(window.location.search);

let id = params.get('id');

let product = clothingProducts.find((item) => item.id == id);
// let product = clothingProducts[id];

productDetails.innerHTML = `
    <div class="product-details-card">

        <img src="${product.imageUrl}" alt="${product.name}">

        <h1>${product.name}</h1>

        <p>${product.description}</p>

        <p>Category: ${product.category}</p>

        <p>Price: $${product.price} USD</p>

    </div>
`;

let backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
    window.location.href = 'products.html';
});

