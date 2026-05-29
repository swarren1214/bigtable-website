import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="May 27, 2026"
      intro={
        <>
          This Privacy Policy explains how BigTable collects, uses, and protects personal
          information when you use our mobile app and related services.
        </>
      }
      sections={[
        {
          title: "Information We Collect",
          body: (
            <ul>
              <li>Account details such as name, email address, and authentication identifiers.</li>
              <li>Household profile data, including family member names and meal preferences.</li>
              <li>App usage data to improve reliability, safety, and user experience.</li>
            </ul>
          ),
        },
        {
          title: "How We Use Information",
          body: (
            <ul>
              <li>To provide meal planning, grocery list, and account management features.</li>
              <li>To support subscriptions, billing validation, and service operations.</li>
              <li>To respond to support requests and investigate abuse or security incidents.</li>
            </ul>
          ),
        },
        {
          title: "Data Sharing",
          body: (
            <p>
              We do not sell personal information. We share data only with service providers
              required to operate BigTable, such as infrastructure, analytics, and subscription
              tooling under contractual confidentiality obligations.
            </p>
          ),
        },
        {
          title: "Retention",
          body: (
            <p>
              We retain personal data for as long as your account is active, or as needed to
              comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          ),
        },
        {
          title: "Your Choices",
          body: (
            <ul>
              <li>You may request access to or correction of your personal information.</li>
              <li>You may request account deletion using our dedicated deletion process.</li>
              <li>You may contact us about privacy rights at bigtablemeals@gmail.com.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
