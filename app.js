/* ========================================
   DELIVERY GERAL - Application Logic
   ======================================== */

// ===== DATA: Market Categories =====
const categories = [
    { id: 'supermarket', name: 'Supermercado', emoji: '🛒', color: '#FF4D00', bg: '#FFF3ED' },
    { id: 'restaurant', name: 'Restaurante', emoji: '🍽️', color: '#E04400', bg: '#FFF0EB' },
    { id: 'pharmacy', name: 'Farmacia', emoji: '💊', color: '#3B82F6', bg: '#EFF6FF' },
    { id: 'petshop', name: 'Pet Shop', emoji: '🐾', color: '#8B5CF6', bg: '#F5F3FF' },
    { id: 'bakery', name: 'Padaria', emoji: '🥐', color: '#D97706', bg: '#FFFBEB' },
    { id: 'butcher', name: 'Acougue', emoji: '🥩', color: '#DC2626', bg: '#FEF2F2' },
    { id: 'greengrocer', name: 'Hortifruti', emoji: '🥬', color: '#16A34A', bg: '#F0FDF4' },
    { id: 'beverages', name: 'Bebidas', emoji: '🍷', color: '#7C3AED', bg: '#F5F3FF' },
    { id: 'electronics', name: 'Eletrônicos', emoji: '📱', color: '#0EA5E9', bg: '#F0F9FF' },
    { id: 'fashion', name: 'Moda', emoji: '👗', color: '#EC4899', bg: '#FDF2F8' },
    { id: 'books', name: 'Livraria', emoji: '📚', color: '#92400E', bg: '#FEF3C7' },
    { id: 'flowers', name: 'Floricultura', emoji: '💐', color: '#DB2777', bg: '#FCE7F3' },
    { id: 'toys', name: 'Brinquedos', emoji: '🧸', color: '#F59E0B', bg: '#FFFBEB' },
    { id: 'sports', name: 'Esportes', emoji: '⚽', color: '#059669', bg: '#ECFDF5' },
    { id: 'cosmetics', name: 'Cosmeticos', emoji: '💄', color: '#E11D48', bg: '#FFF1F2' },
    { id: 'hardware', name: 'Ferragens', emoji: '🔧', color: '#6B7280', bg: '#F3F4F6' },
    { id: 'office', name: 'Papelaria', emoji: '📝', color: '#2563EB', bg: '#EFF6FF' },
    { id: 'furniture', name: 'Moveis', emoji: '🛋️', color: '#78716C', bg: '#F5F5F4' },
    { id: 'health', name: 'Saude Natural', emoji: '🌿', color: '#15803D', bg: '#F0FDF4' },
    { id: 'cleaning', name: 'Limpeza', emoji: '🧹', color: '#06B6D4', bg: '#ECFEFF' },
    { id: 'baby', name: 'Bebe', emoji: '🍼', color: '#F472B6', bg: '#FCE7F3' },
    { id: 'autoparts', name: 'Auto Pecas', emoji: '🚗', color: '#475569', bg: '#F1F5F9' },
    { id: 'fishing', name: 'Pesca', emoji: '🎣', color: '#0284C7', bg: '#E0F2FE' },
    { id: 'garden', name: 'Jardinagem', emoji: '🌻', color: '#65A30D', bg: '#F7FEE7' },
    { id: 'music', name: 'Instrumentos', emoji: '🎸', color: '#9333EA', bg: '#FAF5FF' },
    { id: 'games', name: 'Games', emoji: '🎮', color: '#4F46E5', bg: '#EEF2FF' },
    { id: 'gourmet', name: 'Gourmet', emoji: '🧀', color: '#CA8A04', bg: '#FEFCE8' },
    { id: 'sweets', name: 'Doces', emoji: '🍰', color: '#F43F5E', bg: '#FFF1F2' },
    { id: 'organic', name: 'Organicos', emoji: '🥗', color: '#22C55E', bg: '#F0FDF4' },
    { id: 'frozen', name: 'Congelados', emoji: '🧊', color: '#38BDF8', bg: '#F0F9FF' },
    { id: 'asian', name: 'Mercado Asiatico', emoji: '🍜', color: '#EF4444', bg: '#FEF2F2' },
    { id: 'arabic', name: 'Mercado Arabe', emoji: '🧆', color: '#B45309', bg: '#FEF3C7' },
    { id: 'italian', name: 'Mercado Italiano', emoji: '🍝', color: '#16A34A', bg: '#F0FDF4' },
    { id: 'mexican', name: 'Mercado Mexicano', emoji: '🌮', color: '#EA580C', bg: '#FFF7ED' },
    { id: 'indian', name: 'Mercado Indiano', emoji: '🍛', color: '#DC2626', bg: '#FEF2F2' },
    { id: 'japanese', name: 'Mercado Japones', emoji: '🍣', color: '#E11D48', bg: '#FFF1F2' },
    { id: 'convenience', name: 'Conveniencia', emoji: '🏪', color: '#0891B2', bg: '#ECFEFF' },
    { id: 'wholesale', name: 'Atacado', emoji: '📦', color: '#7C2D12', bg: '#FEF2F2' },
    { id: 'wine', name: 'Vinhos', emoji: '🍷', color: '#881337', bg: '#FFF1F2' },
    { id: 'coffee', name: 'Cafeteria', emoji: '☕', color: '#78350F', bg: '#FEF3C7' },
    { id: 'icecream', name: 'Sorveteria', emoji: '🍦', color: '#F472B6', bg: '#FCE7F3' },
    { id: 'pizza', name: 'Pizzaria', emoji: '🍕', color: '#DC2626', bg: '#FEF2F2' },
    { id: 'burger', name: 'Hamburgueria', emoji: '🍔', color: '#D97706', bg: '#FFFBEB' },
    { id: 'sushi', name: 'Sushi', emoji: '🍱', color: '#1D4ED8', bg: '#EFF6FF' },
    { id: 'vegan', name: 'Vegano', emoji: '🥑', color: '#15803D', bg: '#F0FDF4' },
    { id: 'fitness', name: 'Fitness', emoji: '💪', color: '#0D9488', bg: '#F0FDFA' },
];

// ===== DATA: Stores =====
let stores = [];

// Carrega lojas do Firestore em tempo real
function loadStoresFromFirestore() {
    db.collection('stores').onSnapshot((snap) => {
        stores = snap.docs.map(d => {
            const s = d.data();
            return {
                id: d.id,
                name: s.name || 'Loja',
                cat: s.niche || 'general',
                emoji: s.emoji || '🏪',
                rating: s.rating || 0,
                time: s.deliveryTime || '30-45 min',
                bg: s.bg || '#F3F4F6',
                products: s.products || []
            };
        });
        renderHome();
    });
}

// Fallback: se Firestore estiver vazio, mostra mensagem
function ensureStoresLoaded() {
    if (stores.length === 0) {
        renderHome();
    }
}

