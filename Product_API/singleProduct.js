let displayProduct =
    document.getElementById("displayProduct");


const param =
    new URLSearchParams(window.location.search);


const getId =
    param.get("id");


console.log("Product ID:", getId);



const displaySingleProduct = async () => {

    try {

        let res =
            await fetch(
                `https://dummyjson.com/products/${getId}`
            );


        let product =
            await res.json();


        console.log(product);


        display(product);


    } catch (error) {

        console.log(error.message);

    }

};



function display(product) {

    displayProduct.innerHTML = `

        <div class="single-product">


            <div>

                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                    class="product-image"
                >

            </div>



            <div class="product-details">


                <span class="category">
                    ${product.category}
                </span>


                <h1>
                    ${product.title}
                </h1>


                <p class="description">
                    ${product.description}
                </p>


                <p class="price">
                    $${product.price} USD
                </p>


                <p class="discount">
                    ${product.discountPercentage}% OFF
                </p>


                <p class="rating">
                    ⭐ ${product.rating} / 5
                </p>



                <div class="info">

                    <p>
                        <strong>Brand:</strong>
                        ${product.brand || "Not specified"}
                    </p>


                    <p>
                        <strong>Stock:</strong>
                        ${product.stock} items
                    </p>


                    <p>
                        <strong>SKU:</strong>
                        ${product.sku}
                    </p>


                    <p>
                        <strong>Weight:</strong>
                        ${product.weight}
                    </p>


                    <p>
                        <strong>Warranty:</strong>
                        ${product.warrantyInformation}
                    </p>


                    <p>
                        <strong>Shipping:</strong>
                        ${product.shippingInformation}
                    </p>


                    <p>
                        <strong>Availability:</strong>
                        ${product.availabilityStatus}
                    </p>


                    <p class="tags">
                        <strong>Tags:</strong>
                        ${product.tags
                            ? product.tags.join(", ")
                            : "No tags"}
                    </p>

                </div>


                <button class="cart-button">
                    Add to Cart
                </button>


            </div>

        </div>

    `;

}


displaySingleProduct();