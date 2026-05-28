import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function SupportPage() {
  return (
    <SiteShell>
      <section className="legal-wrap reveal delay-1">
        <h1 style={{ fontFamily: "var(--font-display), serif" }}>Support</h1>
        <p className="legal-meta">We are here to help with setup, subscriptions, and account issues.</p>

        <h2>Contact Support</h2>
        <p>
          Email us at <a href="mailto:support@bigtable.family">support@bigtable.family</a>.
        </p>

        <h2>Response Time</h2>
        <p>We typically reply within 1-2 business days.</p>

        <h2>Helpful Links</h2>
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
