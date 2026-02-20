import './Footer.css'

export function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                  <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Paul Akelo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}