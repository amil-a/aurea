import { ArrowUpRight } from 'lucide-react';
import Img from './Img';

export default function CategoryCard({ category, onSelect }) {
  return (
    <a href="#shop" className="category-card" onClick={() => onSelect(category.name)}>
      <Img src={category.image} alt={`${category.name} collection`} />
      <span className="category-card__overlay" />
      <span className="category-card__label">
        <span>{category.name}</span>
        <ArrowUpRight size={20} strokeWidth={1.5} className="category-card__arrow" aria-hidden="true" />
      </span>
    </a>
  );
}
