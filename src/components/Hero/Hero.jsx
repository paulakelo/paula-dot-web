import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-card">
                <div className="hero-container">
                {/* LEFT COLUMN: Text Content */}
                <div className="hero-content">

                    {/* Name */}
                    <p className="hero-name">Paul Akelo</p>

                    {/* Headline */}
                    <h1 className="hero-title">
                        <span className="title-line">Software Engineer</span>
                        <span className="title-line title-accent">Backend & Data Engineering</span>
                    </h1>

                    {/* Subtext */}
                    <p className="hero-subtext">
                        Building scalable backend systems, data pipelines, and REST APIs with a focus on
                        performance, reliability, and clean architecture. Specializing in
                        Go, Python, and PostgreSQL for high-throughput applications.
                    </p>

                    {/* CTAs */}
                    <div className="hero-cta">
                        <a href="/#projects" className="btn btn-primary" aria-label="View Projects section">
                            View Projects
                        </a>
                        <a href="/#contact" className="btn btn-outline" aria-label="Jump to Contact section">
                            Contact
                        </a>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
