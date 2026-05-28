import { SiteShell } from "@/components/site-shell";

export default function DeleteAccountPage() {
  return (
    <SiteShell>
      <section className="legal-wrap reveal delay-1">
        <h1 style={{ fontFamily: "var(--font-display), serif" }}>Delete Account</h1>
        <p className="legal-meta">Last updated: May 27, 2026</p>

        <p>
          If you want to delete your BigTable account and associated household planning data,
          follow the process below.
        </p>

        <h2>How to Request Deletion</h2>
        <ol>
          <li>Send an email from your account email to support@bigtable.family.</li>
          <li>Use the subject line: Account Deletion Request.</li>
          <li>Include your full name and the email linked to your BigTable account.</li>
        </ol>

        <h2>What Gets Deleted</h2>
        <ul>
          <li>Profile and authentication records tied to your account.</li>
          <li>Household planning data associated with your account.</li>
          <li>Saved meal plans and grocery snapshots linked to your household profile.</li>
        </ul>

        <h2>Retention Exceptions</h2>
        <p>
          We may retain minimal records when required by law, fraud prevention, tax obligations,
          or legitimate security purposes.
        </p>
      </section>
    </SiteShell>
  );
}
