import ProductCard from './ProductCard';

export default function ProductGrid({
  id, eyebrow, title, products, wishlist, onOpen, onAdd, onWish,
  filters, activeFilter, onFilter, action,
}) {
  return (
    <section id={id} className="section container">
      <header className="section__head section__head--row">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title">{title}</h2>
        </div>

        {filters && (
          <div className="filters" role="group" aria-label="Filter by category">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter ${activeFilter === f ? 'is-active' : ''}`}
                aria-pressed={activeFilter === f}
                onClick={() => onFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {action}
      </header>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            wished={wishlist.includes(p.id)}
            onOpen={onOpen}
            onAdd={onAdd}
            onWish={onWish}
          />
        ))}
      </div>
    </section>
  );
}
