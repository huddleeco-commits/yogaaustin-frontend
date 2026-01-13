import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sunrise, Users, Flower2, Mountain, Waves } from 'lucide-react';

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

const ServicesPage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.accent} 100%)`,
        minHeight: '60vh',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontFamily: THEME.fonts.heading, 
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            fontWeight: '300',
            lineHeight: '1.2'
          }}>
            Your Journey to Wellness
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            fontFamily: THEME.fonts.body,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '40px',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto 40px auto'
          }}>
            Discover transformative yoga and pilates experiences designed to nurture your body, mind, and spirit
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: THEME.colors.primary,
            padding: '15px 40px',
            borderRadius: '50px',
            fontFamily: THEME.fonts.body,
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            Begin Your Practice
          </Link>
        </div>
      </section>

      {/* Floating Services Grid */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 20px`,
        position: 'relative',
        marginTop: '-80px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {/* Hatha Yoga - Large Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(76, 29, 149, 0.1)',
              gridColumn: 'span 2',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '400px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: THEME.colors.accent, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <Sunrise size={28} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '2.2rem', 
                  fontFamily: THEME.fonts.heading, 
                  color: THEME.colors.text, 
                  marginBottom: '15px',
                  fontWeight: '400'
                }}>
                  Hatha Yoga
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  color: THEME.colors.text, 
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  opacity: '0.8',
                  marginBottom: '25px'
                }}>
                  Gentle, meditative practice focusing on breath and alignment. Perfect for beginners and those seeking inner peace.
                </p>
                <div style={{ fontSize: '1.4rem', fontWeight: '600', color: THEME.colors.primary, marginBottom: '20px' }}>
                  From $25/class
                </div>
                <Link to="/booking" style={{
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  borderBottom: '2px solid transparent',
                  paddingBottom: '2px',
                  alignSelf: 'flex-start'
                }}>
                  Book Session →
                </Link>
              </div>
            </div>

            {/* Vinyasa Flow */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(76, 29, 149, 0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '30px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: THEME.colors.primary, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Waves size={24} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontFamily: THEME.fonts.heading, 
                  color: THEME.colors.text, 
                  marginBottom: '12px'
                }}>
                  Vinyasa Flow
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  color: THEME.colors.text, 
                  opacity: '0.7',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  Dynamic sequences that build strength, flexibility and mindfulness through flowing movements.
                </p>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: THEME.colors.primary, marginBottom: '15px' }}>
                  From $30/class
                </div>
                <Link to="/booking" style={{
                  color: THEME.colors.accent,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Book Session →
                </Link>
              </div>
            </div>

            {/* Pilates */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(76, 29, 149, 0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '30px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: THEME.colors.accent, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Mountain size={24} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontFamily: THEME.fonts.heading, 
                  color: THEME.colors.text, 
                  marginBottom: '12px'
                }}>
                  Pilates Core
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  color: THEME.colors.text, 
                  opacity: '0.7',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  Strengthen your core, improve posture and develop balanced muscle tone with precision movements.
                </p>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: THEME.colors.primary, marginBottom: '15px' }}>
                  From $35/class
                </div>
                <Link to="/booking" style={{
                  color: THEME.colors.accent,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Book Session →
                </Link>
              </div>
            </div>

            {/* Meditation & Breathwork - Spans 2 columns */}
            <div style={{
              backgroundColor: THEME.colors.primary,
              borderRadius: '24px',
              overflow: 'hidden',
              gridColumn: 'span 2',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '300px',
              color: '#ffffff'
            }}>
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <Flower2 size={28} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontFamily: THEME.fonts.heading, 
                  marginBottom: '15px',
                  fontWeight: '400'
                }}>
                  Meditation & Breathwork
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  fontSize: '1.1rem',
                  opacity: '0.9',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  Find stillness and clarity through guided meditation and conscious breathing techniques.
                </p>
                <div style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px' }}>
                  From $20/session
                </div>
                <Link to="/booking" style={{
                  color: '#ffffff',
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none',
                  alignSelf: 'flex-start'
                }}>
                  Book Session →
                </Link>
              </div>
              <div style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </div>

            {/* Group Classes */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(76, 29, 149, 0.08)'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '30px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: THEME.colors.primary, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Users size={24} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontFamily: THEME.fonts.heading, 
                  color: THEME.colors.text, 
                  marginBottom: '12px'
                }}>
                  Group Classes
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  color: THEME.colors.text, 
                  opacity: '0.7',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  Connect with our community in energizing group sessions for all levels and abilities.
                </p>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: THEME.colors.primary, marginBottom: '15px' }}>
                  From $18/class
                </div>
                <Link to="/booking" style={{
                  color: THEME.colors.accent,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Book Session →
                </Link>
              </div>
            </div>

            {/* Private Sessions */}
            <div style={{
              backgroundColor: THEME.colors.surface,
              borderRadius: '24px',
              overflow: 'hidden',
              border: `2px solid ${THEME.colors.accent}`,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: THEME.colors.accent,
                color: '#ffffff',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                PREMIUM
              </div>
              <div style={{
                height: '200px',
                backgroundImage: 'url(https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '30px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: THEME.colors.accent, 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Heart size={24} color="#ffffff" />
                </div>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontFamily: THEME.fonts.heading, 
                  color: THEME.colors.text, 
                  marginBottom: '12px'
                }}>
                  Private Sessions
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body, 
                  color: THEME.colors.text, 
                  opacity: '0.7',
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  Personalized one-on-one instruction tailored to your unique goals and needs.
                </p>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: THEME.colors.primary, marginBottom: '15px' }}>
                  From $85/session
                </div>
                <Link to="/booking" style={{
                  color: THEME.colors.accent,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  textDecoration: 'none'
                }}>
                  Book Session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 20px`,
        backgroundColor: THEME.colors.surface,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontFamily: THEME.fonts.heading, 
            color: THEME.colors.text, 
            marginBottom: '20px',
            fontWeight: '300'
          }}>
            Ready to Begin Your Journey?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            fontFamily: THEME.fonts.body, 
            color: THEME.colors.text, 
            opacity: '0.7',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Join our welcoming community and discover the transformative power of mindful movement
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            backgroundColor: THEME.colors.primary,
            color: '#ffffff',
            padding: '18px 45px',
            borderRadius: '50px',
            fontFamily: THEME.fonts.body,
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 8px 25px rgba(76, 29, 149, 0.25)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            marginRight: '20px'
          }}>
            Start Your Practice
          </Link>
          <Link to="/about" style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: THEME.colors.primary,
            padding: '18px 45px',
            borderRadius: '50px',
            border: `2px solid ${THEME.colors.primary}`,
            fontFamily: THEME.fonts.body,
            fontWeight: '600',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
