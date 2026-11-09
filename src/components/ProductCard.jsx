import { Heart, ShoppingBag } from 'lucide-react';
import Img from './Img';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, wished, onOpen, onAdd, onWish }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <button
          className="product-card__open"
          onClick={() => onOpen(product)}
          aria-label={`Quick view ${product.name}`}
        >
          <Img src={product.image} alt={product.name} />
        </button>

        <button
          className={`wish-btn ${wished ? 'is-active' : ''}`}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => onWish(product.id)}
        >
          <Heart size={18} strokeWidth={1.5} fill={wished ? 'currentColor' : 'none'} />
        </button>

        <button className="product-card__add" onClick={() => onAdd(product)}>
          <ShoppingBag size={15} strokeWidth={1.75} /> Add to cart
        </button>
      </div>

      <div className="product-card__info">
        <div>
          <h3 className="product-card__name">
            <button onClick={() => onOpen(product)}>{product.name}</button>
          </h3>
          <p className="product-card__category">{product.category}</p>
        </div>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
