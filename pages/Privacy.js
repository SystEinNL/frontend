// pages/privacy.js
import Link from "next/link";
import Layout from "../components/layout/layout";

const LAST_UPDATED = "October 28, 2025";

function Privacy() {
  return (
    <Layout>
      <main className="bg-grey pt-50 pb-50">
        <div className="container single-content">
          {/* Header */}
          <div className="entry-header entry-header-style-1 mb-50 text-center">
            <h1 className="entry-title mb-20 font-weight-900">
              Privacy Policy
            </h1>
            <p className="text-muted">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Hero / Illustration (optional image for visual consistency) */}
          <figure className="image mb-30 m-auto text-center border-radius-10">
            <img
              className="border-radius-10"
              src="/assets/imgs/news/news-17.png"
              alt="Privacy"
            />
          </figure>

          {/* Body */}
          <article className="entry-wraper">
            <p className="font-large">
              At <strong>SystEin</strong> (INCOSE Student Branch at TU/e), we take your privacy seriously.
              This page explains what data we collect, why we collect it, and how you can control it.
              We aim for simple language and no surprises.
            </p>

            <hr className="wp-block-separator is-style-wide" />

            <h2 className="mt-30">Who we are</h2>
            <p>
              <strong>Controller</strong>: INCOSE Student Branch at TU/e — SystEin<br />
              <strong>Address</strong>: Eindhoven University of Technology, Groene Loper 5, 5612 AE Eindhoven, Netherlands<br />
              <strong>Website</strong>: <a href="https://systein.nl">https://systein.nl</a><br />
              <strong>Contact</strong>: <a href="mailto:privacy@systein.nl">privacy@systein.nl</a>
            </p>

            <h2 className="mt-30">What data we collect</h2>
            <ul>
              <li><strong>Basic info you give us</strong>: name, email, messages you send through forms.</li>
              <li><strong>Usage data</strong>: pages visited, clicks, approximate location (from IP), device/browser info.</li>
              <li><strong>Cookies</strong>: small files to remember preferences and improve the site.</li>
            </ul>

            <h2 className="mt-30">Why we collect it (the simple “why”)</h2>
            <ul>
              <li><strong>Run the site</strong> (functional cookies, security, performance).</li>
              <li><strong>Improve content</strong> (anonymous analytics to see what helps students most).</li>
              <li><strong>Respond to you</strong> (when you contact us).</li>
            </ul>

            <h2 className="mt-30">Our legal bases (GDPR)</h2>
            <ul>
              <li><strong>Legitimate interests</strong>: site security, basic analytics, improving services.</li>
              <li><strong>Consent</strong>: non-essential cookies or newsletters (only if you opt-in).</li>
              <li><strong>Contract</strong>: if we provide something you ask for and need your details to do it.</li>
            </ul>

            <h2 className="mt-30">How long we keep data</h2>
            <p>
              We keep personal data only as long as needed for the purpose it was collected, then delete or anonymize it.
              For example, contact form submissions are reviewed and routinely cleaned; analytics data may be kept in aggregate.
            </p>

            <h2 className="mt-30">Sharing</h2>
            <p>
              We don’t sell your data. We may use trusted providers (e.g., hosting, analytics) who must protect your data and follow our rules.
              If data leaves the EEA, we use safeguards like Standard Contractual Clauses.
            </p>

            <h2 className="mt-30">Your rights</h2>
            <ul>
              <li>Access your data and get a copy.</li>
              <li>Ask us to fix inaccurate data.</li>
              <li>Ask us to delete your data (when legally possible).</li>
              <li>Object to or restrict certain processing.</li>
              <li>Portability (get data in a common format).</li>
              <li>Withdraw consent (for things based on consent).</li>
              <li>Complain to your local authority (e.g., Autoriteit Persoonsgegevens in NL).</li>
            </ul>
            <p>
              To use these rights, email <a href="mailto:privacy@systein.nl">privacy@systein.nl</a>.
              We’ll respond as fast as a well-tuned control system (without the overshoot).
            </p>

            <h2 className="mt-30">Cookies & analytics</h2>
            <p>
              We use essential cookies to make the site work. For optional analytics cookies, we ask for your consent where required.
              You can control cookies in your browser settings at any time.
            </p>

            <h2 className="mt-30">Security</h2>
            <p>
              We apply reasonable technical and organizational measures (encryption in transit, access controls) to protect your data.
              No system is perfectly secure, but we work to minimize risk and resolve issues quickly.
            </p>

            <h2 className="mt-30">AI features (our 4 agents)</h2>
            <p>
              Our AI agents may process the text you submit (e.g., questions or feedback) to provide responses.
              We limit what we send to third-party AI services, and where possible, we anonymize or pseudonymize inputs.
              Please avoid sharing sensitive personal information.
            </p>

            <h2 className="mt-30">Changes to this policy</h2>
            <p>
              We may update this page to stay accurate and clear. We’ll adjust the “Last updated” date above and,
              for major changes, add a notice on the site.
            </p>

            <hr className="wp-block-separator is-style-wide" />

            <p>
              Looking for more info about SystEin?{" "}
              <Link href="/about">Visit our About page</Link>.
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}

export default Privacy;