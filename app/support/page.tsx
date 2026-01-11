import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Us — Volunteers, Donors, and Community Partners',
  description: 'Support Open Hearts Dating through volunteering, donations, or partnerships. Help us build an accessible dating platform for people with disabilities and create a more inclusive dating world.',
  openGraph: {
    title: 'Support Us — Volunteers, Donors, and Community Partners',
    description: 'Support Open Hearts Dating through volunteering, donations, or partnerships. Help us build an accessible dating platform for people with disabilities.',
  },
}

export default function SupportPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Support Open Hearts Dating</h1>
          <p>
            As a nonprofit organization, we rely on the support of volunteers, donors, and 
            community partners to make our mission possible. There are many ways to get 
            involved and help us build an accessible dating platform for people with disabilities.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Ways to Support</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>Volunteers</h3>
            <p>
              We're always looking for dedicated volunteers to help with various aspects of 
              our organization. Whether you have technical skills, marketing experience, 
              community outreach abilities, or simply a passion for our mission, we'd love 
              to have you on board.
            </p>
            <p>
              Volunteer opportunities include:
            </p>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Web development and accessibility testing</li>
              <li>Content creation and writing</li>
              <li>Community outreach and engagement</li>
              <li>User experience research and testing</li>
              <li>Social media and marketing</li>
              <li>Administrative support</li>
            </ul>
            <p>
              If you're interested in volunteering, please reach out through our contact page. 
              We're particularly interested in volunteers who have experience with disabilities 
              or accessibility, as your insights are invaluable to our mission.
            </p>

            <h3>Donors</h3>
            <p>
              Financial support is crucial to our ability to develop and maintain an accessible 
              dating platform. As a nonprofit, every donation goes directly toward our mission 
              of creating an inclusive dating community.
            </p>
            <p>
              Your donations help us:
            </p>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Develop and maintain our accessible dating platform</li>
              <li>Conduct user research and accessibility testing</li>
              <li>Provide community resources and support</li>
              <li>Cover operational costs and infrastructure</li>
              <li>Expand our reach and impact</li>
            </ul>
            <p>
              We're committed to transparency in how we use donations. All contributions are 
              used to further our mission of creating an accessible and inclusive dating 
              platform. Donation information will be available through our contact page as 
              we set up our donation system.
            </p>

            <h3>Community Partners</h3>
            <p>
              We're always looking to partner with organizations, businesses, and individuals 
              who share our commitment to accessibility and inclusion. Partnerships can take 
              many forms, from technical collaborations to community outreach initiatives.
            </p>
            <p>
              If you represent an organization that might be interested in partnering with 
              Open Hearts Dating, we'd love to hear from you. Together, we can create a 
              greater impact and reach more people in the disability community.
            </p>

            <h3>Spread the Word</h3>
            <p>
              One of the simplest and most valuable ways to support us is by spreading the 
              word about Open Hearts Dating. Share our mission with your networks, follow us 
              on social media (when available), and help us build awareness about the 
              importance of accessible dating platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Why Your Support Matters</h2>
          <p>
            Building an accessible dating platform requires significant resources, expertise, 
            and commitment. As a nonprofit organization, we don't have the same financial 
            backing as commercial dating platforms, but we have something more valuable: a 
            clear mission and a dedicated community.
          </p>
          <p>
            Your support, whether through volunteering, donating, or partnering, directly 
            contributes to:
          </p>
          <ul style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <li>Breaking down barriers in the dating world for people with disabilities</li>
            <li>Creating opportunities for meaningful connections and relationships</li>
            <li>Raising awareness about accessibility and inclusion</li>
            <li>Building a supportive community where everyone belongs</li>
            <li>Advocating for greater inclusion in the broader dating industry</li>
          </ul>
          <p>
            Every contribution, no matter how small, helps us move closer to our goal of 
            creating the most accessible and inclusive dating platform available.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Get Involved</h2>
          <p>
            Ready to support Open Hearts Dating? We'd love to hear from you. Whether you're 
            interested in volunteering, making a donation, exploring partnership opportunities, 
            or simply learning more about how you can help, please reach out through our 
            contact page.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="/contact" className="button">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  )
}