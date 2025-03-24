
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Bracelet', category: 'jewelry', price: 250 },
        { name: 'T-shirt', category: 'clothing', price: 500 },
        { name: 'Headphones', category: 'electronics', price: 3000 },
        { name: 'Ring', category: 'jewelry', price: 400 },
    ];

    const productContainer = document.getElementById('products');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function displayProducts(items) {
        productContainer.innerHTML = '';
        items.forEach(p => {
            const item = document.createElement('div');
            item.classList.add('product-item');
            item.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: KES ${p.price}</p><button>Add to Cart</button>`;
            productContainer.appendChild(item);
        });
    }

    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const filtered = products.filter(p => p.name.toLowerCase().includes(keyword) && (category === 'all' || p.category === category));
        displayProducts(filtered);
    });

    categoryFilter.addEventListener('change', () => {
        const keyword = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const filtered = products.filter(p => p.name.toLowerCase().includes(keyword) && (category === 'all' || p.category === category));
        displayProducts(filtered);
    });

    displayProducts(products);
});
