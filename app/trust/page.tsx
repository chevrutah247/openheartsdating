import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Safety — Open Hearts Dating',
  description:
    'Learn how Open Hearts Dating protects users from scams, fake profiles, manipulation, and unethical dating practices.',
}

export default function TrustPage() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <h1>Trust & Safety</h1>
          <p>
            Dating should never feel unsafe, manipulative, or transactional.
            Open Hearts Dating is built with human dignity, transparency,
            and protection at its core.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Why Trust Matters</h2>
          <p>
            Many people come to online dating after negative experiences —
            scams, fake profiles, emotional manipulation, or pressure to spend money.
          </p>
          <p>
            We believe that vulnerable communities, including people with disabilities,
            deserve better standards, not exploitation.
          </p>

          <h2>What We Do Differently</h2>

          <ul>
            <li>
              <strong>No fake conversations.</strong> We do not use AI-generated messages,
              paid chat operators, or scripted profiles.
            </li>
            <li>
              <strong>No credit-based emotional pressure.</strong> Communication is not designed
              to drain money per message or per reply.
            </li>
            <li>
              <strong>No hidden mechanics.</strong> If something costs money in the future,
              it will be explained clearly and upfront.
            </li>
            <li>
              <strong>Human-first moderation.</strong> Safety decisions are reviewed by people,
              not automated systems alone.
            </li>
          </ul>

          <h2>Scams & Fraud Prevention</h2>
          <p>
            We actively study common dating scams, including romance fraud,
            impersonation, and financial manipulation.
          </p>
          <p>
            As the platform grows, we will implement:
          </p>

          <ul>
            <li>Profile verification steps</li>
            <li>Clear reporting tools</li>
            <li>Manual review of suspicious behavior</li>
            <li>Strict removal of bad actors</li>
          </ul>

          <h2>Transparency Promise</h2>
          <p>
            Open Hearts Dating is an early-stage project.
            We prefer honest communication over false promises.
          </p>
          <p>
            If something is not ready yet — we say so.
            If a feature changes — we explain why.
          </p>

          <h2>Contact Us About Safety</h2>
          <p>
            If you have concerns, ideas, or past experiences you want to share,
            please contact us directly:
          </p>

          <p>
            <a href="mailto:openheartsdatingcom@gmail.com">
              openheartsdatingcom@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
