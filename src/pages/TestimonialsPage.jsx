import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, Users, Award, ArrowRight } from 'lucide-react';

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

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=150&h=150&fit=crop&crop=face",
      quote: "This studio has completely transformed my relationship with movement. The instructors create such a nurturing space where I feel safe to explore my practice without judgment.",
      rating: 5,
      highlight: "transformed my relationship"
    },
    {
      name: "Marcus Thompson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "As someone who carries a lot of stress from work, finding this sanctuary has been life-changing. The mindful approach to movement helps me reconnect with my body.",
      rating: 5,
      highlight: "life-changing sanctuary"
    },
    {
      name: "Elena Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The community here is incredible. Every class feels like a gentle journey inward, guided by teachers who truly understand the holistic nature of wellness.",
      rating: 5,
      highlight: "gentle journey inward"
    },
    {
      name: "David Kim",
      role: "Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "I've practiced at many studios, but none have felt so welcoming and authentic. The balanced approach to yoga and Pilates keeps me coming back every week.",
      rating: 5,
      highlight: "welcoming and authentic"
    },
    {
      name: "Amara Patel",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      quote: "The instructors here don't just teach poses—they guide you toward a deeper understanding of your body and mind. It's truly a place where healing happens.",
      rating: 5,
      highlight: "where healing happens"
    },
    {
      name: "James Wilson",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "The peaceful environment and expert guidance have helped me develop not just physical strength, but mental clarity. This is more than a studio—it's a community.",
      rating: 5,
      highlight: "mental clarity"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Students" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" },
    { icon: Award, number: "5", label: "Years of Excellence" }
  ];

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        height: '70vh',
        backgroundImage: 'linear-gradient(135deg, rgba(76, 29, 149, 0.9), rgba(167, 139, 250, 0.8)), url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          maxWidth: '800px',
          padding: '0 20px',
          zIndex: 2
        }}>
          <Quote style={{ 
            width: '60px', 
            height: '60px', 
            margin: '0 auto 30px',
            opacity: 0.8
          }} />
          <h1 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: '3.5rem',
            fontWeight: '300',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Stories of Transformation
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            fontFamily: THEME.fonts.body,
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover how our community finds peace, strength, and freedom through mindful movement
          </p>
        </div>
        
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.08)',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1
        }} />
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: '#ffffff',
        marginTop: '-50px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          backgroundColor: THEME.colors.surface,
          borderRadius: '20px',
          padding: '60px 40px',
          boxShadow: '0 20px 40px rgba(76, 29, 149, 0.1)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ padding: '20px' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  backgroundColor: THEME.colors.accent,
                  borderRadius: '50%',
                  marginBottom: '20px'
                }}>
                  <stat.icon style={{ width: '40px', height: '40px', color: '#ffffff' }} />
                </div>
                <h3 style={{ 
                  fontFamily: THEME.fonts.heading,
                  fontSize: '2.5rem',
                  color: THEME.colors.primary,
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  {stat.number}
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body,
                  color: THEME.colors.text,
                  fontSize: '1.1rem'
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading,
              fontSize: '2.8rem',
              color: THEME.colors.primary,
              marginBottom: '20px',
              fontWeight: '300'
            }}>
              Voices from Our Community
            </h2>
            <div style={{ 
              width: '80px', 
              height: '4px', 
              backgroundColor: THEME.colors.accent,
              margin: '0 auto',
              borderRadius: '2px'
            }} />
          </div>

          {/* Masonry-style testimonials layout */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
            alignItems: 'start'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(76, 29, 149, 0.08)',
                position: 'relative',
                marginTop: index % 2 === 1 ? '40px' : '0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(76, 29, 149, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(76, 29, 149, 0.08)';
              }}>
                <Quote style={{ 
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '30px',
                  height: '30px',
                  color: THEME.colors.accent,
                  opacity: 0.3
                }} />
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ 
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '15px',
                      border: `3px solid ${THEME.colors.accent}`
                    }}
                  />
                  <div>
                    <h4 style={{ 
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.3rem',
                      color: THEME.colors.primary,
                      marginBottom: '5px'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ 
                      fontFamily: THEME.fonts.body,
                      fontSize: '0.9rem',
                      color: THEME.colors.text,
                      opacity: 0.7
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  marginBottom: '20px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{ 
                      width: '18px', 
                      height: '18px', 
                      fill: THEME.colors.accent,
                      color: THEME.colors.accent,
                      marginRight: '3px'
                    }} />
                  ))}
                </div>

                <p style={{ 
                  fontFamily: THEME.fonts.body,
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: THEME.colors.text,
                  marginBottom: '20px'
                }}>
                  "{testimonial.quote}"
                </p>

                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: THEME.colors.background,
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600'
                }}>
                  {testimonial.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        backgroundColor: '#ffffff'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          textAlign: 'center',
          padding: '60px 40px',
          backgroundColor: THEME.colors.surface,
          borderRadius: '25px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: THEME.colors.accent,
            opacity: 0.1,
            zIndex: 1
          }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <Heart style={{ 
              width: '50px', 
              height: '50px', 
              color: THEME.colors.accent,
              marginBottom: '25px'
            }} />
            <h2 style={{ 
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              color: THEME.colors.primary,
              marginBottom: '20px',
              fontWeight: '300'
            }}>
              Ready to Begin Your Journey?
            </h2>
            <p style={{ 
              fontFamily: THEME.fonts.body,
              fontSize: '1.2rem',
              color: THEME.colors.text,
              marginBottom: '40px',
              opacity: 0.8
            }}>
              Join our welcoming community and discover your own transformation
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/classes" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: THEME.colors.primary,
                color: '#ffffff',
                padding: '18px 35px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(76, 29, 149, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = THEME.colors.text;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = THEME.colors.primary;
                e.target.style.transform = 'translateY(0)';
              }}>
                View Classes <ArrowRight style={{ width: '20px', height: '20px' }} />
              </Link>
              <Link to="/contact" style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                padding: '18px 35px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontFamily: THEME.fonts.body,
                fontSize: '1.1rem',
                fontWeight: '600',
                border: `2px solid ${THEME.colors.primary}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = THEME.colors.primary;
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = THEME.colors.primary;
              }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialsPage;
