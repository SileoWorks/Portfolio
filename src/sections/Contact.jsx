import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-text">
                    Pour toute demande de collaboration, de projet ou simplement pour échanger,<br />
                    n'hésitez pas à me contacter.
                </p>

                <div className="contact-methods">
                    <div className="contact-card">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <h3 className="contact-label">Email</h3>
                        <a href="mailto:contact.tsielo@gmail.com" className="contact-link">contact.tsielo@gmail.com</a>
                    </div>

                    <div className="contact-card">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                        <h3 className="contact-label">Téléphone</h3>
                        <a href="tel:+33640335418" className="contact-link">+33 6 40 33 54 18</a>
                    </div>

                    <div className="contact-card">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        <h3 className="contact-label">Instagram</h3>
                        <a href="https://www.instagram.com/be.tsielo/" target="_blank" rel="noreferrer" className="contact-link">@be.tsielo</a>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Copyright © {new Date().getFullYear()} Léon. Tous droits réservés.</p>
                </div>
            </div>
        </section>
    );
}
