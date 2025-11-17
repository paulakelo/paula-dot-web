export function HomePage() {
    return (
        <>
        <title>Paul Akelo</title>

        <div className="page-root bg-bg text-fg">
        <header>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">
                        <a href="/" className="brand">
                            <img src="/assets/images/paula_dot_icon.png" alt="Paula-dot logo"/>
                        </a>
                    </h1>
                    <ul className="nav-links">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/projects.html">Projects</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section className="hero bg-gradient-to-r from-[#bf1cff] to-[#007185]">
                <div className="hero-text">
                    <h2>Hello, I'm Paul Akelo</h2>
                    <p>Aspiring data scientist and GIS developer building impacting visuals and insights.</p>
                    <a href="/projects.html" className="btn">View my work</a>
                </div>
            </section>

            <section className="skills">
                <h3>Key Skills</h3>
                <div className="skills-grid">
                    <div className="skill-card">HTML & CSS</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">Python</div>
                    <div className="skill-card">SQL</div>
                </div>
            </section>
        </main>

        <footer className="footer">
            <p>&copy; 2024 Paul Akelo. All rights reserved.</p>
        </footer>

        </div>
        </>
    );
}