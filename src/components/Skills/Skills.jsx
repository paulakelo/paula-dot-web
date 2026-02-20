import './Skills.css'

export default function Skills({ data }) {
    const handleImgError = (e, fallback) => {
        if (fallback && e.target.src !== fallback) {
            e.target.src = fallback
        }
    }

    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-title">My Skills</h2>

            <div className="skills-grid">
                {data.map((categoryData, idx) => (
                    <div key={idx} className="skills-card">
                        <h3 className="skills-card-title">{categoryData.category}</h3>

                        <ul className="skills-list">
                            {categoryData.skills.map((skill, index) => {
                                const slug = (skill.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
                                const localIcon = `/assets/icons/${slug}.svg`
                                return (
                                    <li
                                        key={index}
                                        className="skills-list-item"
                                    >
                                        <img
                                            src={localIcon}
                                            alt={skill.name}
                                            className="skill-badge"
                                            loading="lazy"
                                            decoding="async"
                                            role="img"
                                            width="64"
                                            height="64"
                                            onError={(e) => handleImgError(e, skill.logo)}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}