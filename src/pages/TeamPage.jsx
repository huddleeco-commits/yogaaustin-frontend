import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Flower, Leaf, Star, Users, Award } from 'lucide-react';

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

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead Instructor",
      specialty: "Vinyasa Flow & Meditation",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "12 years",
      philosophy: "Movement is medicine for the soul. I believe every body is unique and deserving of compassionate guidance.",
      certifications: ["RYT-500", "Meditation Teacher", "Ayurveda Certified"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Pilates Instructor",
      specialty: "Reformer & Rehabilitation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "8 years",
      philosophy: "Strength comes from within. I help students discover their inner power through mindful movement.",
      certifications: ["PMA Certified", "Physical Therapy", "Anatomy Specialist"]
    },
    {
      name: "Luna Thompson",
      role: "Restorative Yoga Teacher",
      specialty: "Yin Yoga & Sound Healing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "6 years",
      philosophy: "In stillness, we find our true selves. I create sacred spaces for deep healing and restoration.",
      certifications: ["RYT-200", "Sound Healing", "Reiki Master"]
    },
    {
      name: "Alex Kim",
      role: "Dynamic Flow Instructor",
      specialty: "Power Yoga & Breathwork",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "5 years",
      philosophy: "Challenge creates change. Through breath and movement, we transform limitations into possibilities.",
      certifications: ["RYT-300", "Breathwork Certified", "Anatomy Training"]
    }
  ];

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section with Circular Layout */}
      <div style={{
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: THEME.spacing.sectionPadding,
        position: 'relative',
        background: `linear-gradient(135deg, ${THEME.colors.primary}dd, ${THEME.colors.accent}cc)`,
        overflow: 'hidden'
      }}>
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.15)',
          animation: 'float 4s ease-in-out infinite reverse'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ marginBottom: '30px' }}>
            <Flower size={48} style={{ color: '#ffffff', marginBottom: '20px' }} />
          </div>
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3.5rem',
            fontWeight: 300,
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            Meet Our Sacred Circle
          </h1>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.4rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Experienced guides dedicated to nurturing your journey toward balance, strength, and inner peace
          </p>
        </div>
      </div>

      {/* Mandala-Style Team Layout */}
      <div style={{
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: THEME.spacing.sectionPadding,
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Center Philosophy */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            position: 'relative'
          }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${THEME.colors.accent}20, ${THEME.colors.primary}15)`,
              margin: '0 auto 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `3px solid ${THEME.colors.accent}40`
            }}>
              <Users size={64} style={{ color: THEME.colors.primary }} />
            </div>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              color: THEME.colors.text,
              marginBottom: '20px'
            }}>
              Our Teaching Philosophy
            </h2>
            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.2rem',
              color: THEME.colors.primary,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              We believe in honoring each student's unique journey, creating a safe space where transformation happens naturally through compassionate guidance and mindful practice.
            </p>
          </div>

          {/* Team Members in Spiral Formation */}
          <div style={{
            position: 'relative',
            minHeight: '1200px'
          }}>
            {teamMembers.map((member, index) => {
              // Calculate spiral positions
              const angle = (index * 90) * (Math.PI / 180);
              const radius = 300 + (index * 50);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius + 300;
              
              return (
                <div key={index} style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 200px)`,
                  top: `${y}px`,
                  width: '400px',
                  backgroundColor: THEME.colors.surface,
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.1)',
                  border: `2px solid ${THEME.colors.accent}20`,
                  transform: `rotate(${index * 2}deg)`,
                  transition: 'all 0.3s ease'
                }}>
                  {/* Member Card Content */}
                  <div style={{
                    transform: `rotate(${-index * 2}deg)`,
                    padding: '0'
                  }}>
                    {/* Image with Overlay */}
                    <div style={{
                      position: 'relative',
                      height: '250px',
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        background: 'linear-gradient(transparent, rgba(76, 29, 149, 0.8))',
                        padding: '40px 25px 25px',
                        color: 'white'
                      }}>
                        <h3 style={{
                          fontFamily: THEME.fonts.heading,
                          fontSize: '1.8rem',
                          margin: '0 0 5px 0',
                          textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                        }}>
                          {member.name}
                        </h3>
                        <p style={{
                          fontFamily: THEME.fonts.body,
                          fontSize: '1rem',
                          margin: '0',
                          opacity: 0.9,
                          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                        }}>
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '25px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px'
                      }}>
                        <Star size={16} style={{ color: THEME.colors.accent, marginRight: '8px' }} />
                        <span style={{
                          fontFamily: THEME.fonts.body,
                          fontSize: '0.95rem',
                          color: THEME.colors.primary,
                          fontWeight: 600
                        }}>
                          {member.specialty}
                        </span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px'
                      }}>
                        <Award size={16} style={{ color: THEME.colors.accent, marginRight: '8px' }} />
                        <span style={{
                          fontFamily: THEME.fonts.body,
                          fontSize: '0.9rem',
                          color: THEME.colors.text
                        }}>
                          {member.experience} experience
                        </span>
                      </div>

                      <p style={{
                        fontFamily: THEME.fonts.body,
                        fontSize: '0.95rem',
                        color: THEME.colors.text,
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        marginBottom: '20px',
                        borderLeft: `3px solid ${THEME.colors.accent}`,
                        paddingLeft: '15px'
                      }}>
                        "{member.philosophy}"
                      </p>

                      {/* Certifications */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {member.certifications.map((cert, certIndex) => (
                          <span key={certIndex} style={{
                            fontFamily: THEME.fonts.body,
                            fontSize: '0.8rem',
                            backgroundColor: `${THEME.colors.accent}15`,
                            color: THEME.colors.primary,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            border: `1px solid ${THEME.colors.accent}30`
                          }}>
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Join Our Community CTA */}
      <div style={{
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: THEME.spacing.sectionPadding,
        backgroundColor: THEME.colors.surface,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '100%',
          background: `radial-gradient(circle at center, ${THEME.colors.accent}10, transparent 70%)`
        }} />
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <Heart size={32} style={{ color: THEME.colors.accent }} />
            <Leaf size={32} style={{ color: THEME.colors.primary }} />
            <Heart size={32} style={{ color: THEME.colors.accent }} />
          </div>
          
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.8rem',
            color: THEME.colors.text,
            marginBottom: '30px',
            lineHeight: 1.3
          }}>
            Begin Your Journey With Us
          </h2>
          
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.3rem',
            color: THEME.colors.primary,
            marginBottom: '40px',
            lineHeight: 1.7
          }}>
            Our doors are always open to welcome new souls seeking balance, strength, and peace. 
            Let us guide you home to yourself.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/classes" style={{
              fontFamily: THEME.fonts.body,
              backgroundColor: THEME.colors.primary,
              color: 'white',
              padding: '15px 35px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 8px 25px rgba(76, 29, 149, 0.3)',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}>
              View Our Classes
            </Link>
            <Link to="/contact" style={{
              fontFamily: THEME.fonts.body,
              backgroundColor: 'transparent',
              color: THEME.colors.primary,
              padding: '15px 35px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              border: `2px solid ${THEME.colors.primary}`,
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}>
              Connect With Us
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default TeamPage;
