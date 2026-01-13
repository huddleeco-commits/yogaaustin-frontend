import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Heart, Leaf, Sun, Moon } from 'lucide-react';

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

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Your Inner Balance Through Morning Flow",
      excerpt: "Discover how a gentle morning yoga practice can transform your entire day, bringing clarity and peace to your mind and body.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Sarah Chen",
      date: "March 15, 2024",
      category: "Morning Practice",
      featured: true
    },
    {
      id: 2,
      title: "The Art of Breathwork: Your Gateway to Mindfulness",
      excerpt: "Learn ancient breathing techniques that connect your body and soul, creating a foundation for deeper meditation.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Maya Patel",
      date: "March 12, 2024",
      category: "Breathwork"
    },
    {
      id: 3,
      title: "Pilates for Core Strength: Building from Within",
      excerpt: "Explore how focused pilates movements can strengthen not just your core, but your entire sense of stability.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Elena Rodriguez",
      date: "March 10, 2024",
      category: "Pilates"
    },
    {
      id: 4,
      title: "Evening Restorative Practice: Releasing the Day",
      excerpt: "Wind down with gentle poses and meditation techniques that prepare your body and mind for restful sleep.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "David Kim",
      date: "March 8, 2024",
      category: "Evening Practice"
    },
    {
      id: 5,
      title: "Nutrition for the Mindful Body",
      excerpt: "Discover how conscious eating practices align with your yoga journey, nourishing both body and spirit.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Aria Thompson",
      date: "March 5, 2024",
      category: "Wellness"
    },
    {
      id: 6,
      title: "Creating Sacred Space at Home",
      excerpt: "Transform any corner of your home into a sanctuary for practice with these simple, mindful design principles.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Luna Martinez",
      date: "March 3, 2024",
      category: "Home Practice"
    }
  ];

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section with Organic Flow */}
      <div style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #6366f1 50%, #a78bfa 100%)',
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: THEME.spacing.sectionPadding,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            gap: '15px'
          }}>
            <Leaf style={{ color: '#ffffff', width: '40px', height: '40px' }} />
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '3.5rem',
              fontWeight: '300',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              margin: '0'
            }}>
              Mindful Moments
            </h1>
            <Sun style={{ color: '#ffffff', width: '40px', height: '40px' }} />
          </div>
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.3rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            opacity: '0.95'
          }}>
            Journey with us through stories of transformation, wellness wisdom, and the sacred art of mindful living
          </p>
          
          {/* Category Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '40px'
          }}>
            {['All Posts', 'Morning Practice', 'Breathwork', 'Pilates', 'Evening Practice', 'Wellness'].map((category, index) => (
              <div key={index} style={{
                padding: '12px 24px',
                borderRadius: '25px',
                background: index === 0 ? '#ffffff' : 'rgba(255,255,255,0.2)',
                color: index === 0 ? THEME.colors.primary : '#ffffff',
                fontFamily: THEME.fonts.body,
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post - Curved Layout */}
      <div style={{
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: '60px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px 60px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          background: '#ffffff',
          borderRadius: '30px',
          padding: '50px',
          boxShadow: '0 20px 40px rgba(76, 29, 149, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Element */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${THEME.colors.accent}20, ${THEME.colors.primary}10)`,
            zIndex: '0'
          }}></div>

          <div style={{ position: 'relative', zIndex: '1' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: THEME.colors.accent,
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              marginBottom: '25px'
            }}>
              <Heart style={{ width: '16px', height: '16px' }} />
              Featured Story
            </div>
            
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.8rem',
              color: THEME.colors.text,
              marginBottom: '20px',
              lineHeight: '1.2',
              fontWeight: '400'
            }}>
              {blogPosts[0].title}
            </h2>
            
            <p style={{
              fontFamily: THEME.fonts.body,
              fontSize: '1.1rem',
              color: THEME.colors.text,
              lineHeight: '1.7',
              marginBottom: '30px',
              opacity: '0.8'
            }}>
              {blogPosts[0].excerpt}
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: THEME.fonts.body,
                fontSize: '0.9rem',
                color: THEME.colors.text,
                opacity: '0.7'
              }}>
                <User style={{ width: '16px', height: '16px' }} />
                {blogPosts[0].author}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: THEME.fonts.body,
                fontSize: '0.9rem',
                color: THEME.colors.text,
                opacity: '0.7'
              }}>
                <Calendar style={{ width: '16px', height: '16px' }} />
                {blogPosts[0].date}
              </div>
            </div>
            
            <Link to={`/blog/${blogPosts[0].id}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: THEME.colors.primary,
              color: '#ffffff',
              padding: '15px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(76, 29, 149, 0.3)'
            }}>
              Read Full Story
              <ArrowRight style={{ width: '18px', height: '18px' }} />
            </Link>
          </div>
          
          <div style={{ position: 'relative', zIndex: '1' }}>
            <img 
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Blog Grid - Organic Masonry Layout */}
      <div style={{
        paddingBottom: THEME.spacing.sectionPadding,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 80px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {blogPosts.slice(1).map((post, index) => (
            <div key={post.id} style={{
              background: '#ffffff',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 15px 30px rgba(76, 29, 149, 0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)',
              ':hover': {
                transform: `${index % 2 === 0 ? 'translateY(15px)' : 'translateY(-25px)'} scale(1.02)`,
                boxShadow: '0 20px 40px rgba(76, 29, 149, 0.15)'
              }
            }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: THEME.colors.primary,
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontFamily: THEME.fonts.body,
                  fontWeight: '500'
                }}>
                  {post.category}
                </div>
              </div>
              
              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontFamily: THEME.fonts.heading,
                  fontSize: '1.5rem',
                  color: THEME.colors.text,
                  marginBottom: '15px',
                  lineHeight: '1.3',
                  fontWeight: '400'
                }}>
                  {post.title}
                </h3>
                
                <p style={{
                  fontFamily: THEME.fonts.body,
                  fontSize: '0.95rem',
                  color: THEME.colors.text,
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  opacity: '0.8'
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px',
                  borderTop: `1px solid ${THEME.colors.accent}30`
                }}>
                  <div style={{
                    fontFamily: THEME.fonts.body,
                    fontSize: '0.85rem',
                    color: THEME.colors.text,
                    opacity: '0.6'
                  }}>
                    {post.author} • {post.date}
                  </div>
                  
                  <Link to={`/blog/${post.id}`} style={{
                    color: THEME.colors.primary,
                    textDecoration: 'none',
                    fontFamily: THEME.fonts.body,
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.3s ease'
                  }}>
                    Read More
                    <ArrowRight style={{ width: '14px', height: '14px' }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA with Flowing Design */}
      <div style={{
        background: `linear-gradient(45deg, ${THEME.colors.primary}, ${THEME.colors.accent})`,
        paddingTop: THEME.spacing.sectionPadding,
        paddingBottom: THEME.spacing.sectionPadding,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Organic Shapes */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '47% 53% 41% 59%',
          background: 'rgba(255,255,255,0.1)',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '61% 39% 72% 28%',
          background: 'rgba(255,255,255,0.05)',
          animation: 'float 12s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: '1'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
          }}>
            <Moon style={{ color: '#ffffff', width: '50px', height: '50px', opacity: '0.9' }} />
          </div>
          
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '3rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '20px',
            fontWeight: '300'
          }}>
            Stay Connected to Your Practice
          </h2>
          
          <p style={{
            fontFamily: THEME.fonts.body,
            fontSize: '1.2rem',
            color: '#ffffff',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            marginBottom: '40px',
            lineHeight: '1.7',
            opacity: '0.95'
          }}>
            Receive weekly inspiration, mindful tips, and exclusive content delivered to your sanctuary
          </p>
          
          <div style={{
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto',
            gap: '15px',
            alignItems: 'stretch'
          }}>
            <input 
              type="email"
              placeholder="Enter your email for weekly wisdom"
              style={{
                flex: '1',
                padding: '15px 20px',
                borderRadius: '25px',
                border: 'none',
                fontSize: '1rem',
                fontFamily: THEME.fonts.body,
                background: 'rgba(255,255,255,0.95)',
                color: THEME.colors.text,
                outline: 'none'
              }}
            />
            <button style={{
              backgroundColor: '#ffffff',
              color: THEME.colors.primary,
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontFamily: THEME.fonts.body,
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}>
              Join Our Journey
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
