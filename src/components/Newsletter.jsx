import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setEmail('');
  };

  return (
    <section className="section container newsletter" aria-labelledby="news-title">
      <div className="newsletter__box">
        <h2 id="news-title" className="section__title">Stay in the know.</h2>
        <p className="newsletter__copy">
          Receive occasional notes on new collections, materials, and things worth keeping.
        </p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setDone(false); }}
          />
          <button type="submit" className="btn btn--primary">Subscribe</button>
        </form>

        <p className={`newsletter__thanks ${done ? 'is-visible' : ''}`} role="status" aria-live="polite">
          {done ? 'Thank you for subscribing.' : ''}
        </p>
      </div>
    </section>
  );
}
