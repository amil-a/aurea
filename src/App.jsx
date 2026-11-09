import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SearchPanel from './components/SearchPanel';
import EditorialBanner from './components/EditorialBanner';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import { products, categories } from './data/products';

const FILTERS = ['All', ...categories.map((c) => c.name)];

export default function App() {
  const [cart, setCart] = useState([]); // [{ id, qty }]
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [showAllNew, setShowAllNew] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimer = useRef();

  const showToast = useCallback((message) => {
    clearTimeout(toastTimer.current);
    setToast({ message, visible: true });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2800);
  }, []);

  // ---- cart ----
  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, 10) } : i));
      }
      return [...prev, { id: product.id, qty }];
    });
    showToast(`${product.name} added to your bag`);
  }, [showToast]);

  const changeQty = (id, delta) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.min(10, Math.max(1, i.qty + delta)) } : i)));
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const cartItems = useMemo(
    () => cart.map((i) => ({ product: products.find((p) => p.id === i.id), qty: i.qty })),
    [cart]
  );
  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  const toggleWish = (id) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // ---- overlays ----
  const closeAll = useCallback(() => {
    setCartOpen(false);
    setSearchOpen(false);
    setMenuOpen(false);
    setModalOpen(false);
  }, []);

  const openCart = () => { closeAll(); setCartOpen(true); };
  const openSearch = () => { closeAll(); setSearchOpen(true); };
  const toggleMenu = () => { const next = !menuOpen; closeAll(); setMenuOpen(next); };
  const openProduct = (product) => {
    closeAll();
    setActiveProduct(product);
    setModalOpen(true);
  };

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeAll();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeAll]);

  const locked = cartOpen || searchOpen || menuOpen || modalOpen;
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [locked]);

  // ---- derived product lists ----
  const shopProducts = useMemo(
    () => (category === 'All' ? products.filter((p) => p.featured) : products.filter((p) => p.category === category)),
    [category]
  );
  const newProducts = useMemo(() => products.filter((p) => p.isNew), []);
  const visibleNew = showAllNew ? newProducts : newProducts.slice(0, 4);

  const cardHandlers = { wishlist, onOpen: openProduct, onAdd: addToCart, onWish: toggleWish };

  return (
    <div id="top">
      <Navbar
        cartCount={cartCount}
        menuOpen={menuOpen}
        onSearch={openSearch}
        onAccount={() => showToast('Accounts are available in the full store.')}
        onCart={openCart}
        onMenu={toggleMenu}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <CategorySection onSelect={setCategory} />

        <ProductGrid
          id="shop"
          eyebrow="The edit"
          title="Selected pieces"
          products={shopProducts}
          filters={FILTERS}
          activeFilter={category}
          onFilter={setCategory}
          {...cardHandlers}
        />

        <EditorialBanner />

        <ProductGrid
          id="new"
          eyebrow="Just in"
          title="New arrivals"
          products={visibleNew}
          action={
            newProducts.length > 4 && (
              <button className="text-link" onClick={() => setShowAllNew((v) => !v)}>
                {showAllNew ? 'Show less' : 'View all'} <ArrowRight size={16} className="btn__arrow" />
              </button>
            )
          }
          {...cardHandlers}
        />

        <AboutSection />
        <Newsletter />
      </main>

      <Footer />

      <SearchPanel
        open={searchOpen}
        products={products}
        onClose={() => setSearchOpen(false)}
        onSelect={openProduct}
      />
      <ProductModal
        product={activeProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addToCart}
      />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onRemove={removeFromCart}
        onCheckout={() => showToast('Checkout is available in the full store.')}
      />
      <BackToTop />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}
