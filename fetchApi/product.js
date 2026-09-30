 let baseUrl = "https://dummyjson.com"
        let display = document.getElementById('display');

        const getAllProducts = async ()=>{
            try {
                let response = await fetch(`${baseUrl}/products`);
                let data = await response.json();
                let allProducts = data.products 
                console.log(allProducts);
                displayProducts(allProducts)
            } catch (error) {
                console.log(error.message);
                
            }
        }
        function displayProducts(products) {
            
            products.forEach(product => {
                let card = document.createElement("div");

                card.classList.add('cardBox');
                card.innerHTML = `
                    <img src=${product.thumbnail} alt="..." class="img">
                        <h1 class="card-title">${product.title}</h1>
                        <p>
                            <span class="short">${product.description.substring(0, 100)}...</span>
                            <span class="long" style="display:none;">${product.description}</span>
                        </p>
                        <p class="category">${product.category}</p>
                        <p class="price">$${product.price} USD</p>
                        <p class="rating">${product.rating}</p>
                        <p class="card-text">${product.tags}</p>
                        <button  class="btn">Read More</button>
                        <button id="cart" class="cart-button">Cart</button> 
                   
                `
                display.appendChild(card)
                    
                let getShortDescription = card.querySelector(".short")
                let getLongDescription = card.querySelector(".long")
                let btn = card.querySelector(".btn")
                console.log(btn);
                

                btn.addEventListener("click", ()=>{
                    if (btn.textContent == "Read More") {
                        btn.textContent = "Read Less";
                        getShortDescription.style.display = "none";
                        getLongDescription.style.display = "block"
                    } else {
                        btn.textContent = "Read More";
                        getShortDescription.style.display = "block";
                        getLongDescription.style.display = "none"
                    }
                })
            });
        }

        getAllProducts()