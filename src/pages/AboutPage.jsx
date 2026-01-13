import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Users, Star, Compass, Sun } from 'lucide-react';

const AboutPage = () => {
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
    <div style={{ background: THEME.colors.background, color: THEME.colors.text }}>
      {/* Hero Section */}
      <section style={{ 
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.accent} 100%)`,
        padding: `${THEME.spacing.sectionPadding} 0`,
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ 
            maxWidth: '700px',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '4rem',
              fontWeight: '300',
              marginBottom: '2rem',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              Your Journey to Freedom Begins Here
            </h1>
            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.3rem',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              marginBottom: '2.5rem',
              opacity: 0.95
            }}>
              More than a studio, we are a sanctuary where movement meets mindfulness, and every breath leads you closer to your truest self.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Asymmetrical Layout */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: '#ffffff'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '3rem',
              color: THEME.colors.primary,
              marginBottom: '2rem',
              lineHeight: '1.3'
            }}>
              Born from a Simple Truth
            </h2>
            <div style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.8',
              fontFamily: THEME.fonts.body,
              color: THEME.colors.text
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                In 2018, our founder Sarah discovered that true wellness isn't about perfection—it's about permission. Permission to be present, to be imperfect, to be exactly where you are in your journey.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                What started as a single mat in a converted warehouse has grown into a thriving community of seekers, movers, and believers. We've created a space where the external noise fades away, and your inner wisdom gets louder.
              </p>
              <p>
                Every class, every breath, every moment here is designed with one intention: to help you remember the freedom that already lives within you.
              </p>
            </div>
          </div>
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Peaceful yoga practice"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: THEME.colors.background,
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <blockquote style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3.5rem',
            fontWeight: '300',
            color: THEME.colors.primary,
            lineHeight: '1.3',
            fontStyle: 'italic',
            position: 'relative',
            padding: '2rem 0'
          }}>
            "We believe freedom isn't a destination—it's a practice. Every day, we create space for you to practice being free."
          </blockquote>
          <div style={{
            width: '60px',
            height: '2px',
            background: THEME.colors.accent,
            margin: '2rem auto'
          }}></div>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.1rem',
            color: THEME.colors.text,
            opacity: 0.8
          }}>
            — Our Core Mission
          </p>
        </div>
      </section>

      {/* Values Section - List Format */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: '#ffffff'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3rem',
            color: THEME.colors.primary,
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            What We Stand For
          </h2>
          
          <div style={{ 
            display: 'grid',
            gap: '3rem'
          }}>
            {[
              {
                icon: Heart,
                title: 'Authentic Connection',
                description: 'We foster genuine relationships—with ourselves, each other, and the present moment. No masks, no pretense, just real human connection.'
              },
              {
                icon: Leaf,
                title: 'Natural Healing',
                description: 'Your body knows how to heal, restore, and thrive. We simply create the conditions for your natural wisdom to emerge and flourish.'
              },
              {
                icon: Users,
                title: 'Inclusive Community',
                description: 'Every body is a yoga body. Every story matters. We celebrate diversity in all its forms and welcome everyone exactly as they are.'
              },
              {
                icon: Compass,
                title: 'Inner Guidance',
                description: 'The answers you seek already live within you. We provide tools and space to help you listen to your inner compass and trust its direction.'
              },
              {
                icon: Sun,
                title: 'Joyful Practice',
                description: 'Wellness should feel good. We believe in the power of joy, laughter, and lightness as pathways to profound transformation.'
              },
              {
                icon: Star,
                title: 'Mindful Growth',
                description: 'Progress over perfection, always. We honor the journey, celebrate small wins, and embrace the beautiful messiness of growth.'
              }
            ].map((value, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '2rem 0',
                borderBottom: index < 5 ? `1px solid ${THEME.colors.background}` : 'none'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: THEME.colors.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}>
                  <value.icon size={28} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.8rem',
                    color: THEME.colors.primary,
                    marginBottom: '1rem'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: THEME.colors.text,
                    opacity: 0.9
                  }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: THEME.colors.background
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div style={{
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Yoga instructors"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '3rem',
                color: THEME.colors.primary,
                marginBottom: '2rem',
                lineHeight: '1.3'
              }}>
                Meet Your Guides
              </h2>
              <p style={{ 
                fontSize: '1.2rem',
                lineHeight: '1.8',
                fontFamily: THEME.fonts.body,
                color: THEME.colors.text,
                marginBottom: '2rem'
              }}>
                Our teachers aren't just instructors—they're fellow travelers on the path of growth and discovery. Each brings their unique gifts, experiences, and perspectives to create a rich tapestry of wisdom and support.
              </p>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.8',
                fontFamily: THEME.fonts.body,
                color: THEME.colors.text,
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                From trauma-informed practices to advanced movement techniques, our team is trained not just in the physical aspects of yoga and Pilates, but in the art of holding space for transformation.
              </p>
              <Link 
                to="/teachers" 
                style={{
                  display: 'inline-block',
                  background: THEME.colors.primary,
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Meet Our Teachers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: THEME.colors.primary,
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3rem',
            color: '#ffffff',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Ready to Begin?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#ffffff',
            marginBottom: '2.5rem',
            opacity: 0.9,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: THEME.fonts.body,
            lineHeight: '1.7'
          }}>
            Your mat is waiting. Your breath is ready. Your freedom is calling. Take the first step on your journey with us.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/classes" 
              style={{
                background: '#ffffff',
                color: THEME.colors.primary,
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              View Class Schedule
            </Link>
            <Link 
              to="/contact" 
              style={{
                background: 'transparent',
                color: '#ffffff',
                padding: '1.2rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                border: '2px solid #ffffff',
                transition: 'all 0.3s ease'
              }}
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
