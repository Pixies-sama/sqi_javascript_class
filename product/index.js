// 1. WhatsApp & Catalog Data
const WHATSAPP_NUMBER = "234703362329";

const products = [
  {
    id: 1,
    name: "Classic Leather Palm",
    price: 25000,
    category: "Palm Slippers",
    material: "Smooth leather upper with a hand-finished sole.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Executive Woven Palm",
    price: 32000,
    category: "Palm Slippers",
    material: "Woven leather upper with an open-toe silhouette.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Everyday Suede Palm",
    price: 18000,
    category: "Palm Slippers",
    material: "Soft suede upper in a relaxed slip-on profile.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Heritage Oxford Shoe",
    price: 45000,
    category: "Shoes",
    material: "Full-grain calfskin with stacked leather heel.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80"
  }
];

function formatPrice(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function buildWhatsAppUrl(product, size) {
  let message = `Hello New Something Shoes, I'm interested in the "${product.name}" (${formatPrice(product.price)}).`;
  if (size) {
    message += ` Size: EU ${size}.`;
  }
  message += " Is it currently available?";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// 2. DOM Elements
const grid = document.getElementById("product-grid");
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalMaterial = document.getElementById("modal-material");
const sizeSelect = document.getElementById("size-select");
const whatsappBtn = document.getElementById("modal-whatsapp");
const modalClose = document.getElementById("modal-close");

let activeProduct = null;

// 3. Render Cards
function renderProducts() {
  grid.innerHTML = products.map((p) => `
    <article class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy" />
      <div class="product-info">
        <span class="eyebrow">${p.category}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-price">${formatPrice(p.price)}</div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = Number(card.getAttribute("data-id"));
      openModal(products.find((item) => item.id === id));
    });
  });
}

// 4. Modal Logic
function openModal(product) {
  activeProduct = product;
  sizeSelect.value = "";
  modalImg.src = product.image;
  modalImg.alt = product.name;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalPrice.textContent = formatPrice(product.price);
  modalMaterial.textContent = product.material;
  whatsappBtn.href = buildWhatsAppUrl(product, "");
  modal.removeAttribute("hidden");
}

function closeModal() {
  modal.setAttribute("hidden", "");
  activeProduct = null;
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

sizeSelect.addEventListener("change", (e) => {
  if (activeProduct) {
    whatsappBtn.href = buildWhatsAppUrl(activeProduct, e.target.value);
  }
});

// Init
renderProducts();