// ===== DATA: Promos =====
const promos = [
    { title: '50% OFF', subtitle: 'Primeira compra no app', bg: 'linear-gradient(135deg, #FF4D00, #FF8F5E)', emoji: '🔥', tag: 'Exclusivo' },
    { title: 'Frete Grátis', subtitle: 'Em pedidos acima de R$50', bg: 'linear-gradient(135deg, #8B5CF6, #C084FC)', emoji: '🚚', tag: 'Hoje' },
    { title: '2 por 1', subtitle: 'Em bebidas selecionadas', bg: 'linear-gradient(135deg, #0EA5E9, #38BDF8)', emoji: '🍺', tag: 'Limitado' },
    { title: '30% OFF', subtitle: 'Mercado e hortifruti', bg: 'linear-gradient(135deg, #16A34A, #4ADE80)', emoji: '🥬', tag: 'Semana' },
];

// ===== STATE =====
let cart = [];
let currentPage = 'home';
let pageHistory = ['home'];
let selectedPayment = 'pix';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
        }, 500);
    }, 1800);

    renderCategories();
    renderPromos();
    // Tenta carregar lojas do Firestore; se falhar ou vazio, mostra mensagem
    if (typeof db !== 'undefined' && db) {
        loadStoresFromFirestore();
    } else {
        ensureStoresLoaded();
    }
    renderAllCategories();
});

// ===== NAVIGATION =====
function navigateTo(page, data) {
    if (page !== currentPage) {
        pageHistory.push(page);
    }
    currentPage = page;

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        // Re-trigger animation
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = '';
    }

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // Show/hide location bar
    document.getElementById('location-bar').style.display = (page === 'home') ? 'flex' : 'none';

    // Page-specific renders
    if (page === 'cart') renderCart();
    if (page === 'store' && data) renderStore(data);
    if (page === 'checkout') renderCheckout();
    if (page === 'search') {
        setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    pageHistory.pop();
    const prev = pageHistory[pageHistory.length - 1] || 'home';
    navigateTo(prev);
}

