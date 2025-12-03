import './Skills.css'

export default function Skills({ data }) {
    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-title">My Skills</h2>

            <div className="skills-grid">
                {data.map((categoryData, idx) => (
                    <div key={idx} className="skills-card">
                        <h3 className="skills-card-title">{categoryData.category}</h3>

                        <ul className="skills-list">
                            {categoryData.skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="skills-list-item"
                                >
                                    <img src={skill.logo} alt={skill.name} className="skill-badge" />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}