import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Play, Eye, Calendar } from 'lucide-react';

const GalleryPage = () => {
  const THEME = {
    colors: { 
      primary: '#4c1d95', 
      accent: '#a78bfa', 
      background: '#faf5ff', 
      text: '#3b0764', 
      surface: '#f8fafc' 
    },
    fonts: { heading: "'Cormorant Garamond', Georgia, serif", body: "'Nunito', system-ui, sans-serif" },
    spacing: { sectionPadding: '80px' }
  };

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        backgroundImage: 'linear-gradient(135deg, rgba(76, 29, 149, 0.8), rgba(167, 139, 250, 0.6)), url(https://images.unsplash.com/photo-1506629905607-92902d3bb75d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3.5rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            Sacred Spaces Gallery
          </h1>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.3rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '30px',
            opacity: '0.95'
          }}>
            Journey through moments of mindfulness, transformation, and community
          </p>
        </div>
      </section>

      {/* Interactive Gallery Grid */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          gridAutoRows: 'masonry'
        }}>
          {/* Large featured image */}
          <div style={{
            gridColumn: 'span 2',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '400px',
            background: `linear-gradient(45deg, ${THEME.colors.accent}20, ${THEME.colors.primary}20)`,
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            boxShadow: '0 10px 40px rgba(76, 29, 149, 0.1)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2320&q=80"
              alt="Sunrise yoga class"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              padding: '40px 30px 30px',
              color: '#ffffff'
            }}>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.8rem',
                marginBottom: '10px'
              }}>Morning Flow Sessions</h3>
              <p style={{
                fontFamily: THEME.fonts.body,
                opacity: '0.9',
                fontSize: '1rem'
              }}>Start your day with intention and grace</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px', gap: '15px' }}>
                <Heart size={20} style={{ color: THEME.colors.accent }} />
                <span style={{ fontSize: '0.9rem' }}>247 hearts</span>
                <Eye size={20} style={{ color: THEME.colors.accent }} />
                <span style={{ fontSize: '0.9rem' }}>1.2k views</span>
              </div>
            </div>
          </div>

          {/* Circular image cards */}
          {[
            { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Meditation Circle", desc: "Finding inner peace together" },
            { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Warrior Poses", desc: "Building strength within" },
            { img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Breath Work", desc: "The foundation of practice" }
          ].map((item, index) => (
            <div key={index} style={{
              position: 'relative',
              height: '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 5px 20px rgba(76, 29, 149, 0.1)'
            }}>
              <img 
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Heart size={20} style={{ color: THEME.colors.primary }} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(76, 29, 149, 0.8))',
                padding: '30px 20px 20px',
                color: '#ffffff'
              }}>
                <h4 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.3rem',
                  marginBottom: '5px'
                }}>{item.title}</h4>
                <p style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '0.9rem',
                  opacity: '0.9'
                }}>{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Video preview card */}
          <div style={{
            position: 'relative',
            height: '300px',
            borderRadius: '20px',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(76, 29, 149, 0.2)'
          }}>
            <div style={{
              textAlign: 'center',
              color: '#ffffff',
              padding: '20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Play size={30} fill="#ffffff" />
              </div>
              <h4 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.5rem',
                marginBottom: '10px'
              }}>Virtual Classes</h4>
              <p style={{
                fontFamily: THEME.fonts.body,
                opacity: '0.9'
              }}>Practice from anywhere, anytime</p>
            </div>
          </div>

          {/* More gallery items */}
          {[
            { img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Community Events" },
            { img: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Healing Sessions" },
            { img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80", title: "Teacher Training" }
          ].map((item, index) => (
            <div key={index} style={{
              position: 'relative',
              height: '250px',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(76, 29, 149, 0.1)'
            }}>
              <img 
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(45deg, rgba(76, 29, 149, 0.3), rgba(167, 139, 250, 0.3))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '0',
                transition: 'opacity 0.3s ease'
              }}>
                <h4 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  textAlign: 'center'
                }}>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Stats */}
      <section style={{
        backgroundColor: THEME.colors.surface,
        padding: `60px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            {[
              { icon: Heart, number: '2,847', label: 'Hearts Shared' },
              { icon: Eye, number: '12.5K', label: 'Gallery Views' },
              { icon: Star, number: '567', label: 'Featured Moments' },
              { icon: Calendar, number: '150+', label: 'Classes Captured' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index}>
                  <IconComponent 
                    size={40} 
                    style={{ color: THEME.colors.accent, marginBottom: '15px' }} 
                  />
                  <div style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '2.5rem',
                    color: THEME.colors.primary,
                    marginBottom: '5px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: THEME.fonts.body,
                    color: THEME.colors.text,
                    opacity: '0.7'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center',
        background: `linear-gradient(135deg, ${THEME.colors.primary}10, ${THEME.colors.accent}10)`
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.primary,
            marginBottom: '20px'
          }}>
            Ready to Create Your Own Story?
          </h2>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.1rem',
            color: THEME.colors.text,
            marginBottom: '30px',
            opacity: '0.8'
          }}>
            Join our community and become part of the beautiful moments we capture every day
          </p>
          <Link 
            to="/classes" 
            style={{
              display: 'inline-block',
              backgroundColor: THEME.colors.primary,
              color: '#ffffff',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 10px 30px rgba(76, 29, 149, 0.3)'
            }}
          >
            Book Your First Class
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
