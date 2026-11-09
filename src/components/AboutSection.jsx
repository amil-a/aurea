import Img from './Img';
import { images } from '../data/products';

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__inner container">
        <div className="about__media">
          <Img src={images.about} alt="A calm, light-filled interior with natural textures" />
        </div>
        <div className="about__text">
          <p className="eyebrow">About AUREA</p>
          <h2 className="section__title about__title">Less, but better.</h2>
          <p>
            AUREA creates considered pieces for everyday living — objects designed with
            restraint, purpose, and longevity in mind.
          </p>
          <ul className="about__facts">
            <li><strong>Natural materials</strong><span>Linen, clay, leather, wool</span></li>
            <li><strong>Small batches</strong><span>Made in limited runs</span></li>
            <li><strong>Built to last</strong><span>Repairable and timeless</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
