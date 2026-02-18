'use client'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Finally, a platform that gets it. I'm tired of explaining my disability on every date.",
      author: "Alex M.",
      role: "Beta Tester"
    },
    {
      text: "The accessibility is incredible. Every button works with my screen reader!",
      author: "Maria S.",
      role: "Early Access Member"
    },
    {
      text: "I've never felt so hopeful about online dating. This community actually cares.",
      author: "Dmitry K.",
      role: "Community Builder"
    }
  ]

  return (
    <section className="content-section content-section-alt">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          What People Are Saying 💙
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: '4px solid var(--primary)'
              }}
            >
              <p style={{ 
                fontSize: '1.05rem', 
                lineHeight: '1.7', 
                marginBottom: '1rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <p style={{ 
                fontWeight: '600', 
                marginBottom: '0.25rem',
                color: 'var(--primary)'
              }}>
                {testimonial.author}
              </p>
              <p style={{ 
                fontSize: '0.9rem', 
                opacity: '0.7'
              }}>
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
