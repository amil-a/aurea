import { navLinks } from '../data/navigation';

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <nav aria-label="Mobile">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-menu__link"
            style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mobile-menu__note">Objects for slower living.</p>
    </div>
  );
}
