import { useState } from 'react';
import cover from '../assets/cover.webp';
import portfolio2 from '../assets/portfolio-2.webp';
import polas1 from '../assets/polas_face.webp';
import polas_profil_droit from '../assets/polas_profil_droit.webp';
import polas_profil_gauche from '../assets/polas_profil_gauche.webp';
import polas_3_4 from '../assets/polas_3_4.webp';
import polas_plein_pied from '../assets/polas_plein_pied.webp';
import teyssah_face from '../assets/teyssah_face.webp';
import teyssah_2 from '../assets/teyssah_2.webp';
import teyssah_3 from '../assets/teyssah_3.webp';
import teyssah_4 from '../assets/teyssah_4.webp';
import entreprise_1 from '../assets/entreprise_1.webp';
import entreprise_2 from '../assets/entreprise_2.webp';
import full_black_1 from '../assets/full_black_1.webp';
import full_black_2 from '../assets/full_black_2.webp';
import orange_1 from '../assets/orange_1.webp';
import orange_2 from '../assets/orange_2.webp';
import orange_3 from '../assets/orange_3.webp';
import ami_black_1 from '../assets/ami_black_1.webp';
import ami_black_2 from '../assets/ami_black_2.webp';
import ami_black_3 from '../assets/ami_black_3.webp';
import cdg_1 from '../assets/cdg_1.webp';
import cdg_2 from '../assets/cdg_2.webp';
import cdg_3 from '../assets/cdg_3.webp';
import cdg_4 from '../assets/cdg_4.webp';
import purple_1 from '../assets/purple_1.webp';
import purple_2 from '../assets/purple_2.webp';
import interviewVideo from '../assets/interview_teyssah.MP4';






const projects = [

    { id: 7, category: 'POLAS', title: 'FACE', image: polas1 },
    { id: 9, category: 'POLAS', title: 'PROFIL DROIT', image: polas_profil_droit },
    { id: 10, category: 'POLAS', title: 'PROFIL GAUCHE', image: polas_profil_gauche },
    { id: 11, category: 'POLAS', title: '3/4', image: polas_3_4 },
    { id: 12, category: 'POLAS', title: 'PLEIN PIED', image: polas_plein_pied },




    { id: 1, category: 'ÉDITORIAL MODE', title: 'teyssah_1', image: teyssah_face },
    { id: 5, category: 'ÉDITORIAL MODE', title: 'teyssah_2', image: teyssah_2 },
    { id: 13, category: 'ÉDITORIAL MODE', title: 'teyssah_3', image: teyssah_3 },
    { id: 14, category: 'ÉDITORIAL MODE', title: 'teyssah_4', image: teyssah_4 },
    { id: 3, category: 'ÉDITORIAL MODE', title: 'def_1', image: entreprise_1 },
    { id: 4, category: 'ÉDITORIAL MODE', title: 'def_2', image: entreprise_2 },
    { id: 22, category: 'ÉDITORIAL MODE', title: 'purple_1', image: purple_1 },
    { id: 23, category: 'ÉDITORIAL MODE', title: 'purple_2', image: purple_2 },




    { id: 2, category: 'MODE CONTEMPORAIN', title: 'cdg_1', image: cdg_1 },
    { id: 19, category: 'MODE CONTEMPORAIN', title: 'cdg_2', image: cdg_2 },
    { id: 20, category: 'MODE CONTEMPORAIN', title: 'cdg_3', image: cdg_3 },
    { id: 21, category: 'MODE CONTEMPORAIN', title: 'cdg_4', image: cdg_4 },
    { id: 2, category: 'MODE CONTEMPORAIN', title: 'full_black_1', image: full_black_1 },
    { id: 6, category: 'MODE CONTEMPORAIN', title: 'full_black_2', image: full_black_2 },
    { id: 15, category: 'MODE CONTEMPORAIN', title: 'acg_1', image: orange_1 },
    { id: 16, category: 'MODE CONTEMPORAIN', title: 'acg_2', image: orange_2 },
    { id: 17, category: 'MODE CONTEMPORAIN', title: 'acg_3', image: orange_3 },
    { id: 18, category: 'MODE CONTEMPORAIN', title: 'ami_black_1', image: ami_black_1 },
    { id: 19, category: 'MODE CONTEMPORAIN', title: 'ami_black_2', image: ami_black_2 },
    { id: 22, category: 'MODE CONTEMPORAIN', title: 'ami_black_3', image: ami_black_3 },

    { id: 72, category: 'VIDÉOS', title: 'Interview Exclusive', image: cover },








];