// ===== RENDER: Categories (Home) =====
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    const top10 = categories.slice(0, 10);
    grid.innerHTML = top10.map(cat => `
        <div class="cat-card" onclick="openCategory('${cat.id}')">
            <div class="cat-icon" style="background: ${cat.bg}; color: ${cat.color}">
                ${cat.emoji}
            </div>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

// ===== RENDER: All Categories =====
function renderAllCategories() {
    const container = document.getElementById('all-categories');
    container.innerHTML = categories.map(cat => {
        const count = stores.filter(s => s.cat === cat.id).length;
        return `
            <div class="all-cat-card" onclick="openCategory('${cat.id}')">
                <div class="cat-emoji">${cat.emoji}</div>
                <div class="cat-name">${cat.name}</div>
                <div class="cat-count">${count} loja${count !== 1 ? 's' : ''}</div>
            </div>
        `;
    }).join('');
}

// ===== RENDER: Promos =====
function renderPromos() {
    const list = document.getElementById('promos-list');
    list.innerHTML = promos.map(p => `
        <div class="promo-card" style="background: ${p.bg}">
            <div class="promo-tag">${p.tag}</div>
            <h3>${p.title}</h3>
            <p>${p.subtitle}</p>
            <div class="promo-emoji">${p.emoji}</div>
        </div>
    `).join('');
}

// ===== RENDER: Stores (Home) =====
function renderStores() {
    const list = document.getElementById('stores-list');
    const featured = stores.slice(0, 12);
    list.innerHTML = featured.map(store => `
        <div class="store-card" onclick="navigateTo('store', '${store.id}')">
            <div class="store-thumb" style="background: ${store.bg}">
                ${store.emoji}
            </div>
            <div class="store-info">
                <h3>${store.name}</h3>
                <div class="store-meta">
                    <span class="store-rating">★ ${store.rating}</span>
                    <span>•</span>
                    <span class="store-time">${store.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== OPEN CATEGORY =====
function openCategory(catId) {
    const catStores = stores.filter(s => s.cat === catId);
    const cat = categories.find(c => c.id === catId);

    if (catStores.length === 0) {
        showToast(`Nenhuma loja em ${cat.name} por enquanto`);
        return;
    }

    if (catStores.length === 1) {
        navigateTo('store', catStores[0].id);
        return;
    }

    // Show category stores list page
    document.getElementById('store-title').textContent = cat.name;
    document.getElementById('store-banner').innerHTML = `
        <div style="text-align:center;padding:10px 0 5px">
            <span style="font-size:2.5rem">${cat.emoji}</span>
            <div style="font-family:'Sora',sans-serif;font-weight:700;font-size:1.1rem;margin-top:4px">${cat.name}</div>
            <div style="color:var(--text-3);font-size:0.85rem;margin-top:2px">${catStores.length} lojas disponíveis</div>
        </div>
    `;
    document.getElementById('store-products').innerHTML = catStores.map(store => `
        <div class="product-card" style="cursor:pointer" onclick="navigateTo('store','${store.id}')">
            <div class="product-emoji">${store.emoji}</div>
            <div class="product-info">
                <h4>${store.name}</h4>
                <div class="product-desc">★ ${store.rating} • ${store.time} • ${store.products.length} produtos</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </div>
    `).join('');
    navigateTo('store');
}

// ===== RENDER: Store Detail =====
function renderStore(storeId) {
    const store = stores.find(s => s.id === storeId);
    if (!store) return;

    const cat = categories.find(c => c.id === store.cat);
    document.getElementById('store-title').textContent = store.name;

    document.getElementById('store-banner').innerHTML = `
        <div class="store-banner-emoji">${store.emoji}</div>
        <div class="store-banner-name">${store.name}</div>
        <div class="store-banner-meta">★ ${store.rating} • ${store.time} • ${cat?.name || ''}</div>
        <div class="store-banner-tags">
            <span class="store-tag">Entrega rapida</span>
            <span class="store-tag">Bem avaliado</span>
            <span class="store-tag">Aceita PIX</span>
        </div>
    `;

    document.getElementById('store-products').innerHTML = store.products.map(prod => `
        <div class="product-card">
            <div class="product-emoji">${prod.emoji}</div>
            <div class="product-info">
                <h4>${prod.name}</h4>
                <div class="product-desc">${prod.desc}</div>
                <div class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
            </div>
            <button class="product-add" onclick="addToCart('${store.id}', '${prod.id}')" aria-label="Adicionar">+</button>
        </div>
    `).join('');
}

// ===== CART LOGIC =====
function addToCart(storeId, productId) {
    const store = stores.find(s => s.id === storeId);
    const product = store?.products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            productId: product.id,
            storeId: store.id,
            storeName: store.name,
            name: product.name,
            emoji: product.emoji,
            price: product.price,
            qty: 1
        });
    }

    updateCartBadge();
    showToast(`${product.name} adicionado ao carrinho`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    updateCartBadge();
    renderCart();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
    badge.classList.toggle('hidden', total === 0);
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

// ===== RENDER: Cart =====
function renderCart() {
    const content = document.getElementById('cart-content');

    if (cart.length === 0) {
        content.innerHTML = `
            <div class="cart-empty">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <p>Seu carrinho esta vazio</p>
                <button class="btn-primary" onclick="navigateTo('home')" style="max-width:220px;margin:20px auto 0">Explorar lojas</button>
            </div>
        `;
        return;
    }

    const subtotal = getCartTotal();
    const delivery = subtotal >= 50 ? 0 : 7.99;
    const total = subtotal + delivery;

    content.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-emoji">${item.emoji}</div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
                    </div>
                    <div class="cart-qty">
                        <button onclick="updateQty('${item.productId}', -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty('${item.productId}', 1)">+</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <div class="cart-summary-row">
                <span>Subtotal</span>
                <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-summary-row">
                <span>Entrega</span>
                <span>${delivery === 0 ? 'Gratis' : 'R$ ' + delivery.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-summary-row total">
                <span>Total</span>
                <span>R$ ${total.toFixed(2).replace('.', ',')}</span>
            </div>
        </div>
        <div style="padding: 0 16px;">
            <button class="btn-primary" onclick="navigateTo('checkout')">Finalizar pedido</button>
        </div>
    `;
}

// ===== RENDER: Checkout =====
function renderCheckout() {
    const subtotal = getCartTotal();
    const delivery = subtotal >= 50 ? 0 : 7.99;
    const total = subtotal + delivery;

    const content = document.getElementById('checkout-content');
    content.innerHTML = `
        <div class="checkout-section">
            <h3>Endereco de entrega</h3>
            <div class="form-group">
                <label>Endereco completo</label>
                <input type="text" placeholder="Rua, numero, bairro" id="checkout-address">
            </div>
            <div class="form-group">
                <label>Complemento</label>
                <input type="text" placeholder="Apto, bloco (opcional)">
            </div>
        </div>

        <div class="checkout-section">
            <h3>Forma de pagamento</h3>
            <div class="payment-options">
                <div class="payment-option ${selectedPayment === 'pix' ? 'selected' : ''}" onclick="selectPayment('pix')">
                    <span class="pay-icon">📱</span>
                    <span class="pay-label">PIX</span>
                </div>
                <div class="payment-option ${selectedPayment === 'credit' ? 'selected' : ''}" onclick="selectPayment('credit')">
                    <span class="pay-icon">💳</span>
                    <span class="pay-label">Cartão de Credito</span>
                </div>
                <div class="payment-option ${selectedPayment === 'debit' ? 'selected' : ''}" onclick="selectPayment('debit')">
                    <span class="pay-icon">💳</span>
                    <span class="pay-label">Cartão de Debito</span>
                </div>
                <div class="payment-option ${selectedPayment === 'cash' ? 'selected' : ''}" onclick="selectPayment('cash')">
                    <span class="pay-icon">💵</span>
                    <span class="pay-label">Dinheiro</span>
                </div>
            </div>
        </div>

        <div class="checkout-section">
            <h3>Resumo do pedido</h3>
            ${cart.map(item => `
                <div class="cart-summary-row">
                    <span>${item.emoji} ${item.name} x${item.qty}</span>
                    <span>R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                </div>
            `).join('')}
            <div class="cart-summary-row">
                <span>Entrega</span>
                <span>${delivery === 0 ? 'Gratis' : 'R$ ' + delivery.toFixed(2).replace('.', ',')}</span>
            </div>
        </div>

        <div class="checkout-total">
            <div class="total-label">Total a pagar</div>
            <div class="total-value">R$ ${total.toFixed(2).replace('.', ',')}</div>
        </div>

        <div style="padding: 0 16px;">
            <button class="btn-primary" onclick="placeOrder()">Confirmar Pedido</button>
        </div>
    `;
}

function selectPayment(method) {
    selectedPayment = method;
    renderCheckout();
}

function placeOrder() {
    const orderId = 'DG-' + Date.now().toString(36).toUpperCase();
    document.querySelector('.success-order-id').textContent = 'Pedido #' + orderId;
    navigateTo('success');
}

// ===== SEARCH =====
function handleSearch(query) {
    const container = document.getElementById('search-results');
    const q = query.trim().toLowerCase();

    if (q.length < 2) {
        container.innerHTML = `
            <div class="search-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <p>Digite para buscar produtos e lojas</p>
            </div>
        `;
        return;
    }

    // Search products across all stores
    let results = [];
    stores.forEach(store => {
        store.products.forEach(prod => {
            if (prod.name.toLowerCase().includes(q) || prod.desc.toLowerCase().includes(q)) {
                results.push({ ...prod, storeId: store.id, storeName: store.name, storeEmoji: store.emoji });
            }
        });
    });

    // Search stores
    let storeResults = stores.filter(s => s.name.toLowerCase().includes(q));

    // Search categories
    let catResults = categories.filter(c => c.name.toLowerCase().includes(q));

    let html = '';

    if (catResults.length > 0) {
        html += `<h3 style="font-family:'Sora',sans-serif;font-size:0.95rem;margin-bottom:12px;color:var(--text-2)">Categorias</h3>`;
        html += `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">`;
        catResults.forEach(cat => {
            html += `<div class="all-cat-card" style="width:auto;padding:12px 18px;display:flex;align-items:center;gap:8px" onclick="openCategory('${cat.id}')">
                <span style="font-size:1.3rem">${cat.emoji}</span>
                <span class="cat-name">${cat.name}</span>
            </div>`;
        });
        html += `</div>`;
    }

    if (storeResults.length > 0) {
        html += `<h3 style="font-family:'Sora',sans-serif;font-size:0.95rem;margin-bottom:12px;color:var(--text-2)">Lojas</h3>`;
        storeResults.forEach(store => {
            html += `<div class="product-card" style="margin-bottom:8px;cursor:pointer" onclick="navigateTo('store','${store.id}')">
                <div class="product-emoji">${store.emoji}</div>
                <div class="product-info">
                    <h4>${store.name}</h4>
                    <div class="product-desc">★ ${store.rating} • ${store.time}</div>
                </div>
            </div>`;
        });
        html += `<div style="margin-bottom:20px"></div>`;
    }

    if (results.length > 0) {
        html += `<h3 style="font-family:'Sora',sans-serif;font-size:0.95rem;margin-bottom:12px;color:var(--text-2)">Produtos (${results.length})</h3>`;
        results.forEach(prod => {
            html += `<div class="product-card" style="margin-bottom:8px">
                <div class="product-emoji">${prod.emoji}</div>
                <div class="product-info">
                    <h4>${prod.name}</h4>
                    <div class="product-desc">${prod.storeName} • ${prod.desc}</div>
                    <div class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
                </div>
                <button class="product-add" onclick="addToCart('${prod.storeId}', '${prod.id}')">+</button>
            </div>`;
        });
    }

    if (!html) {
        html = `<div class="search-placeholder">
            <p style="font-size:2.5rem;margin-bottom:12px">🔍</p>
            <p>Nenhum resultado para "${query}"</p>
        </div>`;
    }

    container.innerHTML = html;
}

// ===== ADDRESS =====
function changeAddress() {
    const addr = prompt('Digite seu endereco de entrega:');
    if (addr && addr.trim()) {
        document.getElementById('user-address').textContent = addr.trim();
    }
}

// ===== TOAST =====
function showToast(message) {
    // Remove existing
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ========================================
// PROMOCOES - Produtos mais baratos + Ranking
// ========================================

let userCity = 'Sua Cidade';
let promoFilter = 'todos';

// Detectar cidade do usuario (simulated + prompt on first visit)
function detectUserCity() {
    const saved = localStorage.getItem('dg_city');
    if (saved) {
        userCity = saved;
        document.getElementById('user-address').textContent = userCity;
        return;
    }
    // Will ask when they open promocoes
}

// Get all products with store info, sorted by price
function getAllProductsSorted(filterCat) {
    let allProducts = [];
    stores.forEach(store => {
        store.products.forEach(prod => {
            allProducts.push({
                ...prod,
                storeId: store.id,
                storeName: store.name,
                storeEmoji: store.emoji,
                storeCat: store.cat,
                storeRating: store.rating,
                storeTime: store.time,
            });
        });
    });

    if (filterCat && filterCat !== 'todos') {
        allProducts = allProducts.filter(p => p.storeCat === filterCat);
    }

    // Sort by price (cheapest first)
    allProducts.sort((a, b) => a.price - b.price);
    return allProducts;
}

// Rank stores by average product price (cheapest average = #1)
function getStoreRanking(filterCat) {
    let storeMap = {};
    stores.forEach(store => {
        if (filterCat && filterCat !== 'todos' && store.cat !== filterCat) return;

        const prices = store.products.map(p => p.price);
        const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
        const min = Math.min(...prices);

        storeMap[store.id] = {
            id: store.id,
            name: store.name,
            emoji: store.emoji,
            cat: store.cat,
            rating: store.rating,
            avgPrice: avg,
            minPrice: min,
            totalProducts: prices.length,
            cheapProducts: prices.filter(p => p <= 15).length,
        };
    });

    // Sort by average price ascending
    return Object.values(storeMap).sort((a, b) => a.avgPrice - b.avgPrice);
}

// Calculate fake "original" price for promo display (15-70% markup)
// Uses product ID as seed for consistent values
function getOriginalPrice(price, productId) {
    let hash = 0;
    const str = productId || String(price);
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    const factor = 0.15 + (Math.abs(hash % 56) / 100); // 15-70%
    const markup = 1 + factor;
    return Math.round(price * markup * 100) / 100;
}

// Get discount percentage
function getDiscount(original, promo) {
    return Math.round(((original - promo) / original) * 100);
}

// Render the Promocoes page
function renderPromocoes() {
    const cityName = userCity || 'Sua Cidade';

    // ---- Header: City card ----
    const allProducts = getAllProductsSorted(promoFilter);
    const ranking = getStoreRanking(promoFilter);
    const avgSavings = Math.round(allProducts.slice(0, 50).reduce((s, p) => {
        const orig = getOriginalPrice(p.price, p.id);
        return s + (orig - p.price);
    }, 0) / 50 * 100) / 100;

    document.getElementById('promocoes-header').innerHTML = `
        <div class="promo-city-card">
            <div class="promo-city-info">
                <div class="promo-city-pin">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <div class="promo-city-text">
                    <h3>Promocoes em ${cityName}</h3>
                    <p>Precos exclusivos para sua regiao</p>
                </div>
            </div>
            <div class="promo-city-stats">
                <div class="promo-stat">
                    <div class="promo-stat-value">${allProducts.length}</div>
                    <div class="promo-stat-label">Produtos em oferta</div>
                </div>
                <div class="promo-stat">
                    <div class="promo-stat-value">${ranking.length}</div>
                    <div class="promo-stat-label">Lojas parceiras</div>
                </div>
                <div class="promo-stat">
                    <div class="promo-stat-value">70%</div>
                    <div class="promo-stat-label">Desconto maximo</div>
                </div>
            </div>
        </div>
    `;

    // ---- Filters ----
    const filterCats = [
        { id: 'todos', label: 'Todos', emoji: '🔥' },
        { id: 'supermarket', label: 'Mercado', emoji: '🛒' },
        { id: 'restaurant', label: 'Restaurante', emoji: '🍽️' },
        { id: 'pharmacy', label: 'Farmacia', emoji: '💊' },
        { id: 'bakery', label: 'Padaria', emoji: '🥐' },
        { id: 'butcher', label: 'Acougue', emoji: '🥩' },
        { id: 'greengrocer', label: 'Hortifruti', emoji: '🥬' },
        { id: 'beverages', label: 'Bebidas', emoji: '🍷' },
        { id: 'electronics', label: 'Eletronicos', emoji: '📱' },
        { id: 'petshop', label: 'Pet Shop', emoji: '🐾' },
        { id: 'fashion', label: 'Moda', emoji: '👗' },
        { id: 'sweets', label: 'Doces', emoji: '🍰' },
        { id: 'gourmet', label: 'Gourmet', emoji: '🧀' },
    ];

    document.getElementById('promocoes-filters').innerHTML = filterCats.map(f => `
        <button class="promo-filter-btn ${promoFilter === f.id ? 'active' : ''}" onclick="setPromoFilter('${f.id}')">
            ${f.emoji} ${f.label}
        </button>
    `).join('');

    // ---- Ranking ----
    const topStores = ranking.slice(0, 8);
    document.getElementById('promocoes-ranking').innerHTML = `
        <div class="ranking-title">
            <span>🏆</span> Ranking dos Menores Precos
        </div>
        ${topStores.map((store, i) => {
            const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'normal';
            const catName = categories.find(c => c.id === store.cat)?.name || '';
            return `
                <div class="ranking-card" onclick="navigateTo('store', '${store.id}')">
                    <div class="ranking-pos ${posClass}">${i + 1}</div>
                    <div class="ranking-emoji">${store.emoji}</div>
                    <div class="ranking-info">
                        <h4>${store.name}</h4>
                        <p>${catName} • ★ ${store.rating} • ${store.totalProducts} produtos</p>
                    </div>
                    <div class="ranking-avg">
                        <div class="ranking-avg-value">R$ ${store.avgPrice.toFixed(2).replace('.', ',')}</div>
                        <div class="ranking-avg-label">preco medio</div>
                    </div>
                </div>
            `;
        }).join('')}
    `;

    // ---- Products (cheapest first) ----
    const cheapProducts = allProducts.slice(0, 60);
    document.getElementById('promocoes-products').innerHTML = `
        <div class="promos-section-title">
            <span>💰</span> Produtos com Menor Preco
        </div>
        ${cheapProducts.map(prod => {
            const origPrice = getOriginalPrice(prod.price, prod.id);
            const discount = getDiscount(origPrice, prod.price);
            return `
                <div class="promo-product-card">
                    <div class="product-emoji">${prod.emoji}</div>
                    <div class="promo-product-info">
                        <h4>${prod.name}</h4>
                        <div class="promo-product-store">${prod.storeEmoji} ${prod.storeName}</div>
                        <div class="promo-product-prices">
                            <span class="promo-old-price">R$ ${origPrice.toFixed(2).replace('.', ',')}</span>
                            <span class="promo-new-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
                        </div>
                    </div>
                    <div class="promo-discount-tag">-${discount}%</div>
                    <button class="promo-product-add" onclick="addToCart('${prod.storeId}', '${prod.id}')">+</button>
                </div>
            `;
        }).join('')}
    `;
}

function setPromoFilter(filter) {
    promoFilter = filter;
    renderPromocoes();
    // Scroll to top of filters
    document.getElementById('promocoes-filters').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function askForCity() {
    const city = prompt('Digite o nome da sua cidade para ver promocoes locais:');
    if (city && city.trim()) {
        userCity = city.trim();
        localStorage.setItem('dg_city', userCity);
        document.getElementById('user-address').textContent = userCity;
        renderPromocoes();
    }
}

// Hook into navigation to render promocoes
const originalNavigateTo = navigateTo;
navigateTo = function(page, data) {
    originalNavigateTo(page, data);
    if (page === 'promocoes') {
        if (!localStorage.getItem('dg_city')) {
            setTimeout(askForCity, 300);
        }
        renderPromocoes();
    }
};

// Detect city on load
detectUserCity();

// ========================================
// PAINEL DO CLIENTE
// ========================================

const clientData = {
    name: 'Cliente',
    email: '',
    phone: '',
    cpf: '',
    memberSince: '-',
    level: '-',
    points: 0,
    wallet: 0,
    totalOrders: 0,
    totalSpent: 0,
    favorites: 0,
    addresses: [],
    orders: [],
    cards: [],
    notifications: 0,
    coupons: 0,
};

function renderPerfil() {
    const user = getCurrentUser();
    if (!user) {
        showToast('Faça login para ver seu perfil');
        return;
    }
    
    // Busca dados reais do Firebase
    loadRealProfileData(user.uid);
}

async function loadRealProfileData(userId) {
    try {
        // Busca dados do usuario
        const userDoc = await db.collection('users').doc(userId).get();
        const userData = userDoc.exists ? userDoc.data() : {};
        
        // Busca pedidos do usuario
        const ordersSnapshot = await db.collection('orders').where('clientId', '==', userId).get();
        const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Calcula estatisticas reais
        const totalOrders = orders.length;
        const totalSpent = orders.reduce((sum, o) => sum + (o.total || 0), 0);
        const deliveredOrders = orders.filter(o => o.status === 'delivered');
        
        // Busca pedido em andamento (se houver)
        const activeOrder = orders.find(o => ['pending', 'accepted', 'preparing', 'ready', 'in_transit'].includes(o.status));
        
        // Data de cadastro
        const memberSince = userData.createdAt ? new Date(userData.createdAt.toDate()).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) : 'Novo membro';
        
        // Renderiza o perfil com dados reais
        renderPerfilContent({
            name: userData.name || clientData.name,
            email: userData.email || clientData.email,
            phone: userData.phone || clientData.phone,
            level: clientData.level,
            points: clientData.points,
            totalOrders: totalOrders,
            totalSpent: totalSpent,
            favorites: 0, // Sera implementado futuramente
            memberSince: memberSince,
            wallet: 0, // Sera implementado futuramente
            activeOrder: activeOrder,
            orders: orders
        });
    } catch (err) {
        console.error('Erro ao carregar perfil:', err);
        // Fallback para dados locais
        renderPerfilContent(clientData);
    }
}

function renderPerfilContent(d) {
    const cityName = userCity || 'Sua Cidade';
    const content = document.getElementById('perfil-content');
    
    // Gera HTML do pedido ativo (se houver)
    let activeOrderHtml = '';
    if (d.activeOrder) {
        const statusLabels = {
            pending: 'Aguardando confirmacao',
            accepted: 'Pedido aceito',
            preparing: 'Em preparacao',
            ready: 'Pronto para entrega',
            in_transit: 'Saiu para entrega'
        };
        activeOrderHtml = `
            <div class="profile-section">
                <div class="profile-section-title">Pedido em andamento</div>
                <div class="active-order-tracker">
                    <div class="tracker-header">
                        <div class="tracker-title">${d.activeOrder.storeName || 'Loja'}</div>
                        <div class="tracker-live">AO VIVO</div>
                    </div>
                    <div class="tracker-steps">
                        <div class="tracker-step ${['accepted', 'preparing', 'ready', 'in_transit', 'delivered'].includes(d.activeOrder.status) ? 'done' : ''}"></div>
                        <div class="tracker-step ${['preparing', 'ready', 'in_transit', 'delivered'].includes(d.activeOrder.status) ? 'done' : ''}"></div>
                        <div class="tracker-step ${['ready', 'in_transit', 'delivered'].includes(d.activeOrder.status) ? 'done' : d.activeOrder.status === 'preparing' ? 'active' : ''}"></div>
                        <div class="tracker-step ${['in_transit', 'delivered'].includes(d.activeOrder.status) ? 'done' : ''}"></div>
                    </div>
                    <div class="tracker-info">
                        <span class="tracker-status">${statusLabels[d.activeOrder.status] || 'Processando'}</span>
                        <span class="tracker-eta">~${Math.floor(Math.random() * 20) + 10} min</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    content.innerHTML = `
        <!-- Profile Header -->
        <div class="profile-header">
            <div class="profile-top-row">
                <button class="profile-back" onclick="goBack()">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button class="profile-edit-btn" onclick="editProfile()">Editar perfil</button>
            </div>

            <div class="profile-avatar-section">
                <div class="profile-avatar">👤</div>
                <div class="profile-user-info">
                    <h2>${d.name}</h2>
                    <p>${d.email}</p>
                    <div class="profile-level">⭐ Nivel ${d.level} • ${d.points.toLocaleString('pt-BR')} pontos</div>
                </div>
            </div>

            <div class="profile-stats-row">
                <div class="profile-stat">
                    <div class="profile-stat-value">${d.totalOrders}</div>
                    <div class="profile-stat-label">Pedidos</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">R$ ${d.totalSpent.toFixed(0)}</div>
                    <div class="profile-stat-label">Total gasto</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${d.favorites}</div>
                    <div class="profile-stat-label">Favoritos</div>
                </div>
                <div class="profile-stat">
                    <div class="profile-stat-value">${d.memberSince.split(' ')[0].substring(0,3)}</div>
                    <div class="profile-stat-label">Membro desde</div>
                </div>
            </div>
        </div>

        <!-- Wallet -->
        <div class="profile-wallet">
            <div class="wallet-row">
                <div class="wallet-info">
                    <h3>Carteira Delivery Geral</h3>
                    <div class="wallet-balance">R$ ${d.wallet.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="wallet-actions">
                    <button class="wallet-btn" onclick="showToast('Funcionalidade em desenvolvimento')">+ Adicionar</button>
                </div>
            </div>
        </div>

        ${activeOrderHtml}

        <!-- Menu Principal -->
        <div class="profile-section">
            <div class="profile-section-title">Minha conta</div>
            <div class="profile-menu">
                <div class="profile-menu-item" onclick="showMyOrders()">
                    <div class="menu-icon" style="background:#FFF3ED">📦</div>
                    <div class="menu-text">
                        <h4>Meus Pedidos</h4>
                        <p>${d.totalOrders} pedidos realizados</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
                <div class="profile-menu-item" onclick="showToast('Notificacoes')">
                    <div class="menu-icon" style="background:#DBEAFE">🔔</div>
                    <div class="menu-text">
                        <h4>Notificacoes</h4>
                        <p>Alertas de ofertas e pedidos</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
                <div class="profile-menu-item" onclick="showToast('Cupons disponiveis!')">
                    <div class="menu-icon" style="background:#DCFCE7">🎟️</div>
                    <div class="menu-text">
                        <h4>Meus Cupons</h4>
                        <p>0 cupons disponiveis</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
            </div>
        </div>

        <!-- Configuracoes -->
        <div class="profile-section">
            <div class="profile-section-title">Configuracoes</div>
            <div class="profile-menu">
                <div class="profile-menu-item" onclick="editProfile()">
                    <div class="menu-icon" style="background:#FFF3ED">👤</div>
                    <div class="menu-text">
                        <h4>Dados pessoais</h4>
                        <p>Nome, telefone, e-mail</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
                <div class="profile-menu-item" onclick="showToast('Enderecos salvos')">
                    <div class="menu-icon" style="background:#DBEAFE">📍</div>
                    <div class="menu-text">
                        <h4>Enderecos</h4>
                        <p>${cityName}</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
                <div class="profile-menu-item" onclick="showToast('Formas de pagamento')">
                    <div class="menu-icon" style="background:#DCFCE7">💳</div>
                    <div class="menu-text">
                        <h4>Pagamentos</h4>
                        <p>Cartoes e PIX</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
                <div class="profile-menu-item" onclick="showToast('Notificacoes')">
                    <div class="menu-icon" style="background:#FEF3C7">🔔</div>
                    <div class="menu-text">
                        <h4>Preferencias</h4>
                        <p>Notificacoes e idioma</p>
                    </div>
                    <span class="menu-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></span>
                </div>
            </div>
        </div>

        <!-- Logout -->
        <div style="padding: 0 20px 40px;">
            <button class="logout-btn" onclick="logoutUser()">Sair da conta</button>
        </div>
    `;
}

// ========================================
// FIREBASE AUTH INTEGRATION
// ========================================

function switchAuthTab(tab) {
    document.getElementById('tab-login').classList.toggle('active', tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
    document.getElementById('auth-login').classList.toggle('hidden', tab !== 'login');
    document.getElementById('auth-register').classList.toggle('hidden', tab !== 'register');
    document.getElementById('login-error').textContent = '';
    document.getElementById('register-error').textContent = '';
}

async function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');

    if (!email || !password) {
        errorEl.textContent = 'Preencha email e senha.';
        return;
    }

    errorEl.textContent = 'Entrando...';
    const result = await loginUser(email, password);

    if (result.success) {
        showApp();
        showToast('Bem-vindo de volta!');
        requestNotificationPermission();
    } else {
        errorEl.textContent = result.error;
    }
}

async function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const password = document.getElementById('reg-password').value;
    const city = document.getElementById('reg-city').value.trim();
    const errorEl = document.getElementById('register-error');

    if (!name || !email || !password) {
        errorEl.textContent = 'Preencha nome, email e senha.';
        return;
    }
    if (password.length < 6) {
        errorEl.textContent = 'Senha deve ter pelo menos 6 caracteres.';
        return;
    }

    errorEl.textContent = 'Criando conta...';
    const result = await registerUser(email, password, 'client', { name, phone, city });

    if (result.success) {
        localStorage.setItem('dg_city', city);
        showApp();
        showToast('Conta criada com sucesso!');
        requestNotificationPermission();
    } else {
        errorEl.textContent = result.error;
    }
}

function showApp() {
    document.getElementById('auth-screen').classList.add('hidden');
    const splash = document.getElementById('splash');
    splash.style.display = 'flex';
    splash.classList.remove('fade-out');

    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
        }, 500);
    }, 1200);

    renderCategories();
    renderPromos();
    renderStores();
    renderAllCategories();
    listenForegroundMessages();
}

function showAuth() {
    document.getElementById('auth-screen').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
    document.getElementById('splash').style.display = 'none';
}

// Verifica autenticacao ao carregar
onAuthChanged(({ user, profile }) => {
    if (user) {
        // Atualiza dados do cliente com dados reais
        if (profile) {
            clientData.name = profile.name || user.email.split('@')[0];
            clientData.email = user.email;
            clientData.phone = profile.phone || '';
            clientData.memberSince = profile.createdAt ? new Date(profile.createdAt.toDate()).toLocaleDateString('pt-BR',{month:'long',year:'numeric'}) : '-';
            clientData.level = profile.level || '-';
            clientData.points = profile.points || 0;
            if (profile.city) {
                userCity = profile.city;
                localStorage.setItem('dg_city', profile.city);
                document.getElementById('user-address').textContent = profile.city;
            }
        }
        // Carrega pedidos do cliente em tempo real
        loadClientOrders(user.uid);
        showApp();
    } else {
        showAuth();
    }
});

function loadClientOrders(userId) {
    db.collection('orders').where('clientId', '==', userId).orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            const orders = snap.docs.map(d => {
                const o = d.data();
                return {
                    id: d.id.slice(-6).toUpperCase(),
                    store: o.storeName || 'Loja',
                    emoji: o.items?.[0]?.emoji || '📦',
                    items: o.items?.map(i => `${i.name} x${i.qty}`).join(', ') || '',
                    total: o.total || 0,
                    date: o.createdAt ? new Date(o.createdAt.toDate()).toLocaleDateString('pt-BR') : '-',
                    status: o.status === 'pending' || o.status === 'accepted' || o.status === 'preparing' || o.status === 'ready' ? 'transit' : o.status === 'delivered' ? 'delivered' : 'cancelled',
                    statusLabel: o.status === 'delivered' ? 'Entregue' : o.status === 'cancelled' ? 'Cancelado' : 'A caminho'
                };
            });
            clientData.orders = orders;
            clientData.totalOrders = orders.length;
            clientData.totalSpent = orders.reduce((sum,o)=>sum+(o.total||0),0);
            // Atualiza UI se estiver na tela de perfil
            const perfilPage = document.getElementById('page-perfil');
            if (perfilPage && !perfilPage.classList.contains('hidden')) {
                renderPerfilContent(clientData);
            }
        });
}

// ========================================
// ORDERS - Firestore Integration
// ========================================

let currentOrderId = null;
let orderUnsubscribe = null;

async function placeOrder() {
    const user = getCurrentUser();
    if (!user) {
        showToast('Faca login para finalizar o pedido');
        showAuth();
        return;
    }

    const address = document.getElementById('checkout-address')?.value || 'Endereco nao informado';
    const subtotal = getCartTotal();
    const delivery = subtotal >= 50 ? 0 : 7.99;
    const total = subtotal + delivery;

    // Agrupa itens por loja
    const storeGroups = {};
    cart.forEach(item => {
        if (!storeGroups[item.storeId]) storeGroups[item.storeId] = [];
        storeGroups[item.storeId].push(item);
    });

    // Cria um pedido por loja (simplificado: primeiro grupo)
    const firstStoreId = Object.keys(storeGroups)[0];
    const items = storeGroups[firstStoreId];
    const store = stores.find(s => s.id === firstStoreId);

    const orderData = {
        clientId: user.uid,
        clientName: clientData.name,
        clientAddress: address,
        clientCity: userCity,
        storeId: firstStoreId,
        storeName: store?.name || '',
        driverId: null,
        driverName: null,
        items: items.map(i => ({
            productId: i.productId,
            name: i.name,
            emoji: i.emoji,
            price: i.price,
            qty: i.qty
        })),
        subtotal: subtotal,
        deliveryFee: delivery,
        total: total,
        status: 'pending',
        payment: {
            method: selectedPayment,
            pixCode: null,
            paid: false
        },
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        const docRef = await db.collection('orders').add(orderData);
        currentOrderId = docRef.id;

        // Se for PIX, mostra tela de pagamento
        if (selectedPayment === 'pix') {
            showPixPayment(docRef.id, total);
        } else {
            document.querySelector('.success-order-id').textContent = 'Pedido #' + docRef.id;
            navigateTo('success');
        }

        // Limpa carrinho da loja que foi pedida
        cart = cart.filter(i => i.storeId !== firstStoreId);
        updateCartBadge();

        // Notifica loja (salva notificacao no Firestore)
        await sendNotification(store?.ownerId || 'admin', 'Novo pedido!', `Pedido #${docRef.id} recebido`);

    } catch (err) {
        console.error('Erro ao criar pedido:', err);
        showToast('Erro ao finalizar pedido. Tente novamente.');
    }
}

async function showPixPayment(orderId, amount) {
    const pixConfig = await loadAdminPixKey();
    const pix = generatePixCode(pixConfig.pixKey, pixConfig.receiverName, pixConfig.receiverCity, amount, `Pedido ${orderId}`);

    // Atualiza o pedido com o codigo PIX
    await db.collection('orders').doc(orderId).update({ 'payment.pixCode': pix.code });

    const content = document.getElementById('checkout-content');
    content.innerHTML = `
        <div class="pix-screen">
            <div class="pix-qr">
                <h3 style="font-family:'Sora',sans-serif;margin-bottom:12px">Pague com PIX</h3>
                <img src="${generatePixQRCodeUrl(pix.code, 220)}" alt="QR Code PIX" onerror="this.style.display='none'">
                <p style="color:var(--text-2);font-size:0.85rem;margin-top:8px">Escaneie o QR Code no seu app bancario</p>
            </div>
            <div class="pix-code-box">
                <pre>${pix.code}</pre>
            </div>
            <button class="pix-copy-btn" onclick="copyPixAndNotify('${pix.code.replace(/'/g, "\\'")}')">Copiar codigo PIX</button>
            <button class="pix-paid-btn" onclick="markOrderPaid('${orderId}')">Ja paguei</button>
            <p style="text-align:center;color:var(--text-3);font-size:0.78rem;margin-top:12px">Pedido: #${orderId}</p>
        </div>
    `;
}

async function copyPixAndNotify(code) {
    await copyPixCode(code);
    showToast('Codigo PIX copiado!');
}

async function markOrderPaid(orderId) {
    try {
        await db.collection('orders').doc(orderId).update({
            'payment.paid': true,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        document.querySelector('.success-order-id').textContent = 'Pedido #' + orderId;
        navigateTo('success');
        showToast('Pagamento confirmado!');
    } catch (err) {
        showToast('Erro ao confirmar pagamento');
    }
}

// Listener de pedido em tempo real
function listenOrderStatus(orderId) {
    if (orderUnsubscribe) orderUnsubscribe();
    orderUnsubscribe = db.collection('orders').doc(orderId).onSnapshot((doc) => {
        if (!doc.exists) return;
        const order = doc.data();
        // Atualiza tracker na tela de perfil se visivel
        const tracker = document.getElementById('active-order-tracker');
        if (tracker) {
            updateTrackerUI(tracker, order.status);
        }
    });
}

function updateTrackerUI(el, status) {
    const steps = ['pending','accepted','preparing','ready','in_transit','delivered'];
    const idx = steps.indexOf(status);
    const labels = {
        pending: 'Aguardando confirmacao',
        accepted: 'Pedido aceito',
        preparing: 'Em preparacao',
        ready: 'Pronto para entrega',
        in_transit: 'Saiu para entrega',
        delivered: 'Entregue',
        cancelled: 'Cancelado'
    };
    // Atualiza texto
    const statusText = el.querySelector('.tracker-status-text');
    if (statusText) statusText.textContent = labels[status] || status;
}

// Sobrescreve logout no perfil para usar Firebase
const originalRenderPerfil = renderPerfil;
renderPerfil = function() {
    originalRenderPerfil();
    // Substitui o onclick do botao sair
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = logoutUser;
    }
};

// ========================================
// PAINEL DO CLIENTE - FUNCOES ADICIONAIS
// ========================================

/**
 * Mostra os pedidos do cliente logado
 */
async function showMyOrders() {
    const user = getCurrentUser();
    if (!user) {
        showToast('Faca login para ver seus pedidos');
        return;
    }

    showToast('Carregando pedidos...');

    try {
        const snapshot = await db.collection('orders')
            .where('clientId', '==', user.uid)
            .orderBy('createdAt', 'desc')
            .get();

        const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const content = document.getElementById('perfil-content');
        if (!content) return;

        const statusLabels = {
            pending: { text: 'Aguardando', color: '#F59E0B' },
            accepted: { text: 'Aceito', color: '#3B82F6' },
            preparing: { text: 'Preparando', color: '#8B5CF6' },
            ready: { text: 'Pronto', color: '#06B6D4' },
            in_transit: { text: 'Em entrega', color: '#FF4D00' },
            delivered: { text: 'Entregue', color: '#22C55E' },
            cancelled: { text: 'Cancelado', color: '#EF4444' }
        };

        let html = `
            <div class="page-header" style="padding:16px 20px;background:var(--surface);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">
                <button class="back-btn" onclick="renderPerfil()">←</button>
                <h2 style="font-family:'Sora',sans-serif;font-size:1.1rem">Meus Pedidos</h2>
            </div>
            <div style="padding:16px">
        `;

        if (orders.length === 0) {
            html += `
                <div style="text-align:center;padding:60px 20px;color:var(--text-3)">
                    <div style="font-size:3rem;margin-bottom:16px">📭</div>
                    <h3 style="font-family:'Sora',sans-serif;color:var(--text);margin-bottom:8px">Nenhum pedido ainda</h3>
                    <p>Faca seu primeiro pedido e ele aparecera aqui!</p>
                </div>
            `;
        } else {
            orders.forEach(order => {
                const s = statusLabels[order.status] || statusLabels.pending;
                const date = order.createdAt ? new Date(order.createdAt.toDate()).toLocaleDateString('pt-BR') : 'Data nao disponivel';
                const items = order.items ? order.items.map(i => `${i.emoji} ${i.name} x${i.qty}`).join(', ') : '';

                html += `
                    <div style="background:var(--surface);border-radius:var(--radius);padding:16px;margin-bottom:12px;border:1px solid var(--border)">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                            <strong style="font-family:'Sora',sans-serif">Pedido #${order.id.slice(-6).toUpperCase()}</strong>
                            <span style="background:${s.color}20;color:${s.color};padding:4px 10px;border-radius:20px;font-size:0.75rem;font-weight:600">${s.text}</span>
                        </div>
                        <p style="font-size:0.85rem;color:var(--text-2);margin-bottom:8px">${order.storeName || 'Loja'}</p>
                        <p style="font-size:0.8rem;color:var(--text-3);margin-bottom:8px">${items}</p>
                        <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.85rem">
                            <span style="color:var(--text-3)">${date}</span>
                            <strong style="color:var(--primary)">R$ ${(order.total || 0).toFixed(2).replace('.', ',')}</strong>
                        </div>
                    </div>
                `;
            });
        }

        html += '</div>';
        content.innerHTML = html;

    } catch (err) {
        console.error('Erro ao carregar pedidos:', err);
        showToast('Erro ao carregar pedidos. Tente novamente.');
    }
}

/**
 * Editar perfil do cliente
 */
function editProfile() {
    const user = getCurrentUser();
    if (!user) {
        showToast('Faca login para editar seu perfil');
        return;
    }

    const content = document.getElementById('perfil-content');
    if (!content) return;

    content.innerHTML = `
        <div class="page-header" style="padding:16px 20px;background:var(--surface);border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">
            <button class="back-btn" onclick="renderPerfil()">←</button>
            <h2 style="font-family:'Sora',sans-serif;font-size:1.1rem">Editar Perfil</h2>
        </div>
        <div style="padding:20px">
            <div class="form-group" style="margin-bottom:16px">
                <label style="display:block;margin-bottom:6px;font-weight:500;font-size:0.9rem">Nome completo</label>
                <input type="text" id="edit-name" value="${clientData.name || ''}" style="width:100%;padding:12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-family:inherit;font-size:0.95rem;background:var(--surface)">
            </div>
            <div class="form-group" style="margin-bottom:16px">
                <label style="display:block;margin-bottom:6px;font-weight:500;font-size:0.9rem">Telefone</label>
                <input type="tel" id="edit-phone" value="${clientData.phone || ''}" style="width:100%;padding:12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-family:inherit;font-size:0.95rem;background:var(--surface)">
            </div>
            <div class="form-group" style="margin-bottom:16px">
                <label style="display:block;margin-bottom:6px;font-weight:500;font-size:0.9rem">Cidade</label>
                <input type="text" id="edit-city" value="${userCity || ''}" style="width:100%;padding:12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-family:inherit;font-size:0.95rem;background:var(--surface)">
            </div>
            <button class="btn-primary" onclick="saveProfile()" style="width:100%;padding:14px;margin-top:8px">Salvar alteracoes</button>
            <p id="edit-error" style="color:var(--danger);text-align:center;margin-top:12px;font-size:0.85rem"></p>
        </div>
    `;
}

async function saveProfile() {
    const user = getCurrentUser();
    if (!user) return;

    const name = document.getElementById('edit-name').value.trim();
    const phone = document.getElementById('edit-phone').value.trim();
    const city = document.getElementById('edit-city').value.trim();
    const errorEl = document.getElementById('edit-error');

    if (!name) {
        errorEl.textContent = 'Digite seu nome';
        return;
    }

    try {
        await db.collection('users').doc(user.uid).update({
            name: name,
            phone: phone,
            city: city
        });

        // Atualiza local
        clientData.name = name;
        clientData.phone = phone;
        userCity = city;
        localStorage.setItem('dg_city', city);

        showToast('Perfil atualizado com sucesso!');
        renderPerfil();
    } catch (err) {
        console.error('Erro ao salvar perfil:', err);
        errorEl.textContent = 'Erro ao salvar. Tente novamente.';
    }
}

// ========================================
// ADMIN PANEL - CORRECOES
// ========================================

/**
 * Funcoes para o admin que faltavam
 */
function showAdminStores() {
    showToast('Carregando lojas...');
    // Redireciona para a aba gestao
    if (typeof showTab === 'function') {
        showTab('gestao');
    }
}

function showAdminDrivers() {
    showToast('Carregando entregadores...');
    if (typeof showTab === 'function') {
        showTab('gestao');
    }
}

function showAdminOrders() {
    showToast('Carregando pedidos...');
    if (typeof showTab === 'function') {
        showTab('financeiro');
    }
}

function showAdminClients() {
    showToast('Carregando clientes...');
    if (typeof showTab === 'function') {
        showTab('gestao');
    }
}

function showAdminConfig() {
    showToast('Abrindo configuracoes...');
    if (typeof showTab === 'function') {
        showTab('config');
    }
}

// Hook perfil render into navigation - ADICIONADO NO FINAL DO ARQUIVO
const _prevNavigateTo = navigateTo;
navigateTo = function(page, data) {
    _prevNavigateTo(page, data);
    if (page === 'perfil') {
        renderPerfil();
    }
};


