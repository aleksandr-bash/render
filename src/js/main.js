document.addEventListener('DOMContentLoaded', () => {
    fetch('https://gist.githubusercontent.com/aleksandr-bash/d7be5f7e728b656e0d0542d1dcdefa9e/raw/2577087aa5ded2aa60be7b004ca07906e18e013c/data.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            const container = document.getElementById('product-container');

            for(const product of products) {
                const card = createCard(product)
    
                container.appendChild(card);
            }
        })
        .catch(error => console.error('Error loading products:', error));
});


function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price}</div>
        <button class="buy" onclick=" _ => addToCart(product)" >Add to cart</button>
    `;

    return card
}

function addToCart(product) {
    console.log(product);
    let products = JSON.parse(localStorage.getItem('products')); // "[product_1, product_2]" || null
    if(!products) {
        products = [];
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}