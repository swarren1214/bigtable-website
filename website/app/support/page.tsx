import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function SupportPage() {
  return (
    <SiteShell>
      <section className="legal-wrap reveal delay-1">
        <h1 style={{ fontFamily: "var(--font-display), serif" }}>Support</h1>
        <p className="legal-meta">We&apos;re here to help.</p>

        <p>
          Email us at <a href="mailto:bigtablemeals@gmail.com">bigtablemeals@gmail.com</a> - we
          typically reply within 1-2 business days.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Getting started</h3>
        <p>
          <strong>How do I set up my household?</strong>
          <br />
          During onboarding, you&apos;ll be prompted to enter your household name, the number of
          members, and each person&apos;s age and dietary restrictions. You can update this any time
          in Settings -&gt; Household.
        </p>
        <p>
          <strong>How do I invite someone to my household?</strong>
          <br />
          Go to Settings -&gt; Household -&gt; Invite Member and enter their email address. They&apos;ll
          receive an invitation to join. Invitations expire after 7 days.
        </p>

        <h3>AI features</h3>
        <p>
          <strong>AI meal plan generation isn&apos;t working - what do I do?</strong>
          <br />
          AI features require an active Pro subscription. If you&apos;re subscribed and still seeing
          issues, try signing out and back in to refresh your subscription status. If the problem
          persists, email us.
        </p>
        <p>
          <strong>Why did my AI-generated meal plan ignore a dietary restriction?</strong>
          <br />
          AI generation uses the dietary restrictions set in your household profile. Check
          Settings -&gt; Household -&gt; Members to make sure restrictions are saved correctly. If
          you believe the AI consistently ignores a restriction, let us know.
        </p>
        <p>
          <strong>Can I regenerate just part of my meal plan?</strong>
          <br />
          Yes - you can target specific days or meal slots when generating. Use the date-range
          and slot selector in the AI generation screen to regenerate only the meals you want to
          replace.
        </p>

        <h3>Subscriptions</h3>
        <p>
          <strong>How do I upgrade to Pro?</strong>
          <br />
          Tap the upgrade prompt on the home screen or go to Profile -&gt; View Plans &amp; Pricing to
          view plan options and subscribe through the App Store.
        </p>
        <p>
          <strong>How do I cancel my subscription?</strong>
          <br />
          Subscriptions are managed by Apple. To cancel, go to your iPhone&apos;s Settings -&gt; [your
          name] -&gt; Subscriptions, find BigTable, and tap Cancel Subscription. Cancelling stops
          future charges; you retain Pro access through the end of your current billing period.
        </p>
        <p>
          <strong>I subscribed but Pro features are still locked. What do I do?</strong>
          <br />
          Pull down to refresh the home screen, or sign out and sign back in. This forces a
          subscription check. If features remain locked, email us with your Apple ID email and
          we&apos;ll look into it.
        </p>
        <p>
          <strong>Can I get a refund?</strong>
          <br />
          Refunds are handled by Apple. Visit{" "}
          <a href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">
            reportaproblem.apple.com
          </a>{" "}
          to request one.
        </p>

        <h3>Account and data</h3>
        <p>
          <strong>How do I delete my account?</strong>
          <br />
          Go to Settings -&gt; Account -&gt; Delete Account. This permanently deletes your profile,
          household data, meal plans, grocery lists, and custom recipes. This action cannot be
          undone.
        </p>
        <p>
          <strong>How do I change my email address or password?</strong>
          <br />
          Go to Settings -&gt; Account -&gt; Edit Profile. If you signed in with Apple, your email is
          managed through your Apple ID.
        </p>
        <p>
          <strong>Can I export my recipes or meal plans?</strong>
          <br />
          Not yet - this is on our roadmap. In the meantime, email us and we can help manually.
        </p>

        <h3>Other</h3>
        <p>
          <strong>The app is crashing or behaving unexpectedly.</strong>
          <br />
          Force-close the app and reopen it. If the problem continues, delete and reinstall the
          app (your data is stored in the cloud and will be restored when you sign back in). If
          you&apos;re still having trouble, email us with a description of what you were doing when it
          happened.
        </p>
        <p>
          <strong>I have a feature request.</strong>
          <br />
          We&apos;d love to hear it - email us at bigtablemeals@gmail.com.
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
