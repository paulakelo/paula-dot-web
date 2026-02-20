import React from 'react'
import './TechStack.css'

export default function TechStack({ categories = [] }) {
  if (!categories || categories.length === 0) return null

  return (
    <section className="techstack-section" aria-labelledby="techstack-heading">
      <div className="techstack-inner">
        <h3 id="techstack-heading" className="techstack-title">Tech Stack</h3>
        <div className="techstack-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="tech-category">
              <h4 className="tech-category__title">{cat.title}</h4>
              <ul className="tech-list">
                {cat.tech.map((item, idx) => (
                  <li key={idx} className="tech-list-item">
                    {item.href ? (
                      <a
                        className="tech-pill"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon ? (
                          <img src={item.icon} alt="" className="tech-pill-icon" />
                        ) : null}
                        {item.name}
                      </a>
                    ) : (
                      <span className="tech-pill" tabIndex={0} aria-label={item.name}>
                        {item.icon ? (
                          <img src={item.icon} alt="" className="tech-pill-icon" />
                        ) : null}
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
