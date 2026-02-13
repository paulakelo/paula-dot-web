import './Header.css'

export function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">
                        <a href="#hero" className="brand" >
                            {/**
                             * Use Vite's BASE_URL so the logo works regardless of deploy base path
                             * (e.g., Vercel previews or custom base). The file lives under public/assets.
                             */}
                            <img src={`${import.meta.env.BASE_URL}assets/paula_dot_icon.png`} alt="Paula-dot logo"/>
                        </a>
                    </h1>
                    <ul className="nav-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}