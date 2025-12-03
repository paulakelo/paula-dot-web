import "./TechStackMarquee.css";

export default function TechStackMarquee() {
    // Comprehensive technical stack including all skills
    const technologies = [
        // Web & Backend
        {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            color: "#E34F26"
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            color: "#1572B6"
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#F7DF1E"
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "#61DAFB"
        },
        {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            color: "#777BB4"
        },
        {
            name: "Go",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            color: "#00ADD8"
        },
        {
            name: "Gin",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            color: "#008ECF"
        },
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            color: "#3776AB"
        },
        {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            color: "#092E20"
        },
        {
            name: "FastAPI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            color: "#009688"
        },
        {
            name: "REST API",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            color: "#FF6F00"
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            color: "#2496ED"
        },
        // Machine Learning & AI
        {
            name: "Scikit-Learn",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            color: "#F7931E"
        },
        {
            name: "Pandas",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
            color: "#150458"
        },
        {
            name: "NumPy",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            color: "#4DABCF"
        },
        // Database Technologies
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            color: "#316192"
        },
        {
            name: "PostGIS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            color: "#4288B0"
        },
        {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            color: "#DC382D"
        },
        {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            color: "#07405E"
        },
        // GIS & Geospatial
        {
            name: "QGIS",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/QGIS_logo%2C_2017.svg",
            color: "#589632"
        },
        {
            name: "GRASS GIS",
            icon: "https://grass.osgeo.org/images/logos/grasslogo.svg",
            color: "#77B829"
        },
        // Tools
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            color: "#F05032"
        },
        {
            name: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            color: "#FCC624"
        }
    ];

    // Duplicate array for seamless infinite scroll
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <section className="tech-stack-marquee-section">
            <div className="tech-stack-marquee-container">
                <h2 className="tech-stack-title">Technical Stack</h2>

                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {duplicatedTech.map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="tech-item"
                                style={{"--tech-color": tech.color}}
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="tech-icon"
                                />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

