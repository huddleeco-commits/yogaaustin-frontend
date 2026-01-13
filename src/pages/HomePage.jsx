import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Users, Star, Calendar, MapPin, Phone } from 'lucide-react';

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

const HomePage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background }}>
      {/* Hero Section - Circular Flow Design */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 0`,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${THEME.colors.accent}20, ${THEME.colors.primary}10)`,
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '3%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${THEME.colors.accent}15, transparent)`,
          zIndex: 1
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          zIndex: 2,
          position: 'relative'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: `${THEME.colors.accent}20`,
              padding: '12px 24px',
              borderRadius: '50px',
              marginBottom: '30px',
              border: `1px solid ${THEME.colors.accent}40`
            }}>
              <Leaf size={20} color={THEME.colors.primary} />
              <span style={{
                fontFamily: THEME.fonts.body,
                color: THEME.colors.primary,
                fontSize: '14px',
                fontWeight: '600'
              }}>Your Sacred Space Awaits</span>
            </div>

            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '4rem',
              fontWeight: '400',
              color: THEME.colors.text,
              lineHeight: '1.1',
              marginBottom: '30px',
              letterSpacing: '-0.02em'
            }}>
              A Place to Be 
              <span style={{ 
                color: THEME.colors.primary,
                display: 'block',
                fontStyle: 'italic'
              }}>Free</span>
            </h1>

            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.25rem',
              color: `${THEME.colors.text}80`,
              lineHeight: '1.6',
              marginBottom: '40px'
            }}>
              Discover your inner strength and find balance through mindful movement. 
              Join our welcoming community where every breath brings you closer to your true self.
            </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center'
            }}>
              <Link to="/classes" style={{
                backgroundColor: THEME.colors.primary,
                color: 'white',
                padding: '18px 36px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontSize: '1rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 20px ${THEME.colors.primary}30`
              }}>
                <Calendar size={20} />
                Book Your First Class
              </Link>

              <Link to="/about" style={{
                color: THEME.colors.primary,
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontSize: '1rem',
                fontWeight: '500',
                borderBottom: `2px solid ${THEME.colors.accent}60`
              }}>
                Learn Our Story
              </Link>
            </div>
          </div>

          <div style={{
            position: 'relative'
          }}>
            <div style={{
              borderRadius: '30px',
              overflow: 'hidden',
              position: 'relative',
              height: '500px',
              background: `linear-gradient(45deg, ${THEME.colors.accent}20, ${THEME.colors.primary}10)`
            }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful yoga session"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '30px'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '12px',
                borderRadius: '50%',
                backdropFilter: 'blur(10px)'
              }}>
                <Heart size={24} color={THEME.colors.primary} fill={THEME.colors.accent} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{
        backgroundColor: THEME.colors.primary,
        padding: '50px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          textAlign: 'center'
        }}>
          {[
            { number: '500+', label: 'Happy Members' },
            { number: '50+', label: 'Weekly Classes' },
            { number: '8', label: 'Expert Instructors' },
            { number: '5', label: 'Years of Peace' }
          ].map((stat, index) => (
            <div key={index}>
              <div style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '8px'
              }}>{stat.number}</div>
              <div style={{
                fontFamily: THEME.fonts.body,
                fontSize: '1rem',
                color: `${THEME.colors.accent}`,
                fontWeight: '500'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Diagonal Layout */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 0`,
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '3rem',
              color: THEME.colors.text,
              marginBottom: '20px'
            }}>Find Your Flow</h2>
            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.2rem',
              color: `${THEME.colors.text}70`,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Whether you're beginning your journey or deepening your practice, 
              we have the perfect class for your mind, body, and soul.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {[
              {
                title: 'Hatha Yoga',
                description: 'Gentle poses and mindful breathing for beginners and all levels',
                image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                color: THEME.colors.accent
              },
              {
                title: 'Vinyasa Flow',
                description: 'Dynamic sequences that link breath with movement',
                image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                color: THEME.colors.primary
              },
              {
                title: 'Pilates Core',
                description: 'Strengthen your center and improve posture with precise movements',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                color: '#8b5cf6'
              }
            ].map((service, index) => (
              <div key={index} style={{
                backgroundColor: THEME.colors.surface,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  height: '240px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '8px',
                    height: '40px',
                    backgroundColor: service.color,
                    borderRadius: '4px'
                  }}></div>
                </div>
                <div style={{ padding: '32px 24px' }}>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.5rem',
                    color: THEME.colors.text,
                    marginBottom: '12px'
                  }}>{service.title}</h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    color: `${THEME.colors.text}70`,
                    lineHeight: '1.6'
                  }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Curved Design */}
      <section style={{
        backgroundColor: THEME.colors.surface,
        padding: `${THEME.spacing.sectionPadding} 0`,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: `linear-gradient(135deg, ${THEME.colors.background} 0%, ${THEME.colors.surface} 100%)`,
          clipPath: 'ellipse(100% 100% at 50% 0%)'
        }}></div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '30px'
          }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} color={THEME.colors.accent} fill={THEME.colors.accent} />
            ))}
          </div>

          <blockquote style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2rem',
            color: THEME.colors.text,
            lineHeight: '1.4',
            marginBottom: '40px',
            fontStyle: 'italic'
          }}>
            "This isn't just a yoga studio – it's a sanctuary. Every class leaves me feeling 
            more centered, stronger, and deeply connected to myself."
          </blockquote>

          <div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${THEME.colors.accent}, ${THEME.colors.primary})`,
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} color="white" />
            </div>
            <div style={{
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              color: THEME.colors.text,
              marginBottom: '4px'
            }}>Sarah Chen</div>
            <div style={{
              fontFamily: THEME.fonts.body,
              color: `${THEME.colors.text}60`,
              fontSize: '0.9rem'
            }}>Member since 2019</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 1
        }}></div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3rem',
            color: 'white',
            marginBottom: '24px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Ready to Begin?</h2>
          
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '40px',
            lineHeight: '1.6',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}>
            Your first class is complimentary. Come as you are, leave feeling renewed.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/classes" style={{
              backgroundColor: 'white',
              color: THEME.colors.primary,
              padding: '20px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontSize: '1.1rem',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }}>
              <Calendar size={22} />
              Start Your Journey
            </Link>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              color: 'rgba(255,255,255,0.9)'
            }}>
              <Phone size={20} />
              <span style={{
                fontFamily: THEME.fonts.body,
                fontSize: '1rem'
              }}>(555) 123-YOGA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
