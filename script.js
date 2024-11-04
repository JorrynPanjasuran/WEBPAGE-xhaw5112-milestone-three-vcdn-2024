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


//Home Page comments 
document.addEventListener("DOMContentLoaded", function () {
    const marqueeContent = document.querySelector(".marquee-content");

    // Set scroll speed
    const scrollSpeed = 20; // in seconds
    marqueeContent.style.animationDuration = `${scrollSpeed}s`;

    // Pause animation on hover
    marqueeContent.addEventListener("mouseover", () => {
        marqueeContent.style.animationPlayState = "paused";
    });

    marqueeContent.addEventListener("mouseout", () => {
        marqueeContent.style.animationPlayState = "running";
    });
});
// End of Home Page Comments 


//Scrolls on top 
window.onscroll = function () { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

//Scrolls on bottom

// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                "color-1": "hsl(var(--color-1))",
                "color-2": "hsl(var(--color-2))",
                "color-3": "hsl(var(--color-3))",
                "color-4": "hsl(var(--color-4))",
                "color-5": "hsl(var(--color-5))",
            },
            animation: {
                rainbow: "rainbow 2s infinite linear",
            },
            keyframes: {
                rainbow: {
                    "0%": { backgroundPosition: "0%" },
                    "100%": { backgroundPosition: "200%" },
                },
            },
        },
    },
};

