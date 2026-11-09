import { useEffect, useRef, useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import Img from './Img';
import { formatPrice } from '../data/products';

function ModalBody({ product, onClose, onAdd, closeRef }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="modal__grid">
      <div className="modal__media">
        <Img src={product.image} alt={product.name} />
      </div>
      <div className="modal__info">
        <p className="eyebrow">{product.category}</p>
        <h2 id="modal-title" className="modal__title">{product.name}</h2>
        <p className="modal__price">{formatPrice(product.price)}</p>
        <p className="modal__desc">{product.description}</p>

        <div className="modal__row">
          <span className="modal__label">Quantity</span>
          <div className="qty" role="group" aria-label="Quantity">
            <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}>
              <Minus size={14} />
            </button>
            <span aria-live="polite">{qty}</span>
            <button aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))} disabled={qty >= 10}>
              <Plus size={14} />
            </button>
          </div>
        </div>

        <button className="btn btn--primary btn--block" onClick={() => { onAdd(product, qty); onClose(); }}>
          Add to cart — {formatPrice(product.price * qty)}
        </button>
        <p className="modal__meta">Free shipping over ₹5,000 · 14-day returns</p>
      </div>
      <button ref={closeRef} className="icon-btn modal__close" aria-label="Close quick view" onClick={onClose}>
        <X size={22} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default function ProductModal({ product, open, onClose, onAdd }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => closeRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open, product]);

  return (
    <div className={`layer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="layer__scrim" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {product && (
          <ModalBody key={product.id} product={product} onClose={onClose} onAdd={onAdd} closeRef={closeRef} />
        )}
      </div>
    </div>
  );
}
