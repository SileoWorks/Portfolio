import '../index.css';
import heroBg from '../assets/full_black_1.jpeg';

export default function Hero() {
    const heroStyle = {
        minHeight: '100vh',
        height: '160vh', // Tall hero to show the full portrait during scroll
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: '35vh', // Position text to frame the face
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
    };

    const backgroundLayerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        zIndex: -2,
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
        zIndex: -1,
    };

    const titleStyle = {
        fontSize: 'clamp(3.5rem, 12vw, 9rem)',
        letterSpacing: '0.2em',
        marginBottom: '16px',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontFamily: '"Playfair Display", serif',
        textShadow: '0 10px 30px rgba(0,0,0,0.8)',
        lineHeight: '1',
    };

    const subtitleStyle = {
        fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '300',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
    };

    return (
        <section id="hero" style={heroStyle}>
            <div style={backgroundLayerStyle} />
            <div style={overlayStyle} />

            <div className="fade-in" style={{ zIndex: 1 }}>
                <h1 style={titleStyle}>Léon</h1>
                <p style={subtitleStyle}>
                    Modèle Professionnel · Paris
                </p>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #hero {
                        height: 100vh !important;
                        padding-top: 45vh !important;
                    }
                }
            `}</style>
        </section>
    );
}
