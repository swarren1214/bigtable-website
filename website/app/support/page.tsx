import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function SupportPage() {
  return (
    <SiteShell>
      <section className="legal-wrap reveal delay-1">
        <h1 style={{ fontFamily: "var(--font-display), serif" }}>Support</h1>
        <p className="legal-meta">We&apos;re here to help.</p>

        <p>
          Email us at <strong>bigtablemeals@gmail.com</strong> - we typically reply within
          <strong> 1-2 business days</strong>.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Getting started</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <h4>How do I set up my household?</h4>
            <p>
              During onboarding, you&apos;ll be prompted to enter your household name, the number of
              members, and each person&apos;s age and dietary restrictions. You can update this any
              time in <em>Settings -&gt; Household</em>.
            </p>
          </li>
          <li className="faq-item">
            <h4>How do I invite someone to my household?</h4>
            <p>
              Go to <em>Settings -&gt; Household -&gt; Invite Member</em> and enter their email
              address. They&apos;ll receive an invitation to join. Invitations expire after
              <strong> 7 days</strong>.
            </p>
          </li>
        </ul>

        <h3>AI features</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <h4>AI meal plan generation isn&apos;t working - what do I do?</h4>
            <p>
              AI features require an active <strong>Pro subscription</strong>. If you&apos;re
              subscribed and still seeing issues, try signing out and back in to refresh your
              subscription status. If the problem persists, email us.
            </p>
          </li>
          <li className="faq-item">
            <h4>Why did my AI-generated meal plan ignore a dietary restriction?</h4>
            <p>
              AI generation uses the dietary restrictions set in your household profile. Check
              <em> Settings -&gt; Household -&gt; Members</em> to make sure restrictions are saved
              correctly. If you believe the AI consistently ignores a restriction, let us know.
            </p>
          </li>
          <li className="faq-item">
            <h4>Can I regenerate just part of my meal plan?</h4>
            <p>
              Yes. You can target specific days or meal slots when generating. Use the date-range
              and slot selector in the AI generation screen to regenerate only the meals you want
              to replace.
            </p>
          </li>
        </ul>

        <h3>Subscriptions</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <h4>How do I upgrade to Pro?</h4>
            <p>
              Tap the upgrade prompt on the home screen or go to
              <em> Profile -&gt; View Plans &amp; Pricing</em> to view plan options and subscribe
              through the App Store.
            </p>
          </li>
          <li className="faq-item">
            <h4>How do I cancel my subscription?</h4>
            <p>
              Subscriptions are managed by Apple. To cancel, go to your iPhone&apos;s
              <em> Settings -&gt; [your name] -&gt; Subscriptions</em>, find BigTable, and tap
              <strong> Cancel Subscription</strong>. Cancelling stops future charges; you retain
              Pro access through the end of your current billing period.
            </p>
          </li>
          <li className="faq-item">
            <h4>I subscribed but Pro features are still locked. What do I do?</h4>
            <p>
              Pull down to refresh the home screen, or sign out and sign back in. This forces a
              subscription check. If features remain locked, email us with your Apple ID email
              and we&apos;ll look into it.
            </p>
          </li>
          <li className="faq-item">
            <h4>Can I get a refund?</h4>
            <p>
              Refunds are handled by Apple. Visit{" "}
              <a href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">
                reportaproblem.apple.com
              </a>{" "}
              to request one.
            </p>
          </li>
        </ul>

        <h3>Account and data</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <h4>How do I delete my account?</h4>
            <p>
              Go to <em>Settings -&gt; Account -&gt; Delete Account</em>. This permanently deletes
              your profile, household data, meal plans, grocery lists, and custom recipes. This
              action cannot be undone.
            </p>
          </li>
          <li className="faq-item">
            <h4>How do I change my email address or password?</h4>
            <p>
              Go to <em>Settings -&gt; Account -&gt; Edit Profile</em>. If you signed in with Apple,
              your email is managed through your Apple ID.
            </p>
          </li>
          <li className="faq-item">
            <h4>Can I export my recipes or meal plans?</h4>
            <p>
              Not yet. This is on our roadmap. In the meantime, email us and we can help
              manually.
            </p>
          </li>
        </ul>

        <h3>Other</h3>
        <ul className="faq-list">
          <li className="faq-item">
            <h4>The app is crashing or behaving unexpectedly.</h4>
            <p>
              Force-close the app and reopen it. If the problem continues, delete and reinstall
              the app (your data is stored in the cloud and will be restored when you sign back
              in). If you&apos;re still having trouble, email us with a description of what you were
              doing when it happened.
            </p>
          </li>
          <li className="faq-item">
            <h4>I have a feature request.</h4>
            <p>We&apos;d love to hear it. Email us at bigtablemeals@gmail.com.</p>
          </li>
        </ul>

        <p className="contact-note">
          Questions not covered here? Reach us at <strong>bigtablemeals@gmail.com</strong>.
        </p>

        <h3>Helpful links</h3>
        <ul>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Use</Link>
          </li>
          <li>
            <Link href="/delete-account">Delete Account Instructions</Link>
          </li>
        </ul>
      </section>
    </SiteShell>
  );
}
