import polas_face from '../assets/polas_face.JPG';

export default function About() {
    const sectionStyle = {
        padding: '120px 24px',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
    };

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        maxWidth: '1200px',
        width: '100%',
        alignItems: 'center',
    };

    const imageWrapperStyle = {
        width: '100%',
        aspectRatio: '3/4',
        overflow: 'hidden',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    };

    const contentStyle = {
        color: '#fff',
    };

    const headingStyle = {
        fontSize: '3.5rem',
        marginBottom: '32px',
    };

    return (
        <section id="about" style={sectionStyle}>
            <div style={containerStyle}>
                <div style={imageWrapperStyle} className="fade-in">
                    <img src={polas_face} alt="Léon Portrait" style={imageStyle} />
                </div>
                <div style={contentStyle}>
                    <h2 className="text-responsive-h2" style={{ marginBottom: '32px' }}>À Propos</h2>
                    <p style={{ marginBottom: '24px', color: '#ccc', lineHeight: '1.8' }}>
                        Basé à Paris, je suis un modèle de 24 ans passionné par l’image, la photographie et la mise en scène.
                    </p>
                    <p style={{ marginBottom: '40px', color: '#ccc', lineHeight: '1.8' }}>
                        Ouvert à tous types de projets (éditoriaux, commerciaux, haute couture...), je m’investis avec sérieux et authenticité dans chaque collaboration.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '12px', fontSize: '0.9rem' }}>
                        <span style={{ color: '#666' }}>Taille:</span> <span>1m71</span>
                        <span style={{ color: '#666' }}>Cheveux:</span> <span>Noirs</span>
                        <span style={{ color: '#666' }}>Yeux:</span> <span>Noirs</span>
                        <span style={{ color: '#666' }}>Agence:</span> <span>New Face</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
