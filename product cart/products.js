const clothingProducts = [
    {
        id: 1,
        name: "Brown Brim Hat",
        category: "Hats",
        price: 25,
        imageUrl: "../media/images.jpg",
        description: "Classic brown brim hat, perfect for sunny days.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 2,
        name: "Blue Beanie",
        category: "Hats",
        price: 18,
        imageUrl: "../media/images.jpg",
        description: "Warm and cozy blue beanie for cold weather.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 3,
        name: "Adidas NMD Sneakers",
        category: "Sneakers",
        price: 220,
        imageUrl: "../media/images.jpg",
        description: "Stylish and comfortable Adidas NMD runners.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 4,
        name: "Black Converse",
        category: "Sneakers",
        price: 110,
        imageUrl: "../media/images.jpg",
        description: "Classic black Converse high-top sneakers.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 5,
        name: "Blue Jean Jacket",
        category: "Jackets",
        price: 90,
        imageUrl: "../media/images.jpg",
        description: "Durable blue denim jacket, a timeless wardrobe staple.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 6,
        name: "Black Jean Shearling Jacket",
        category: "Jackets",
        price: 125,
        imageUrl: "../media/images.jpg",
        description: "Warm black shearling-lined denim jacket.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 7,
        name: "Blue Tank Top",
        category: "Womens",
        price: 25,
        imageUrl: "../media/images.jpg",
        description: "Light and comfortable blue tank top.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 8,
        name: "Floral Blouse",
        category: "Womens",
        price: 45,
        imageUrl: "../media/images.jpg",
        description: "Elegant blouse with a beautiful floral pattern.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 9,
        name: "Floral Dress",
        category: "Womens",
        price: 85,
        imageUrl: "../media/images.jpg",
        description: "Charming floral dress, perfect for spring and summer.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    },
    {
        id: 10,
        name: "Grey Jean Jacket",
        category: "Jackets",
        price: 85,
        imageUrl: "../media/images.jpg",
        description: "Versatile grey denim jacket.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem, sed reprehenderit culpa temporibus excepturi quod voluptate exercitationem quae quia eum beatae quasi officiis est dolore. Distinctio minima totam perferendis."
    }
];

 let box = document.getElementById('box');

    clothingProducts.forEach((product, index) => {
        box.innerHTML += `
            <div class="card" data-id="${product.id} style="width: 25rem;">
                    <img src=${product.imageUrl} class="product-image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="description">${product.description.substring(0, 150)}...</p>
                        <p class="category">${product.category}</p>
                        <p class="price">$${product.price} USD</p>
                        <button  class="product-button">See more</button>
                        <button class="cart-button">Cart</button> 
                    </div>
            </div>
        `   
    });

        for (let index = 0; index <  clothingProducts.length; index++) {

            let element =  clothingProducts[index];
            let description = document.querySelectorAll('.description')
            let seeMore = document.querySelectorAll('.product-button')

        seeMore[index].addEventListener('click', ()=>{
                        
            if (seeMore[index].textContent == "See more") {
                description[index].textContent = element.description;
                seeMore[index].textContent = "See less";
            } else { 
                description[index].textContent = element.description.substring(0, 150) + "...";
                seeMore[index].textContent = "See more";
             }
             }); 
        }
          
        let productCards = document.querySelectorAll('.card');
        productCards.forEach((card) => {
        card.addEventListener('click', () => {
        let id = card.dataset.id;
        window.location.href = `product-details.html?id=${id}`;
    });

});
