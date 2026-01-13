import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Heart, Flower2, Sparkles, Star, Users, Clock, Infinity } from 'lucide-react';

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

const PricingPage = () => {
  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.accent} 100%)`,
        padding: `${THEME.spacing.sectionPadding} 0`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }} />
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          position: 'relative',
          textAlign: 'center'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
            <Flower2 style={{ width: '32px', height: '32px', color: '#ffffff', marginRight: '12px' }} />
            <span style={{ 
              color: '#ffffff', 
              fontSize: '18px',
              fontFamily: THEME.fonts.body,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>Choose Your Path</span>
          </div>
          <h1 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '300',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Find Your Balance
          </h1>
          <p style={{ 
            fontSize: '20px',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: THEME.fonts.body,
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Flexible membership options designed to support your wellness journey, wherever you are in life.
          </p>
        </div>
      </section>

      {/* Unique Circular Pricing Layout */}
      <section style={{ padding: `${THEME.spacing.sectionPadding} 0` }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Center Circle - Most Popular */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              border: `4px solid ${THEME.colors.accent}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(76, 29, 149, 0.15)',
              zIndex: 3,
              transform: 'scale(1.1)'
            }}>
              <div style={{ 
                backgroundColor: THEME.colors.accent,
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                marginBottom: '20px',
                position: 'absolute',
                top: '-15px'
              }}>
                MOST POPULAR
              </div>
              <Sparkles style={{ width: '40px', height: '40px', color: THEME.colors.accent, marginBottom: '16px' }} />
              <h3 style={{ 
                fontFamily: THEME.fonts.heading,
                fontSize: '28px',
                color: THEME.colors.text,
                marginBottom: '12px'
              }}>
                Unlimited
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  fontSize: '36px',
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>$129</span>
                <span style={{ 
                  fontSize: '16px',
                  color: THEME.colors.text,
                  fontFamily: THEME.fonts.body
                }}>/month</span>
              </div>
              <button style={{
                backgroundColor: THEME.colors.primary,
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                Start Your Journey
              </button>
            </div>

            {/* Top Left - Beginner */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '20%',
              width: '260px',
              height: '260px',
              backgroundColor: THEME.colors.surface,
              borderRadius: '50%',
              border: `2px solid ${THEME.colors.accent}50`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(76, 29, 149, 0.08)',
              zIndex: 2
            }}>
              <Heart style={{ width: '32px', height: '32px', color: THEME.colors.accent, marginBottom: '12px' }} />
              <h3 style={{ 
                fontFamily: THEME.fonts.heading,
                fontSize: '24px',
                color: THEME.colors.text,
                marginBottom: '8px'
              }}>
                Beginner
              </h3>
              <div style={{ marginBottom: '16px' }}>
                <span style={{ 
                  fontSize: '28px',
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>$49</span>
                <span style={{ 
                  fontSize: '14px',
                  color: THEME.colors.text,
                  fontFamily: THEME.fonts.body
                }}>/month</span>
              </div>
              <p style={{ 
                fontSize: '14px',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body,
                marginBottom: '16px'
              }}>
                4 classes per month
              </p>
              <button style={{
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                border: `2px solid ${THEME.colors.primary}`,
                padding: '10px 20px',
                borderRadius: '20px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                Get Started
              </button>
            </div>

            {/* Top Right - Dedicated */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '20%',
              width: '260px',
              height: '260px',
              backgroundColor: THEME.colors.surface,
              borderRadius: '50%',
              border: `2px solid ${THEME.colors.accent}50`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(76, 29, 149, 0.08)',
              zIndex: 2
            }}>
              <Star style={{ width: '32px', height: '32px', color: THEME.colors.accent, marginBottom: '12px' }} />
              <h3 style={{ 
                fontFamily: THEME.fonts.heading,
                fontSize: '24px',
                color: THEME.colors.text,
                marginBottom: '8px'
              }}>
                Dedicated
              </h3>
              <div style={{ marginBottom: '16px' }}>
                <span style={{ 
                  fontSize: '28px',
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>$89</span>
                <span style={{ 
                  fontSize: '14px',
                  color: THEME.colors.text,
                  fontFamily: THEME.fonts.body
                }}>/month</span>
              </div>
              <p style={{ 
                fontSize: '14px',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body,
                marginBottom: '16px'
              }}>
                12 classes per month
              </p>
              <button style={{
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                border: `2px solid ${THEME.colors.primary}`,
                padding: '10px 20px',
                borderRadius: '20px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                Choose Plan
              </button>
            </div>

            {/* Bottom Left - Drop-in */}
            <div style={{
              position: 'absolute',
              bottom: '50px',
              left: '15%',
              width: '220px',
              height: '220px',
              backgroundColor: THEME.colors.surface,
              borderRadius: '50%',
              border: `2px solid ${THEME.colors.accent}30`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(76, 29, 149, 0.06)',
              zIndex: 1
            }}>
              <Clock style={{ width: '28px', height: '28px', color: THEME.colors.accent, marginBottom: '10px' }} />
              <h3 style={{ 
                fontFamily: THEME.fonts.heading,
                fontSize: '20px',
                color: THEME.colors.text,
                marginBottom: '6px'
              }}>
                Drop-in
              </h3>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ 
                  fontSize: '24px',
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>$25</span>
                <span style={{ 
                  fontSize: '12px',
                  color: THEME.colors.text,
                  fontFamily: THEME.fonts.body
                }}>/class</span>
              </div>
              <p style={{ 
                fontSize: '12px',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body,
                marginBottom: '12px'
              }}>
                Single session
              </p>
              <button style={{
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                border: `2px solid ${THEME.colors.primary}`,
                padding: '8px 16px',
                borderRadius: '15px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '11px'
              }}>
                Book Now
              </button>
            </div>

            {/* Bottom Right - Premium */}
            <div style={{
              position: 'absolute',
              bottom: '50px',
              right: '15%',
              width: '220px',
              height: '220px',
              backgroundColor: THEME.colors.surface,
              borderRadius: '50%',
              border: `2px solid ${THEME.colors.accent}30`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(76, 29, 149, 0.06)',
              zIndex: 1
            }}>
              <Infinity style={{ width: '28px', height: '28px', color: THEME.colors.accent, marginBottom: '10px' }} />
              <h3 style={{ 
                fontFamily: THEME.fonts.heading,
                fontSize: '20px',
                color: THEME.colors.text,
                marginBottom: '6px'
              }}>
                Premium
              </h3>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ 
                  fontSize: '24px',
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  fontFamily: THEME.fonts.body
                }}>$179</span>
                <span style={{ 
                  fontSize: '12px',
                  color: THEME.colors.text,
                  fontFamily: THEME.fonts.body
                }}>/month</span>
              </div>
              <p style={{ 
                fontSize: '12px',
                color: THEME.colors.text,
                fontFamily: THEME.fonts.body,
                marginBottom: '12px'
              }}>
                Unlimited + perks
              </p>
              <button style={{
                backgroundColor: 'transparent',
                color: THEME.colors.primary,
                border: `2px solid ${THEME.colors.primary}`,
                padding: '8px 16px',
                borderRadius: '15px',
                fontFamily: THEME.fonts.body,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '11px'
              }}>
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        backgroundColor: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.text,
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            What's Included
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              { icon: Users, title: 'Group Classes', desc: 'Join our welcoming community in yoga and pilates sessions' },
              { icon: Heart, title: 'Mindfulness Sessions', desc: 'Guided meditation and breathing exercises' },
              { icon: Sparkles, title: 'Premium Equipment', desc: 'Access to all mats, blocks, straps, and props' },
              { icon: Clock, title: 'Flexible Scheduling', desc: 'Book and reschedule classes with ease' }
            ].map((item, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '30px',
                backgroundColor: THEME.colors.background,
                borderRadius: '20px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <item.icon style={{ 
                  width: '48px', 
                  height: '48px', 
                  color: THEME.colors.accent, 
                  marginBottom: '20px' 
                }} />
                <h3 style={{ 
                  fontFamily: THEME.fonts.heading,
                  fontSize: '24px',
                  color: THEME.colors.text,
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontFamily: THEME.fonts.body,
                  color: THEME.colors.text,
                  opacity: 0.8,
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        backgroundColor: THEME.colors.surface,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.text,
            marginBottom: '24px'
          }}>
            Ready to Begin?
          </h2>
          <p style={{ 
            fontSize: '18px',
            color: THEME.colors.text,
            fontFamily: THEME.fonts.body,
            marginBottom: '40px',
            opacity: 0.8
          }}>
            Join our community and start your wellness journey today. First class is always free.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: THEME.colors.primary,
              color: '#ffffff',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '30px',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Start Free Trial
            </button>
            <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: THEME.colors.primary,
              border: `2px solid ${THEME.colors.primary}`,
              padding: '14px 32px',
              borderRadius: '30px',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none'
            }}>
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