// Extract unique categories
const categories = [...new Set(projects.map(p => p.category))];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    // Filter projects based on selection
    const filteredProjects = selectedCategory
        ? projects.filter(p => p.category === selectedCategory)
        : [];

    const handleCategoryClick = (category) => {
        setIsLoading(true);
        if (category === 'VIDÉOS') {
            setVideoLoading(true);
        }
        // Simulate loading delay for premium feel
        setTimeout(() => {
            setSelectedCategory(category);
            setIsLoading(false);
            // Scroll to top of portfolio section gently
            const section = document.getElementById('portfolio');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    };

    const sectionStyle = {
        padding: '120px 24px',
        backgroundColor: '#0a0a0a',
        textAlign: 'center',
        minHeight: '100vh',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const cardStyle = {
        backgroundColor: '#151515',
        aspectRatio: '3/4',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '4px',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };

    // Helper to get a representative image for a category
    const getCategoryCover = (cat) => {
        const project = projects.find(p => p.category === cat);
        return project ? project.image : null;
    };

    return (
        <section id="portfolio" style={sectionStyle}>

            {isLoading ? (
                <div className="loader-container fade-in">
                    <div className="loader"></div>
                </div>
            ) : !selectedCategory ? (
                // CATEGORY SELECTION VIEW
                <div className="fade-in">
                    <h2 className="text-responsive-h2" style={{ marginBottom: '20px', letterSpacing: '-0.02em' }}>Collections</h2>
                    <p style={{ color: '#888', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px' }}>
                        Explorez mes différents univers, des éditoriaux aux polaroids bruts.
                    </p>

                    <div style={gridStyle}>
                        {categories.map(category => (
                            <div
                                key={category}
                                style={cardStyle}
                                className="category-card"
                                onClick={() => handleCategoryClick(category)}
                                onMouseEnter={(e) => {
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) img.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 1,
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    transition: 'background 0.3s'
                                }} />

                                <img
                                    src={getCategoryCover(category)}
                                    alt={category}
                                    style={imageStyle}
                                    loading="lazy"
                                />

                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                    width: '100%',
                                }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontFamily: '"Playfair Display", serif',
                                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                    }}>
                                        {category}
                                    </h3>
                                    <span style={{
                                        display: 'inline-block',
                                        marginTop: '10px',
                                        fontSize: '0.8rem',
                                        border: '1px solid rgba(255, 255, 255, 0.5)',
                                        padding: '5px 15px',
                                        borderRadius: '20px',
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(5px)'
                                    }}>
                                        VOIR LA GALERIE
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // SPECIFIC GALLERY VIEW
                <div className="fade-in">
                    {/* Gallery Hero Header */}
                    <div style={{
                        position: 'relative',
                        height: '40vh',
                        minHeight: '300px',
                        width: '100%',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        marginBottom: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Background Image with Parallax-like feel */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${getCategoryCover(selectedCategory)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.6)',
                            zIndex: 1
                        }} />

                        {/* Content */}
                        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '0.9rem',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '16px'
                            }}>
                                Galerie
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                margin: '0 0 32px 0',
                                fontFamily: '"Playfair Display", serif',
                                color: '#fff',
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                {selectedCategory}
                            </h2>

                            <button
                                onClick={() => setSelectedCategory(null)}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    color: '#fff',
                                    padding: '12px 32px',
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                className="hover-scale"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#fff';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                            >
                                <span>←</span> Retour aux collections
                            </button>
                        </div>
                    </div>


                    {selectedCategory === 'VIDÉOS' ? (
                        // VIDEO SECTION LAYOUT
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.8',
                                color: '#ccc',
                                marginBottom: '40px'
                            }}>
                                Interview réalisée à l'occasion du concours de la marque Teyssah Paris. Elle présente l'univers de la marque et le blazer gagné.
                                La vidéo a été diffusée par le média AZALES.
                            </p>

                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                                height: 0,
                                background: '#000',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                border: '1px solid #333'
                            }}>
                                {videoLoading && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        zIndex: 10,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#000'
                                    }}>
                                        <div className="loader"></div>
                                    </div>
                                )}
                                <video
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                    controls
                                    src={interviewVideo}
                                    onLoadedData={() => setVideoLoading(false)}
                                    onWaiting={() => setVideoLoading(true)}
                                    onPlaying={() => setVideoLoading(false)}
                                >
                                    Votre navigateur ne supporte pas la lecture de vidéos.
                                </video>
                            </div>
                        </div>
                    ) : (
                        // STANDARD PHOTO GRID
                        <div style={gridStyle}>
                            {filteredProjects.map(project => (
                                <div
                                    key={project.id}
                                    style={cardStyle}
                                    className="project-card"
                                >
                                    {project.image && (
                                        <img src={project.image} alt={project.title} style={imageStyle} loading="lazy" />
                                    )}

                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '30px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        textAlign: 'left',
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                    }}
                                        className="project-info"
                                        onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                        onMouseLeave={e => e.currentTarget.style.opacity = 0}
                                    >
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#ccc', marginBottom: '5px' }}>{project.category}</span>
                                        <span style={{ display: 'block', fontSize: '1.4rem', fontFamily: '"Playfair Display", serif' }}>{project.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )
            }

            <style>{`
                .project-card:hover .project-info {
                    opacity: 1 !important;
                }
                .category-card:hover div[style*="background"] {
                    background-color: rgba(0,0,0,0.4) !important;
                }
                .back-btn:hover {
                    color: #fff !important;
                }
            `}</style>
        </section >
    );
}
