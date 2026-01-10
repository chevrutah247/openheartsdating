import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission — Building an Inclusive Dating Community",
  description:
    "Learn about Open Hearts Dating's mission to create an accessible and inclusive dating platform for people with disabilities. Discover our values and commitment to breaking down barriers in online dating.",
  openGraph: {
    title: "Our Mission — Building an Inclusive Dating Community",
    description:
      "Learn about Open Hearts Dating's mission to create an accessible and inclusive dating platform for people with disabilities.",
  },
};

export default function MissionPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Our Mission</h1>
          <p>
            Open Hearts Dating exists to break down barriers and create opportunities for
            meaningful connections in the disability community. We believe everyone deserves
            the chance to find love, build relationships, and experience the joy of human
            connection.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            We envision a world where people with disabilities have equal access to dating
            platforms and opportunities to form meaningful relationships. Our vision extends
            beyond just creating a dating website—we're building a movement toward greater
            inclusion and understanding in the dating world.
          </p>
          <p>Through our nonprofit dating platform, we aim to:</p>

          <ul style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
            <li>Create the most accessible dating platform available</li>
            <li>Foster a supportive and inclusive community</li>
            <li>Raise awareness about the importance of accessible dating</li>
            <li>Provide resources and support for people navigating dating with disabilities</li>
            <li>Advocate for greater inclusion in the broader dating industry</li>
          </ul>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Our Values</h2>

          <h3>Accessibility First</h3>
          <p>
            Every feature we build, every design decision we make, starts with accessibility.
            We're committed to meeting and exceeding WCAG 2.1 AA standards and ensuring our
            platform is usable by everyone, regardless of their abilities.
          </p>

          <h3>Inclusion and Diversity</h3>
          <p>
            We celebrate the diversity within the disability community and welcome people of
            all backgrounds, identities, and experiences. Our platform is a space where
            everyone can be their authentic selves.
          </p>

          <h3>Community-Centered</h3>
          <p>
            Our community members are at the heart of everything we do. We listen to feedback,
            involve community members in our development process, and prioritize features that
            truly serve our users' needs.
          </p>

          <h3>Transparency</h3>
          <p>
            As a nonprofit organization, we're committed to transparency in our operations,
            development progress, and use of resources. We believe in accountability to our
            community and supporters.
          </p>

          <h3>Safety and Respect</h3>
          <p>
            We're dedicated to creating a safe, respectful environment where all members can
            feel comfortable and secure. Our platform will have robust safety features and
            clear community guidelines.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why We Exist</h2>
          <p>
            People with disabilities face unique challenges when it comes to dating. Traditional
            dating platforms often lack the accessibility features, understanding, and community
            support needed to serve this population effectively.
          </p>
          <p>
            Open Hearts Dating was founded to address these gaps. We're not just building another
            dating website—we're creating a platform designed specifically for and with the
            disability community.
          </p>
        </div>
      </section>

      <section className="content-section content-section-alt">
        <div className="container">
          <h2>Join Us</h2>
          <p>
            Our mission is only possible with the support of our community.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/support" className="button">
              Support Our Mission
            </Link>
            <Link href="/contact" className="button button-secondary" style={{ marginLeft: "1rem" }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
