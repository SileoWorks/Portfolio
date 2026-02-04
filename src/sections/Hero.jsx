import '../index.css';
import heroBg from '../assets/full_black_1.jpeg';

export default function Hero() {
    const heroStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        color: '#fff',
    };

    const backgroundLayerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for readability
        zIndex: -1,
    };

    const titleStyle = {
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        letterSpacing: '0.15em',
        marginBottom: '24px',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontFamily: '"Playfair Display", serif',
        textShadow: '0 4px 30px rgba(0,0,0,0.5)',
    };

    const subtitleStyle = {
        fontSize: '1rem',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '300',
    };

    return (
        <section style={heroStyle}>
            <div style={backgroundLayerStyle} />
            <div style={overlayStyle} />

            <h1 style={titleStyle} className="fade-in">Léon</h1>
            <p className="fade-in" style={{ ...subtitleStyle, animationDelay: '0.2s' }}>
                Modèle Professionnel · Paris
            </p>
        </section>
    );
}
