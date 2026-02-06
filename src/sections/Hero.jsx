import '../index.css';
import heroBg from '../assets/full_black_1.jpeg';

export default function Hero() {
    const heroStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
    };

    // Immersive blurred background to fill the screen
    const blurOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(20px) brightness(0.4)',
        transform: 'scale(1.1)', // Prevents white edges from blur
        zIndex: -3,
    };

    // The actual photo, contained to show EVERYTHING
    const backgroundLayerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: -2,
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
        zIndex: -1,
    };

    const titleStyle = {
        fontSize: 'clamp(3.5rem, 12vw, 9rem)',
        letterSpacing: '0.2em',
        marginBottom: '16px',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontFamily: '"Playfair Display", serif',
        textShadow: '0 10px 30px rgba(0,0,0,1)',
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
            <div style={blurOverlayStyle} />
            <div style={backgroundLayerStyle} />
            <div style={overlayStyle} />

            <div className="fade-in" style={{ zIndex: 1 }}>
                <h1 style={titleStyle}>Léon</h1>
                <p style={subtitleStyle}>
                    Modèle Professionnel · Paris
                </p>
            </div>
        </section>
    );
}
