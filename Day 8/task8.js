const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const cartCount = document.getElementById("cart-count");
let allProducts = [];
let cart = [];

// 1. Fetch Products from API
function fetchProducts() {
    productContainer.innerHTML = "<p>Loading Products...</p>";
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            renderProducts(allProducts);
            console.log("Products Loaded Successfully");
        })
        .catch(err => console.error("Error:", err))
        .finally(() => console.log("Operation Complete"));
}

// 2. Product Card UI
function renderProducts(products) {
    productContainer.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.innerHTML = `
            <img src="${p.image}" width="100">
            <h3>${p.title}</h3>
            <p>$${p.price} | ${p.category}</p>
            <p>Rating: ${p.rating.rate}</p>
            <button onclick="addToCart(${p.id})">Add To Cart</button>
        `;
        productContainer.appendChild(card);
    });
}

// 3. Search Feature
searchInput.addEventListener("input", (e) => {
    const filtered = allProducts.filter(p => p.title.toLowerCase().includes(e.target.value.toLowerCase()));
    renderProducts(filtered);
});

// 4. Category Filter
categoryFilter.addEventListener("change", (e) => {
    const val = e.target.value;
    const filtered = val === "All" ? allProducts : allProducts.filter(p => p.category === val);
    renderProducts(filtered);
});

// 5. Statistics Dashboard (Requirement 6)
function updateStats() {
    const total = allProducts.length;
    const avgPrice = allProducts.reduce((sum, p) => sum + p.price, 0) / total;
    const highest = [...allProducts].sort((a, b) => b.price - a.price)[0];
    const lowest = allProducts.find(p => p.price === Math.min(...allProducts.map(i => i.price)));
    console.log({ total, avgPrice, highest, lowest });
}

// 6 & 7. Cart Functionality
function addToCart(id) {
    const item = allProducts.find(p => p.id === id);
    cart.push(item);
    cartCount.innerText = cart.length;
}

function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    cartCount.innerText = cart.length;
}

fetchProducts();