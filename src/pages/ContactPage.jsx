import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Clock, Users, Heart } from 'lucide-react';

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

const ContactPage = () => {
  return (
    <div style={{ 
      background: `linear-gradient(135deg, ${THEME.colors.background} 0%, #ffffff 100%)`,
      minHeight: '100vh'
    }}>
      {/* Floating Hero Section */}
      <div style={{
        position: 'relative',
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: '60px',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${THEME.colors.accent}20 0%, transparent 70%)`,
          borderRadius: '50%',
          zIndex: 1
        }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: THEME.colors.text,
            marginBottom: '20px',
            fontWeight: 300,
            letterSpacing: '-1px'
          }}>
            Connect & Begin
          </h1>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            color: THEME.colors.primary,
            opacity: 0.8,
            lineHeight: 1.6
          }}>
            Your journey to balance starts with a simple conversation
          </p>
        </div>
      </div>

      {/* Main Contact Section - Organic Split Layout */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative'
      }}>
        {/* Flowing Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '10%',
          width: '200px',
          height: '400px',
          background: `linear-gradient(45deg, ${THEME.colors.accent}15, ${THEME.colors.primary}10)`,
          borderRadius: '100px',
          transform: 'rotate(15deg)',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '5%',
          width: '150px',
          height: '300px',
          background: `linear-gradient(-45deg, ${THEME.colors.accent}20, transparent)`,
          borderRadius: '75px',
          transform: 'rotate(-20deg)',
          zIndex: 1
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
          gap: '80px',
          alignItems: 'start',
          position: 'relative',
          zIndex: 2
        }}>
          
          {/* Contact Form - Floating Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            padding: '50px 40px',
            boxShadow: '0 20px 60px rgba(75, 29, 149, 0.1)',
            border: `1px solid ${THEME.colors.accent}30`,
            transform: 'translateY(20px)'
          }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2.5rem',
                color: THEME.colors.text,
                marginBottom: '15px',
                fontWeight: 300
              }}>
                Send a Message
              </h2>
              <p style={{
                fontFamily: THEME.fonts.body,
                color: THEME.colors.primary,
                opacity: 0.7,
                fontSize: '1rem'
              }}>
                We'd love to hear from you and help you start your wellness journey
              </p>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    padding: '18px 24px',
                    borderRadius: '50px',
                    border: `2px solid ${THEME.colors.accent}30`,
                    background: THEME.colors.surface,
                    fontFamily: THEME.fonts.body,
                    fontSize: '1rem',
                    color: THEME.colors.text,
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}30`}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    padding: '18px 24px',
                    borderRadius: '50px',
                    border: `2px solid ${THEME.colors.accent}30`,
                    background: THEME.colors.surface,
                    fontFamily: THEME.fonts.body,
                    fontSize: '1rem',
                    color: THEME.colors.text,
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}30`}
                />
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  padding: '18px 24px',
                  borderRadius: '50px',
                  border: `2px solid ${THEME.colors.accent}30`,
                  background: THEME.colors.surface,
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem',
                  color: THEME.colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}30`}
              />
              
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                style={{
                  padding: '18px 24px',
                  borderRadius: '50px',
                  border: `2px solid ${THEME.colors.accent}30`,
                  background: THEME.colors.surface,
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem',
                  color: THEME.colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}30`}
              />
              
              <textarea
                placeholder="Tell us about your wellness goals or any questions you have..."
                rows="5"
                style={{
                  padding: '18px 24px',
                  borderRadius: '25px',
                  border: `2px solid ${THEME.colors.accent}30`,
                  background: THEME.colors.surface,
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem',
                  color: THEME.colors.text,
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}30`}
              />
              
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '18px 40px',
                  background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontFamily: THEME.fonts.body,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '10px'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Business Details - Organic Layout */}
          <div style={{ paddingTop: '40px' }}>
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <div style={{
                  padding: '15px',
                  background: `linear-gradient(135deg, ${THEME.colors.accent}, ${THEME.colors.primary})`,
                  borderRadius: '15px',
                  color: 'white'
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.4rem',
                    color: THEME.colors.text,
                    marginBottom: '8px',
                    fontWeight: 400
                  }}>
                    Call Us
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    color: THEME.colors.primary,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}>
                    (555) 123-YOGA
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)',
                border: `1px solid ${THEME.colors.accent}20`,
                transform: 'translateX(20px)'
              }}>
                <div style={{
                  padding: '15px',
                  background: `linear-gradient(135deg, ${THEME.colors.accent}, ${THEME.colors.primary})`,
                  borderRadius: '15px',
                  color: 'white'
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.4rem',
                    color: THEME.colors.text,
                    marginBottom: '8px',
                    fontWeight: 400
                  }}>
                    Email Us
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    color: THEME.colors.primary,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}>
                    hello@placebefree.com
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <div style={{
                  padding: '15px',
                  background: `linear-gradient(135deg, ${THEME.colors.accent}, ${THEME.colors.primary})`,
                  borderRadius: '15px',
                  color: 'white'
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: THEME.fonts.heading,
                    fontSize: '1.4rem',
                    color: THEME.colors.text,
                    marginBottom: '8px',
                    fontWeight: 400
                  }}>
                    Visit Our Studio
                  </h3>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    color: THEME.colors.primary,
                    fontSize: '1rem',
                    lineHeight: 1.5
                  }}>
                    123 Wellness Way<br />
                    Peaceful Valley, CA 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div style={{
              padding: '40px',
              background: `linear-gradient(135deg, ${THEME.colors.primary}05, ${THEME.colors.accent}10)`,
              borderRadius: '25px',
              border: `1px solid ${THEME.colors.accent}20`,
              transform: 'translateX(-10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <Clock size={28} color={THEME.colors.primary} />
                <h3 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.8rem',
                  color: THEME.colors.text,
                  fontWeight: 300
                }}>
                  Studio Hours
                </h3>
              </div>
              
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  { days: 'Monday - Friday', hours: '6:00 AM - 9:00 PM' },
                  { days: 'Saturday', hours: '7:00 AM - 7:00 PM' },
                  { days: 'Sunday', hours: '8:00 AM - 6:00 PM' }
                ].map((schedule, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: index < 2 ? `1px solid ${THEME.colors.accent}20` : 'none'
                  }}>
                    <span style={{
                      fontFamily: THEME.fonts.body,
                      color: THEME.colors.text,
                      fontWeight: 600
                    }}>
                      {schedule.days}
                    </span>
                    <span style={{
                      fontFamily: THEME.fonts.body,
                      color: THEME.colors.primary,
                      opacity: 0.8
                    }}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div style={{
        marginTop: THEME.spacing.sectionPadding,
        padding: '60px 20px',
        textAlign: 'center',
        background: `linear-gradient(135deg, ${THEME.colors.primary}10, ${THEME.colors.background})`
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <Users size={32} color={THEME.colors.primary} />
            </div>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <Heart size={32} color={THEME.colors.accent} />
            </div>
          </div>
          
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.text,
            marginBottom: '20px',
            fontWeight: 300
          }}>
            Ready to Begin Your Journey?
          </h2>
          
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.1rem',
            color: THEME.colors.primary,
            opacity: 0.8,
            marginBottom: '30px',
            lineHeight: 1.6
          }}>
            Join our welcoming community and discover the balance you've been seeking
          </p>
          
          <Link 
            to="/classes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: `linear-gradient(135deg, ${THEME.colors.accent}, ${THEME.colors.primary})`,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontFamily: THEME.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            View Our Classes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
