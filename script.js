const cart = [];
function addToCart(title, price) {
    cart.push({ title, price });
    updateCart();
    alert(`${title} has been added to your cart!`);
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
      <span>${item.title} - R${item.price.toFixed(2)}</span>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    const totalAmount = document.getElementById("totalAmount").textContent;
    alert(`Thank you for your purchase! Your total order of R${totalAmount} will be processed shortly.`);
}



