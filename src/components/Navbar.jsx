import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { navLinks } from '../data/navigation';

export default function Navbar({ cartCount, menuOpen, onSearch, onAccount, onCart, onMenu }) {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#top" className="logo" aria-label="AUREA home">AUREA</a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" aria-label="Search" onClick={onSearch}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn navbar__account" aria-label="Account" onClick={onAccount}>
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn" aria-label={`Open bag, ${cartCount} items`} onClick={onCart}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && <span key={cartCount} className="badge">{cartCount}</span>}
          </button>
          <button
            className="icon-btn navbar__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={onMenu}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </header>
  );
}
