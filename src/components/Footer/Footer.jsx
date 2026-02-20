import './Footer.css'

export function Footer() {
    return (
        <footer className="footer" id="footer">
            {/* full-bleed divider placed outside the centered container so it spans the entire viewport */}
            <hr className="footer-divider" />

            <div className="container">
                  <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Paul Akelo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}