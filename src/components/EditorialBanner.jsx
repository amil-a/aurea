import { ArrowRight } from 'lucide-react';
import Img from './Img';
import { images } from '../data/products';

export default function EditorialBanner() {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <Img src={images.banner} alt="" className="banner__image" />
      <div className="banner__scrim" />
      <div className="banner__content container">
        <p className="eyebrow eyebrow--light">The AUREA philosophy</p>
        <h2 id="banner-title" className="banner__title">Made to stay.</h2>
        <p className="banner__copy">Timeless pieces designed to become part of your everyday.</p>
        <a href="#about" className="btn btn--light">
          Discover More <ArrowRight size={16} className="btn__arrow" />
        </a>
      </div>
    </section>
  );
}
