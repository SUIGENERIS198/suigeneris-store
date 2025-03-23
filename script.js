
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.name + " - KES " + item.price;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('total').textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for shopping at SUÎGENÊRÎS!");
    cart = [];
    updateCart();
}
