const productContainer = document.getElementById("product-container");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total-price");

let allProducts = [];
let cart = [];

function fetchProducts() {
    productContainer.innerHTML = "<p>Loading Products...</p>";
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            allProducts = data;
            renderProducts(allProducts);
            updateStats();
        })
        .catch(err => console.error("Error:", err));
}

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

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = allProducts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchText);
        const matchesCategory = (category === "All" || p.category === category);
        return matchesSearch && matchesCategory;
    });
    renderProducts(filtered);
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

function updateStats() {
    const total = allProducts.length;
    const avgPrice = allProducts.reduce((sum, p) => sum + p.price, 0) / total;
    const highest = [...allProducts].sort((a, b) => b.price - a.price)[0];
    const lowest = allProducts.find(p => p.price === Math.min(...allProducts.map(i => i.price)));
    console.log("Dashboard Stats:", { total, avgPrice, highest, lowest });
}

function addToCart(id) {
    const item = allProducts.find(p => p.id === id);
    cart.push(item);
    cartCount.innerText = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = total.toFixed(2);
}

fetchProducts();