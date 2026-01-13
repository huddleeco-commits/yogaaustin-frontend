import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Heart, Flower2, MapPin, Phone, Mail, Star, ArrowRight, CheckCircle } from 'lucide-react';

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

const BookingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: THEME.colors.background }}>
      {/* Floating Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '70vh', 
        background: `linear-gradient(135deg, ${THEME.colors.primary}dd, ${THEME.colors.accent}cc)`,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px'
        }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: '60px 50px',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)',
            maxWidth: '600px'
          }}>
            <Flower2 style={{ 
              width: '60px', 
              height: '60px', 
              color: '#ffffff', 
              margin: '0 auto 20px',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))'
            }} />
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '3.5rem',
              fontWeight: '300',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Book Your Sacred Journey
            </h1>
            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.2rem',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              marginBottom: '30px',
              opacity: 0.9
            }}>
              Reserve your space in our mindful community
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Booking Form */}
      <div style={{ 
        marginTop: '-120px', 
        position: 'relative', 
        zIndex: 3,
        padding: '0 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px'
        }}>
          {/* Main Booking Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '25px',
            padding: '50px',
            boxShadow: '0 25px 60px rgba(76, 29, 149, 0.15)',
            border: '1px solid rgba(167, 139, 250, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <Calendar style={{ 
                width: '24px', 
                height: '24px', 
                color: THEME.colors.primary,
                marginRight: '15px'
              }} />
              <h2 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '2rem',
                color: THEME.colors.text,
                margin: 0
              }}>
                Select Your Experience
              </h2>
            </div>

            {/* Class Selection */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontFamily: THEME.fonts.body,
                fontSize: '1.1rem',
                fontWeight: '600',
                color: THEME.colors.text,
                marginBottom: '20px'
              }}>
                Choose Your Practice
              </h3>
              
              <div style={{ display: 'grid', gap: '15px' }}>
                {[
                  { name: 'Sunrise Flow', time: '7:00 AM', duration: '60 min', spots: '3 spots left' },
                  { name: 'Mindful Pilates', time: '10:30 AM', duration: '45 min', spots: '5 spots left' },
                  { name: 'Restorative Yoga', time: '6:00 PM', duration: '75 min', spots: '2 spots left' },
                  { name: 'Evening Meditation', time: '7:30 PM', duration: '30 min', spots: '8 spots left' }
                ].map((session, idx) => (
                  <div key={idx} style={{
                    padding: '20px',
                    border: `2px solid ${idx === 0 ? THEME.colors.primary : 'rgba(167, 139, 250, 0.2)'}`,
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: idx === 0 ? `${THEME.colors.primary}08` : 'transparent'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <h4 style={{
                          fontFamily: THEME.fonts.body,
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: THEME.colors.text,
                          margin: '0 0 5px 0'
                        }}>
                          {session.name}
                        </h4>
                        <div style={{ display: 'flex', gap: '20px' }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '0.9rem',
                            color: THEME.colors.primary
                          }}>
                            <Clock style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                            {session.time}
                          </span>
                          <span style={{
                            fontSize: '0.9rem',
                            color: THEME.colors.text
                          }}>
                            {session.duration}
                          </span>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.8rem',
                        color: THEME.colors.accent,
                        fontWeight: '500'
                      }}>
                        {session.spots}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & Participant Selection */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: THEME.colors.text,
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Select Date
                </label>
                <input
                  type="date"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: `2px solid rgba(167, 139, 250, 0.3)`,
                    borderRadius: '12px',
                    fontFamily: THEME.fonts.body,
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: THEME.colors.text,
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Participants
                </label>
                <select style={{
                  width: '100%',
                  padding: '15px',
                  border: `2px solid rgba(167, 139, 250, 0.3)`,
                  borderRadius: '12px',
                  fontFamily: THEME.fonts.body,
                  fontSize: '1rem'
                }}>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                </select>
              </div>
            </div>

            {/* Book Button */}
            <button style={{
              width: '100%',
              padding: '18px',
              backgroundColor: THEME.colors.primary,
              color: '#ffffff',
              border: 'none',
              borderRadius: '15px',
              fontFamily: THEME.fonts.body,
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease'
            }}>
              Reserve Your Space
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
          </div>

          {/* Studio Info Sidebar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            {/* Studio Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 20px 40px rgba(76, 29, 149, 0.1)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: `${THEME.colors.primary}15`,
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Heart style={{ 
                  width: '24px', 
                  height: '24px', 
                  color: THEME.colors.primary 
                }} />
              </div>
              
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.text,
                marginBottom: '15px'
              }}>
                A Place To Be Free
              </h3>
              
              <p style={{
                fontFamily: THEME.fonts.body,
                fontSize: '0.9rem',
                color: THEME.colors.text,
                lineHeight: '1.6',
                marginBottom: '20px',
                opacity: 0.8
              }}>
                Your sanctuary for mindful movement and inner peace
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin style={{ width: '16px', height: '16px', color: THEME.colors.accent }} />
                  <span style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '0.9rem',
                    color: THEME.colors.text
                  }}>
                    123 Serenity Lane
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone style={{ width: '16px', height: '16px', color: THEME.colors.accent }} />
                  <span style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '0.9rem',
                    color: THEME.colors.text
                  }}>
                    (555) 123-YOGA
                  </span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 20px 40px rgba(76, 29, 149, 0.1)'
            }}>
              <h3 style={{
                fontFamily: THEME.fonts.heading,
                fontSize: '1.3rem',
                color: THEME.colors.text,
                marginBottom: '20px'
              }}>
                What's Included
              </h3>
              
              {[
                'Premium yoga mats & props',
                'Filtered water & herbal tea',
                'Post-class meditation space',
                'Complimentary essential oils'
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px'
                }}>
                  <CheckCircle style={{ 
                    width: '18px', 
                    height: '18px', 
                    color: THEME.colors.accent 
                  }} />
                  <span style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '0.9rem',
                    color: THEME.colors.text
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonial */}
      <div style={{ 
        padding: `${THEME.spacing.sectionPadding} 20px`,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          backgroundColor: `${THEME.colors.primary}05`,
          borderRadius: '25px',
          padding: '40px',
          textAlign: 'center',
          border: `1px solid ${THEME.colors.accent}30`
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '5px',
            marginBottom: '20px'
          }}>
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} style={{
                width: '20px',
                height: '20px',
                fill: THEME.colors.accent,
                color: THEME.colors.accent
              }} />
            ))}
          </div>
          
          <p style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: THEME.colors.text,
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            "This studio transformed my practice. The booking process is seamless, and every class feels like a personal retreat."
          </p>
          
          <div style={{
            fontFamily: THEME.fonts.body,
            fontSize: '0.9rem',
            color: THEME.colors.primary,
            fontWeight: '600'
          }}>
            — Sarah M., Regular Student
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
