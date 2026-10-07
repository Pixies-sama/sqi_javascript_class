let baseUrl = "https://dummyjson.com";

let display = document.getElementById("display");

const getAllProducts = async () => {

    try {

        let response = await fetch(`${baseUrl}/products`);

        let data = await response.json();

        let allProducts = data.products;

        console.log(allProducts);

        displayProducts(allProducts);

    } catch (error) {

        console.log(error.message);

    }

};


function displayProducts(products) {

    products.forEach(product => {

        let card = document.createElement("div");

        card.classList.add("cardBox");

        card.innerHTML = `

            <div class="image-container">
                <img 
                    src="${product.thumbnail}" 
                    alt="${product.title}" 
                    class="img"
                >
            </div>

            <div class="product-content">

                <h1 class="card-title">
                    ${product.title}
                </h1>

                <p class="description">

                    <span class="short">
                        ${product.description.substring(0, 100)}...
                    </span>

                    <span 
                        class="long" 
                        style="display:none;"
                    >
                        ${product.description}
                    </span>

                </p>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    $${product.price} USD
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                </p>

                <p class="tags">
                    ${product.tags ? product.tags.join(", ") : "No tags"}
                </p>

                <div class="buttons">

                    <button class="btn">
                        Read More
                    </button>

                    <button class="cart-button">
                        Add to Cart
                    </button>

                </div>

            </div>
        `;

        display.appendChild(card);


        // Read More elements

        let getShortDescription =
            card.querySelector(".short");

        let getLongDescription =
            card.querySelector(".long");

        let btn =
            card.querySelector(".btn");


        btn.addEventListener("click", () => {

            if (btn.textContent === "Read More") {

                btn.textContent = "Read Less";

                getShortDescription.style.display = "none";

                getLongDescription.style.display = "inline";

            } else {

                btn.textContent = "Read More";

                getShortDescription.style.display = "inline";

                getLongDescription.style.display = "none";

            }

        });


        // Product image click

        let imageContainer =
            card.querySelector(".image-container");


        imageContainer.addEventListener("click", () => {

            window.location.href =
                `singleProduct.html?id=${product.id}`;

        });

    });

}


getAllProducts();