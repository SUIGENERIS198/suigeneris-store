const products = [
    { name: "Bracelet", price: "KES 200" },
    { name: "Necklace", price: "KES 500" },
    { name: "Ring", price: "KES 150" }
];

const productList = document.getElementById('product-list');

function loadProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><button>Add to Cart</button>`;
        productList.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', function(e) {
    const searchValue = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
    productList.innerHTML = '';
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><button>Add to Cart</button>`;
        productList.appendChild(card);
    });
});

loadProducts();
