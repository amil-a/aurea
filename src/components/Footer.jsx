import { footerColumns } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#top" className="logo logo--light">AUREA</a>
          <p>Objects for slower living.</p>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.title} className="footer__col" aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer__bottom container">
        <p>© 2026 AUREA. All rights reserved.</p>
      </div>
    </footer>
  );
}
