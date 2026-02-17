import './ContactSection.css';

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo behavior: replace with real submit integration as needed
        alert('Message sent (demo) — thank you!');
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-card">
                <div className="contact-left" aria-hidden="false">
                    <div className="email-block">
                        {/* Email icon */}
                        <svg
                            className="email-icon"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M3 7.5C3 6.11929 4.11929 5 5.5 5H18.5C19.8807 5 21 6.11929 21 7.5V16.5C21 17.8807 19.8807 19 18.5 19H5.5C4.11929 19 3 17.8807 3 16.5V7.5Z" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 7.5L12 13L3 7.5" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <a className="email-link" href="mailto:degrante77@gmail.com">degrante77@gmail.com</a>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Brief subject"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project or what you'd like help with..."
                                required
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button type="submit" className="send-button">
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
