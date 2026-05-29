import { LegalPage } from "@/components/legal-page";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updatedAt="May 27, 2026"
      intro={
        <>
          These Terms govern your use of BigTable and related services. By using BigTable, you
          agree to these Terms.
        </>
      }
      sections={[
        {
          title: "Eligibility and Accounts",
          body: (
            <p>
              You are responsible for maintaining the security of your account credentials and for
              all activity under your account.
            </p>
          ),
        },
        {
          title: "Subscriptions and Billing",
          body: (
            <p>
              Paid features may be offered through in-app subscriptions. Billing and renewal terms
              are managed by the app marketplace and your selected plan settings.
            </p>
          ),
        },
        {
          title: "Acceptable Use",
          body: (
            <ul>
              <li>Do not misuse the service or interfere with platform security.</li>
              <li>Do not upload unlawful, abusive, or harmful content.</li>
              <li>Do not attempt unauthorized access to user data or systems.</li>
            </ul>
          ),
        },
        {
          title: "Service Availability",
          body: (
            <p>
              We may update, suspend, or discontinue features at any time. We aim for reliable
              service but do not guarantee uninterrupted availability.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              Questions about these Terms can be sent to bigtablemeals@gmail.com.
            </p>
          ),
        },
      ]}
    />
  );
}
