import ScenicPlaceholder from "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";
import "./ScenicRender.css";

export default function ScenicRender() {
    return (
        <section className="scenic-section">
            <div className="scenic-layout">
                <div className="scenic-copy">
                    <p className="scenic-eyebrow">Geospatial storytelling</p>
                    <h2 className="scenic-title">Scenic Kasipul Render</h2>
                    <p className="scenic-description">
                        A render inspired by the rolling landscapes of Kasipul Constituency—blending terrain, vegetation,
                        and settlements into a single frame. It hints at how I approach GIS work: balancing data accuracy
                        with visual clarity so insight feels tangible.
                    </p>
                </div>

                <div className="scenic-visual">
                    <img
                        src={ScenicPlaceholder}
                        alt="Kasipul Constituency scenic render"
                        className="scenic-image"
                    />
                    <div className="scenic-caption">
                        <span className="scenic-location">Kasipul, Kenya</span>
                        <span className="scenic-tag">GIS concept art</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
