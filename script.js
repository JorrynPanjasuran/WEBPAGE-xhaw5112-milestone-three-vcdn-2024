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

// Home Page comments 
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

// Scrolls on top 
window.onscroll = function () { updateProgressBar() };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Scrolls on bottom
<button class="rainbow-button" onclick="addToCart('Landscaping Course', 250)">Add to Cart</button>

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(mode) {
    nav.style.backgroundColor =
        mode === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor =
        mode === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // Icon text
    toggleIcon.children[0].textContent =
        mode === DARK_THEME ? 'Dark Mode' : 'Light Mode';
    // Change icon
    mode === DARK_THEME
        ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
        : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    // Changing images
    mode === DARK_THEME ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
}

document.getElementById('popcornButton').addEventListener('click', (event) => {
    const fireworkCount = 100; // Increase particle count for more coverage

    for (let i = 0; i < fireworkCount; i++) {
        createConfettiExplosion(event.clientX, event.clientY);
    }
});

function createConfettiExplosion(x, y) {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-spark');

    // Randomize particle size for variety
    const size = Math.random() * 20 + 10 + 'px'; // Size range adjusted
    confettiPiece.style.width = size;
    confettiPiece.style.height = size;
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 60%)`; // Added backticks

    // Position particle at the click location
    confettiPiece.style.left = `${x}px`; // Added backticks
    confettiPiece.style.top = `${y}px`; // Added backticks

    document.body.appendChild(confettiPiece);

    // Animate particle to cover more screen area
    const animation = confettiPiece.animate([
        {
            transform: `translate(${Math.random() * 600 - 300}px, ${Math.random() * -200}px) rotate(${Math.random() * 720}deg) scale(1)`,
            opacity: 1,
        },
        {
            transform: `translate(${Math.random() * 800 - 400}px, ${Math.random() * 400 + 200}px) rotate(${Math.random() * 720}deg) scale(0.5)`,
            opacity: 0,
        }
    ], {
        duration: 2000 + Math.random() * 500, // Randomize duration
        easing: 'cubic-bezier(0.36, 0.11, 0.89, 0.32)', // Dramatic easing
    });

    // Remove particle after animation ends
    animation.onfinish = () => confettiPiece.remove();
}



// JavaScript for cart functionality
let cart = []; // Array to hold cart items

// Function to add a course to the cart
function addToCart(course, price) {
    const item = { course, price }; // Create item object
    cart.push(item); // Add item to cart
    displayCart(); // Update cart display
}

// Function to display cart contents
function displayCart() {
    const cartList = document.getElementById('cart'); // Get cart list element
    cartList.innerHTML = ''; // Clear existing cart display
    let total = 0; // Initialize total price

    // Loop through cart items and add them to the list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${ item.course } - R${ item.price }; // Set text for list item
        cartList.appendChild(li); // Append item to cart list
        total += item.price; // Add to total price
    });

    // Update total amount display
    document.getElementById('totalAmount').textContent = Total: R${ total };
}

// Function to handle checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!'); // Alert if cart is empty
        return;
    }
    alert('Proceeding to checkout...'); // Alert for checkout
}

// JavaScript for scroll progress bar
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop; // Get scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Calculate total scroll height
    const scrollPercentage = (scrollTop / scrollHeight) * 100; // Calculate scroll percentage
    document.getElementById('progressBar').style.width = scrollPercentage + '%'; // Update progress bar width
};

// JavaScript for sparkle (star) effect
function createSparkle() {
    const sparkle = document.createElement('div'); // Create a new sparkle element
    sparkle.classList.add('sparkle'); // Add sparkle class for styling
    sparkle.style.left = Math.random() * 100 + '%'; // Set random horizontal position
    sparkle.style.top = Math.random() * 100 + '%';  // Set random vertical position
    sparkle.style.backgroundColor = getRandomColor(); // Set random color for sparkle
    document.getElementById('sparklesContainer').appendChild(sparkle); // Append sparkle to container
    setTimeout(() => {
        sparkle.remove(); // Remove sparkle after animation ends
    }, 1000); // Match with the duration of the animation
}

// Function to get a random color
function getRandomColor() {
    const colors = ['gold', 'cyan', 'magenta', 'lightgreen', 'orange']; // Array of colors
    return colors[Math.floor(Math.random() * colors.length)]; // Return a random color from the array
}

setInterval(createSparkle, 50); // Create a new sparkle every 50ms

//add to cart

function addToCart(event, courseName, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push({ title: courseName, fees: price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    console.log(`${courseName} added to cart for R${price}`);

    // Trigger confetti effect (keep as is)
    const fireworkCount = 200;
    for (let i = 0; i < fireworkCount; i++) {
        createConfettiExplosion();
    }
}
