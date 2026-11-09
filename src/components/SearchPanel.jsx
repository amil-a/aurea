import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import Img from './Img';
import { formatPrice } from '../data/products';

const suggestions = ['Linen', 'Ceramic', 'Leather', 'Wool'];

export default function SearchPanel({ open, products, onClose, onSelect }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
    const reset = setTimeout(() => setQuery(''), 400);
    return () => clearTimeout(reset);
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      q
        ? products.filter((p) =>
            [p.name, p.category, p.description].some((f) => f.toLowerCase().includes(q))
          )
        : [],
    [q, products]
  );

  return (
    <div className={`layer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="layer__scrim" onClick={onClose} />
      <div className="search" role="dialog" aria-modal="true" aria-label="Search products">
        <div className="search__inner container">
          <div className="search__bar">
            <Search size={22} strokeWidth={1.5} aria-hidden="true" />
            <label htmlFor="search-input" className="sr-only">Search products</label>
            <input
              id="search-input"
              ref={inputRef}
              type="search"
              placeholder="Search for linen, ceramic, leather…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button className="icon-btn" aria-label="Close search" onClick={onClose}>
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {!q && (
            <div className="search__suggest">
              <span>Popular:</span>
              {suggestions.map((s) => (
                <button key={s} className="filter" onClick={() => setQuery(s)}>{s}</button>
              ))}
            </div>
          )}

          {q && results.length > 0 && (
            <>
              <p className="search__count" aria-live="polite">
                {results.length} {results.length === 1 ? 'piece' : 'pieces'} found
              </p>
              <ul className="search__results">
                {results.map((p) => (
                  <li key={p.id}>
                    <button className="search-item" onClick={() => onSelect(p)}>
                      <Img src={p.image} alt={p.name} />
                      <span className="search-item__name">{p.name}</span>
                      <span className="search-item__meta">{p.category} · {formatPrice(p.price)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {q && results.length === 0 && (
            <div className="search__empty" aria-live="polite">
              <p className="search__empty-title">Nothing found for “{query.trim()}”</p>
              <p>Try a different word, or browse by category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
