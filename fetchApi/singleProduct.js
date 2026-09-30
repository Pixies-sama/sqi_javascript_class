let displayProduct = document.getElementById('displayProduct')
const param = new URLSearchParams(window.location.search)
const getId = param.get('id');
console.log(getId);



const displaySingleProduct = async ()=>{
    try {
        let res = await fetch(`https://dummyjson.com/products/${getId}`)
        let product = await res.json()
        console.log(product);
        display(product)
        
    } catch (error) {
        console.log(error.message);
        
    }
}

function display(product) {
    card.innerHTML = `
        <img src=${product.thumbnail} alt="..." class='img'>
            <h1 class="card-title">${product.title}</h1>
            <p>
                <span class="short">${product.description}</span>
            </p>
            <p class="category">${product.category}</p>
            <p class="price">$${product.price} USD</p>
            <p class="rating">${product.rating}</p>
            <p class="card-text">${product.tags}</p>
            <button  class="btn">Read More</button>
            <button id="cart" class="cart-button">Cart</button> 
        
    `
}

displaySingleProduct()