import './AboutSection.css'
import services from './services'
import TechStack from '../TechStack/TechStack'
import skillsData from '../../data/skills.json'

export default function AboutSection() {
    // Map skills.json structure to TechStack's expected prop shape
    const techCategories = skillsData.map((cat) => ({
        id: (cat.category || cat.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: cat.category || cat.title,
        tech: (cat.skills || []).map((s) => ({ name: s.name, href: s.link || undefined, icon: s.logo || undefined }))
    }))

    return (
        <section className="section-wrapper page-about" id="about">
            {/* Non-visible anchor to support links that target #letsAbout */}
            <a id="letsAbout" style={{ display: 'block', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true" />
            <div className="section-container page-inner">
                {/* SECTION 1: HERO - About Me + Avatar */}
                <div className="about-hero">
                    <div className="about-bio">
                        <div className="bio-block">
                            <h2 className="page-title">About Me</h2>
                            <p className="bio-statement">
                                I specialize in designing and building scalable backend systems,
                                data pipelines, and infrastructure automation tools. My work emphasizes
                                reliability, performance, and clean system architecture. Outside of backend engineering, I have a passion for Geospatial Data Science and GIS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Insert the services grid here (no title) */}
                <div className="mt-12">
                    <div className="services-grid">
                        {services.map((service, index) => {
                            // create a slug from the title to use as a per-service modifier class
                            const slug = (service.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
                            return (
                                <div key={index} className={`service-card service-card--${slug}`}>
                                    <div className="service-icon-wrap">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Render TechStack directly under the services grid */}
                    <TechStack categories={techCategories} />
                </div>

            </div>
        </section>
    );
}
