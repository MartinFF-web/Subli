let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
    if (!document.getElementById('carrito').style.display || document.getElementById('carrito').style.display === 'none') {
        toggleCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems) return;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });

    if(cartTotal) cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
    const cartEl = document.getElementById('carrito');
    if (cartEl.style.display === 'flex') {
        cartEl.style.display = 'none';
    } else {
        cartEl.style.display = 'flex';
    }
}
