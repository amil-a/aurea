import { ArrowRight } from 'lucide-react';
import Img from './Img';
import { images } from '../data/products';

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="eyebrow reveal" style={{ '--d': '0ms' }}>New Collection — 2026</p>
        <h1 id="hero-title" className="hero__title reveal" style={{ '--d': '100ms' }}>
          <span>Designed</span> <span>for everyday</span> <span>rituals.</span>
        </h1>
        <p className="hero__copy reveal" style={{ '--d': '220ms' }}>
          A quiet collection of linen, clay, leather and wool — made in small batches
          and chosen to be lived with, not replaced.
        </p>
        <div className="hero__cta reveal" style={{ '--d': '340ms' }}>
          <a href="#shop" className="btn btn--primary">
            Shop Collection <ArrowRight size={16} className="btn__arrow" />
          </a>
          <a href="#collections" className="btn btn--ghost">Explore</a>
        </div>
      </div>

      <div className="hero__media reveal-image">
        <Img src={images.hero} alt="Model wearing a relaxed neutral linen outfit" eager />
      </div>
    </section>
  );
}
