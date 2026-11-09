import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import Img from './Img';
import { formatPrice } from '../data/products';

export default function CartDrawer({ open, items, subtotal, onClose, onQty, onRemove, onCheckout }) {
  return (
    <div className={`layer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="layer__scrim" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <header className="drawer__head">
          <h2>Your bag <span>({items.reduce((n, i) => n + i.qty, 0)})</span></h2>
          <button className="icon-btn" aria-label="Close bag" onClick={onClose}>
            <X size={22} strokeWidth={1.5} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <ShoppingBag size={36} strokeWidth={1} />
            <p>Your bag is empty.</p>
            <a href="#shop" className="btn btn--ghost" onClick={onClose}>Continue shopping</a>
          </div>
        ) : (
          <>
            <ul className="drawer__items">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="cart-item">
                  <Img src={product.image} alt={product.name} className="cart-item__img" />
                  <div className="cart-item__body">
                    <div className="cart-item__top">
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                      </div>
                      <p className="cart-item__price">{formatPrice(product.price * qty)}</p>
                    </div>
                    <div className="cart-item__bottom">
                      <div className="qty" role="group" aria-label={`Quantity for ${product.name}`}>
                        <button aria-label="Decrease quantity" onClick={() => onQty(product.id, -1)} disabled={qty <= 1}>
                          <Minus size={14} />
                        </button>
                        <span aria-live="polite">{qty}</span>
                        <button aria-label="Increase quantity" onClick={() => onQty(product.id, 1)} disabled={qty >= 10}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="link-btn" onClick={() => onRemove(product.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="drawer__foot">
              <div className="drawer__subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping and taxes calculated at checkout.</p>
              <button className="btn btn--primary btn--block" onClick={onCheckout}>Checkout</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
