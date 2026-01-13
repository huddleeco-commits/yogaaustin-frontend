import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Flower2, Heart, Users, Clock, DollarSign, MapPin, Phone, Mail } from 'lucide-react';

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

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Flower2, color: '#4c1d95' },
    { id: 'classes', name: 'Classes & Programs', icon: Users, color: '#7c3aed' },
    { id: 'pricing', name: 'Pricing & Packages', icon: DollarSign, color: '#a78bfa' },
    { id: 'wellness', name: 'Wellness & Safety', icon: Heart, color: '#c4b5fd' },
    { id: 'practical', name: 'Practical Info', icon: MapPin, color: '#8b5cf6' }
  ];

  const faqs = {
    'getting-started': [
      {
        question: "I'm completely new to yoga. Is this the right place for me?",
        answer: "Absolutely! 'A Place to Be Free' welcomes practitioners of all levels. We offer beginner-friendly classes and our instructors provide modifications for every pose. Your journey starts exactly where you are."
      },
      {
        question: "What should I bring to my first class?",
        answer: "Just bring yourself and comfortable clothing that allows you to move freely. We provide mats, props, and everything else you need. Though you're welcome to bring your own mat if you prefer."
      },
      {
        question: "How early should I arrive for class?",
        answer: "We recommend arriving 10-15 minutes early for your first visit to complete any paperwork and get oriented. For regular classes, 5-10 minutes early allows time to settle in mindfully."
      }
    ],
    'classes': [
      {
        question: "What types of yoga do you offer?",
        answer: "We offer Hatha, Vinyasa, Yin, Restorative yoga, and Pilates. Each style serves different needs - from dynamic flow classes to gentle, meditative practices. Our schedule includes options for every preference and energy level."
      },
      {
        question: "Can I try different class styles with one membership?",
        answer: "Yes! Our memberships give you access to all class types. We encourage exploring different styles to find what resonates with your body and spirit on any given day."
      },
      {
        question: "Do you offer private sessions?",
        answer: "We offer personalized one-on-one and small group sessions. These are perfect for addressing specific needs, injuries, or simply deepening your practice in a more intimate setting."
      }
    ],
    'pricing': [
      {
        question: "What membership options do you have?",
        answer: "We offer flexible options: drop-in classes, class packages, unlimited monthly memberships, and annual memberships. We also have student and senior discounts because wellness should be accessible."
      },
      {
        question: "Do you offer any trial packages for new students?",
        answer: "Yes! New students can enjoy unlimited classes for their first month at a special introductory rate. It's the perfect way to explore our offerings and find your rhythm."
      },
      {
        question: "Can I freeze my membership if I'm traveling?",
        answer: "Absolutely. We understand life happens. You can freeze your membership for up to 3 months per year for extended travel, injury recovery, or other life circumstances."
      }
    ],
    'wellness': [
      {
        question: "I have an injury. Can I still practice?",
        answer: "Many injuries can benefit from gentle yoga practice, but we always recommend consulting your healthcare provider first. Our instructors are trained to offer modifications and can work with you to create a safe practice."
      },
      {
        question: "Is the studio kept at a specific temperature?",
        answer: "We maintain a comfortable, slightly warm environment that supports muscle flexibility without being overwhelming. Our space is designed for comfort across all seasons."
      },
      {
        question: "What safety protocols do you follow?",
        answer: "Your wellbeing is our priority. We maintain high cleanliness standards, ensure proper ventilation, keep class sizes manageable, and our instructors are certified in both yoga and basic first aid."
      }
    ],
    'practical': [
      {
        question: "Where are you located and is parking available?",
        answer: "We're located in the heart of the wellness district with free parking available. Public transportation stops are within a short walk. Our space is designed to be easily accessible to everyone."
      },
      {
        question: "Can I purchase gift certificates?",
        answer: "Yes! Gift certificates are available for classes, packages, or memberships. They're perfect for sharing the gift of wellness with loved ones and never expire."
      },
      {
        question: "How do I book classes?",
        answer: "You can book through our website, mobile app, or by calling the studio. We recommend booking in advance for popular classes, though we always welcome walk-ins when space allows."
      }
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section with Mandala Background */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #7c3aed 100%)`,
        color: '#ffffff',
        textAlign: 'center',
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Mandala Pattern */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.1)',
          transform: 'rotate(45deg)'
        }}>
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.1)'
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <Flower2 size={60} style={{ marginBottom: '20px', color: THEME.colors.accent }} />
          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3.5rem',
            fontWeight: '400',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Questions & Guidance
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '600px',
            margin: '0 auto',
            opacity: '0.9',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Find answers to help you begin or deepen your wellness journey with us
          </p>
        </div>
      </section>

      {/* Floating Category Navigation */}
      <section style={{
        padding: '40px 20px 0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '60px'
        }}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  background: activeCategory === category.id ? category.color : 'white',
                  color: activeCategory === category.id ? 'white' : category.color,
                  border: `2px solid ${category.color}`,
                  borderRadius: '50px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontFamily: THEME.fonts.body,
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category.id ? `0 8px 25px ${category.color}30` : '0 4px 15px rgba(0,0,0,0.1)',
                  transform: activeCategory === category.id ? 'translateY(-2px)' : 'none'
                }}
              >
                <IconComponent size={18} />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion with Organic Flow */}
      <section style={{
        padding: '0 20px 80px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(76, 29, 149, 0.1)',
          border: '1px solid rgba(167, 139, 250, 0.2)'
        }}>
          {faqs[activeCategory]?.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: index < faqs[activeCategory].length - 1 ? '1px solid rgba(167, 139, 250, 0.2)' : 'none',
                paddingBottom: '30px',
                marginBottom: index < faqs[activeCategory].length - 1 ? '30px' : '0'
              }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}
              >
                <h3 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.4rem',
                  color: THEME.colors.text,
                  fontWeight: '500',
                  lineHeight: '1.4',
                  margin: '0'
                }}>
                  {faq.question}
                </h3>
                <div style={{
                  background: openQuestion === index ? THEME.colors.accent : THEME.colors.surface,
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  transform: openQuestion === index ? 'rotate(180deg)' : 'none'
                }}>
                  {openQuestion === index ? 
                    <Minus size={18} color={openQuestion === index ? 'white' : THEME.colors.text} /> : 
                    <Plus size={18} color={THEME.colors.text} />
                  }
                </div>
              </button>
              
              {openQuestion === index && (
                <div style={{
                  marginTop: '25px',
                  paddingLeft: '0',
                  animation: 'fadeIn 0.3s ease-out'
                }}>
                  <p style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: '#64748b',
                    margin: '0'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.surface} 0%, white 100%)`,
        padding: `${THEME.spacing.sectionPadding}px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.text,
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            Still have questions?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            We're here to support your wellness journey. Reach out and let's connect.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} color={THEME.colors.accent} />
              <span style={{ fontFamily: THEME.fonts.body, color: THEME.colors.text }}>(555) 123-YOGA</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} color={THEME.colors.accent} />
              <span style={{ fontFamily: THEME.fonts.body, color: THEME.colors.text }}>hello@placebefree.com</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: THEME.colors.primary,
              color: 'white',
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              boxShadow: `0 10px 30px ${THEME.colors.primary}40`,
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'none'}>
              Get in Touch
            </Link>
            <Link to="/classes" style={{
              background: 'white',
              color: THEME.colors.primary,
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              border: `2px solid ${THEME.colors.primary}`,
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'none'}>
              View Classes
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FaqPage;
