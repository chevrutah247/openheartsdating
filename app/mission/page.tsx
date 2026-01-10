import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission — Building an Inclusive Dating Community",
  description:
    "Learn about Open Hearts Dating's mission to create an accessible and inclusive dating platform for people with disabilities.",
};

export default function MissionPage() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <h1>Our Mission</h1>

          <p style={{ color: "red", fontWeight: "bold" }}>
            MISSION_DEPLOY_TEST_001
          </p>

          <p>
            Open Hearts Dating exists to break down barriers and create
            opportunities for meaningful connections in the disability community.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            We envision a world where people with disabilities have equal access
            to dating platforms and opportunities to form meaningful relationships.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Join Us</h2>

          <Link href="/support" className="button">
            Support Our Mission
          </Link>
        </div>
      </section>
    </main>
  );
}
