import { NavLink } from "react-router-dom";
import './Header.css'

export function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <h1 className="logo">
                        <NavLink to="/" className="brand" >
                            {/**
                             * Use Vite's BASE_URL so the logo works regardless of deploy base path
                             * (e.g., Vercel previews or custom base). The file lives under public/assets.
                             */}
                            <img src={`${import.meta.env.BASE_URL}assets/paula_dot_icon.png`} alt="Paula-dot logo"/>
                        </NavLink>
                    </h1>
                    <ul className="nav-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}