import CategoryCard from './CategoryCard';
import { categories } from '../data/products';

export default function CategorySection({ onSelect }) {
  return (
    <section id="collections" className="section container">
      <header className="section__head">
        <p className="eyebrow">Collections</p>
        <h2 className="section__title">Explore the collection</h2>
      </header>
      <div className="category-grid">
        {categories.map((c) => (
          <CategoryCard key={c.name} category={c} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
