import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Latest news and updates from Open Hearts Dating. Follow our journey to build an accessible dating platform for everyone.',
}

export default function NewsPage() {
  const news = [
    {
      id: 5,
      date: 'January 12, 2026',
      title: 'Early Access Is Open! Join Us in Building This Together 🎉',
      excerpt: 'Today we are opening our Early Access program. Be among the first to join when we launch and help shape what we build.',
      image: '/images/early-access-celebration.jpg',
      imageAlt: 'Diverse group of people with disabilities celebrating together around laptops and video screens',
      content: `We're excited to announce that our Early Access program is officially open!

This isn't just about signing up for early notifications—it's about being part of building something from the ground up. Your voice, your experience, and your feedback will directly shape what Open Hearts Dating becomes.

**Three Ways to Join:**

🔹 Newsletter Subscribers: Get bi-weekly updates and be first to know when we launch

🔹 Beta Testers: Help us test the platform, influence features, and get a special Founder badge

🔹 Community Builders: Join the inner circle, participate in decisions, and help shape our culture

**Why Join Now?**

The first 100 people to join at any level will receive our exclusive Founder status—a special badge, custom themes, and recognition as someone who believed in us from day one.

**Our Promise:**

We won't spam your inbox. We'll be honest about our progress (the good and the challenging). We'll listen to your feedback and act on it. And we'll build this WITH you, not just FOR you.

**What's Next:**

- Spring 2025: Beta testing begins
- Summer 2025: Public launch
- Every 2 weeks: Progress updates

Ready to be part of this? Head to our Join page and choose your level of involvement.

Together, we're creating more than just a dating platform. We're building a community that believes everyone—regardless of disability—deserves to find love.

Thank you for believing in us before we've even launched. Your patience and support mean everything.

With gratitude,
The Open Hearts Dating Team`
    },
    {
      id: 4,
      date: 'January 5, 2026',
      title: 'Why Accessibility Cannot Be an Afterthought',
      excerpt: 'Most dating platforms add accessibility features after launch. We are doing the opposite—building accessibility into our foundation from day one.',
      image: '/images/accessibility-work.jpg',
      imageAlt: 'Person using screen reader and braille display while working on laptop with accessibility software visible',
      content: `When we talk to people with disabilities about their experiences with dating apps, we hear the same frustration over and over: "The app just doesn't work for me."

Screen readers that can't navigate profiles. Buttons that don't respond to keyboard input. Images without descriptions. Video calls without captions. The list goes on.

Here's the thing: most dating platforms add accessibility as an afterthought. They build the entire platform first, launch it, and then—maybe—add some accessibility features later if enough people complain.

**We're doing the opposite.**

At Open Hearts Dating, accessibility isn't a feature we're adding. It's the foundation we're building on.

Every line of code we write is tested with screen readers. Every button works with keyboard navigation. Every image has proper descriptions. Every feature is designed to be usable by everyone from day one.

Why? Because you shouldn't have to fight with technology just to find love.

**What This Means in Practice:**

- Our developers test with actual assistive technologies daily
- We consult with disability advocates throughout development
- We prioritize accessibility over flashy features
- We design for diverse abilities from the start

**The Result:**

When we launch, Open Hearts Dating won't just be "somewhat accessible" or "getting better at accessibility." It will work. For everyone. From day one.

Because when 1.3 billion people with disabilities worldwide deserve access to love and connection, "we'll add it later" isn't good enough.

Accessibility isn't a feature. It's a human right. And we're building like we believe that.`
    },
    {
      id: 3,
      date: 'December 28, 2025',
      title: 'Building in Public: Our Development Roadmap',
      excerpt: 'Transparency matters. Here is exactly what we are building, when we plan to launch, and how you can be part of the journey.',
      image: '/images/team-working.jpg',
      imageAlt: 'Diverse team of people working collaboratively in bright modern workspace',
      content: `One of our core values is radical transparency. So today, we want to share our exact development roadmap with you.

**Where We Are Now (January 2026):**

✅ Mission and vision defined
✅ Website launched
✅ Early Access program open
✅ Core team assembled
🔄 Platform architecture in progress
🔄 Accessibility testing framework being built

**What's Coming Next:**

**Q1 2026 (Jan-Mar):**
- Finalize platform design
- Build core matching algorithm
- Develop accessibility testing protocols
- Recruit beta testers from Early Access community

**Q2 2026 (Apr-Jun):**
- Beta testing begins (Spring 2026)
- Gather feedback and iterate
- Safety and moderation systems
- Final accessibility audits

**Q3 2026 (Jul-Sep):**
- Public launch (Summer 2026)
- Onboard first users
- Community building
- Continuous improvement based on feedback

**What We're Building:**

The platform will include:
- Accessible profile creation and browsing
- Smart matching that considers disability-related preferences
- Multiple communication options (text, voice, video - all accessible)
- Strong safety features and human moderation
- Core features free, with optional premium features

**What Makes Us Different:**

We're not trying to be the fastest. We're not trying to have every feature. We're trying to build something that actually works for the people who need it most.

That means:
- Taking time to do accessibility right
- Testing thoroughly before launch
- Building safety in from the start
- Listening to our community

**How You Can Help:**

Join our Early Access program. Share your experiences and needs. Tell us what matters most to you. Be part of shaping what we build.

**Our Promise:**

We'll be honest about timelines (even when they slip). We'll share both successes and challenges. We'll build in public and let you see the process.

Because you deserve to know exactly what you're waiting for—and to have a voice in creating it.

Stay tuned. The best is yet to come.`
    },
    {
      id: 2,
      date: 'December 20, 2025',
      title: 'The Numbers Behind the Need',
      excerpt: '1.3 billion people worldwide live with disabilities. Most face significant barriers in online dating. Here is why that needs to change.',
      image: '/images/mission-community.jpg',
      imageAlt: 'Large diverse community group including wheelchair users and people with white canes gathered together outdoors',
      content: `Let's talk numbers. Not because we want to reduce people to statistics, but because the scale of this problem deserves to be seen.

**1.3 billion people** worldwide live with a disability. That's 16% of the global population. In the United States alone, it's 61 million adults—about 1 in 4.

Now consider this: the vast majority of dating platforms are inaccessible to many of these people.

**What the Research Shows:**

Studies consistently find that people with disabilities face significant barriers in online dating:

- Many dating apps fail basic accessibility standards for screen readers
- Video chat features often lack captions or sign language support  
- Profile formats don't accommodate explaining disability-related needs
- Matching algorithms don't consider disability compatibility
- Safety features don't address higher vulnerability to abuse

The result? Millions of people are effectively locked out of the primary way modern relationships begin.

**But Here's What Really Matters:**

Behind every one of those 1.3 billion people is a human being who wants what we all want:
- To be seen and valued
- To connect with someone special  
- To not have to hide or explain themselves constantly
- To experience love without barriers

**The Opportunity:**

This isn't just a problem—it's a massive opportunity to do something meaningful.

If we can build a dating platform that actually works for people with disabilities, we're not serving a "niche market." We're serving 16% of humanity. Plus their friends, family, and allies who care about accessibility.

**Why It Matters:**

Love and connection aren't luxuries. They're fundamental human needs. When 1.3 billion people face unnecessary barriers to finding these things, that's not acceptable.

So yes, we're building a dating platform. But really, we're working to remove barriers that never should have existed in the first place.

Because everyone—every single one of those 1.3 billion people—deserves a chance at love.`
    },
    {
      id: 1,
      date: 'December 15, 2025',
      title: 'Welcome to Open Hearts Dating',
      excerpt: 'Today marks the beginning of something we believe is long overdue: a dating platform built by and for people with disabilities.',
      image: '/images/dating-app-phone.jpg',
      imageAlt: 'Hands holding smartphone showing dating app match notification in warm coffee shop setting',
      content: `Today, we're launching the website for Open Hearts Dating, and with it, the beginning of a journey we believe is long overdue.

**Why We're Here:**

Dating is hard enough without additional barriers. Yet people with disabilities face unique challenges that most dating platforms simply weren't designed to address:

- Apps that don't work with screen readers
- Platforms where disclosing a disability often leads to ghosting
- No way to filter for people who understand disability culture
- Safety concerns that go unaddressed
- Features that assume everyone can see, hear, and move in the same ways

We're building Open Hearts Dating because everyone deserves the chance to find love—and because the current options aren't good enough.

**What Makes Us Different:**

This isn't just another dating app with an accessibility checkbox. We're building from the ground up with disability at the center:

🔹 Accessibility isn't an add-on—it's our foundation
🔹 Your disability isn't something to hide—it's part of your story
🔹 Safety isn't a feature—it's a promise
🔹 This is nonprofit—we're not here to profit from loneliness

**Where We're Going:**

We're currently in the early stages of development. Over the coming months, you'll see:

- Regular updates on our progress
- Opportunities to shape what we build
- A beta testing program (Spring 2026)
- And eventually, a platform we're truly proud of

**How You Can Help:**

Join our Early Access program. Share your experiences and needs. Tell your friends. Be part of this from the beginning.

**Our Promise:**

We won't rush this. We'll build it right. We'll listen to your feedback. And we'll create something that actually serves the community it's meant for.

Thank you for being here at the start. This is just the beginning, and we're honored to have you with us.

With hope and determination,
The Open Hearts Dating Team`
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>News & Updates</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Follow our journey to build an accessible dating platform for everyone.
            We believe in transparency—you'll see both our successes and challenges here.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {news.map((article) => (
              <article 
                key={article.id}
                style={{
                  marginBottom: '4rem',
                  padding: '2.5rem',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: article.id === 5 ? '2px solid #667eea' : 'none'
                }}
              >
                {article.id === 5 && (
                  <div style={{
                    display: 'inline-block',
                    background: '#667eea',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    🔥 NEW
                  </div>
                )}
                
                <time style={{ 
                  display: 'block',
                  fontSize: '0.9rem',
                  color: '#667eea',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  {article.date}
                </time>
                
                <h2 style={{ 
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  {article.title}
                </h2>

                {/* Article Image */}
                {article.image && (
                  <div style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    marginBottom: '1.5rem',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={article.id === 5}
                    />
                  </div>
                )}
                
                <p style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.8',
                  color: '#4b5563',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  {article.excerpt}
                </p>
                
                <div style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.9',
                  color: '#374151',
                  whiteSpace: 'pre-line'
                }}>
                  {article.content}
                </div>

                {article.id === 5 && (
                  <div style={{ 
                    marginTop: '2rem',
                    padding: '1.5rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <a 
                      href="/join" 
                      className="button"
                      style={{ fontSize: '1.1rem' }}
                    >
                      Join Early Access Now 💙
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
