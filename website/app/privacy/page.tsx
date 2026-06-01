import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="June 1, 2026"
      intro={
        <>
          This Privacy Policy explains how BigTable, Inc. ("BigTable," "we," "us")
          collects, uses, shares, and protects your information when you use our mobile app
          and related services.
        </>
      }
      sections={[
        {
          title: "Information We Collect",
          body: (
            <>
              <h3>Account information</h3>
              <p>
                When you create an account, we collect your name, email address, and
                authentication identifiers. If you sign in with Apple, we receive the
                information Apple provides, which may include a private relay email address.
              </p>

              <h3>Household and family data</h3>
              <p>
                We store your household name, the names and ages of household members, and
                dietary preferences and restrictions you enter for each member. This data is
                used to scale recipes and personalize meal planning.
              </p>

              <h3>Recipes and meal plans</h3>
              <p>
                We store recipes you create, meal plans you build, grocery lists you generate,
                and grocery snapshots you save. This data is associated with your account and
                visible to other members of your shared household.
              </p>

              <h3>AI feature inputs and outputs</h3>
              <p>
                When you use AI-powered features - including meal plan generation, grocery list
                generation, recipe image generation, recipe scanning from photos, and recipe
                audio transcription - your inputs (text prompts, uploaded photos, audio
                recordings) are sent to Anthropic&apos;s API for processing. We do not use your
                inputs to train AI models. Inputs are subject to Anthropic&apos;s data handling
                practices in addition to ours.
              </p>

              <h3>Subscription and billing data</h3>
              <p>
                Subscription management is handled by RevenueCat and the Apple App Store. We
                receive confirmation of your subscription status and plan tier, but we do not
                store your payment card details.
              </p>

              <h3>Household invitations</h3>
              <p>
                When you invite someone to join your household, we store the email address you
                provide in order to send the invitation. That address is deleted when the
                invitation is accepted, declined, or expires.
              </p>

              <h3>Push notifications</h3>
              <p>
                If you enable push notifications, we store a device push token to deliver
                notifications such as household updates and invitation alerts.
              </p>

              <h3>Social features</h3>
              <p>
                If you use social features (following other users, blocking users, making your
                profile public), we store those relationships and your public profile
                information.
              </p>

              <h3>Usage and diagnostics</h3>
              <p>
                We collect app usage data to monitor reliability, diagnose errors, and improve
                the service. This may include crash logs, feature usage patterns, and API
                performance data.
              </p>
            </>
          ),
        },
        {
          title: "How We Use Information",
          body: (
            <ul>
              <li>
                To provide meal planning, recipe library, grocery list, and household
                management features
              </li>
              <li>
                To generate AI-powered meal plans, grocery lists, and recipe content on your
                behalf
              </li>
              <li>To manage your subscription and validate access to Pro features</li>
              <li>To send household invitations and push notifications you&apos;ve requested</li>
              <li>To respond to support requests</li>
              <li>To detect and prevent abuse, fraud, and security incidents</li>
              <li>To comply with legal obligations</li>
            </ul>
          ),
        },
        {
          title: "Data Sharing",
          body: (
            <>
              <p>
                We do not sell your personal information. We share data only with the following
                categories of service providers, under contractual confidentiality obligations:
              </p>
              <ul>
                <li>
                  <strong>Supabase</strong> - database, authentication, and file storage
                </li>
                <li>
                  <strong>Anthropic</strong> - AI processing for meal plans, grocery lists,
                  recipe images, recipe scanning, and audio transcription
                </li>
                <li>
                  <strong>RevenueCat</strong> - subscription management and billing validation
                </li>
                <li>
                  <strong>Apple</strong> - authentication (Sign in with Apple) and App Store
                  payments
                </li>
                <li>
                  <strong>TheMealDB</strong> - we source recipe data from TheMealDB&apos;s public
                  catalog; recipe content attributed to TheMealDB remains subject to their terms
                </li>
              </ul>
              <p>
                We may disclose information if required by law, court order, or to protect the
                rights and safety of our users.
              </p>
            </>
          ),
        },
        {
          title: "Data Retention",
          body: (
            <p>
              We retain your personal data for as long as your account is active. If you delete
              your account, your personal data, household data, recipes, meal plans, and grocery
              lists are deleted. Some data may be retained for a limited period to comply with
              legal obligations, resolve disputes, or enforce agreements.
            </p>
          ),
        },
        {
          title: "Your Choices",
          body: (
            <ul>
              <li>
                <strong>Access and correction</strong> - you may request access to or correction
                of your personal information by contacting us
              </li>
              <li>
                <strong>Account deletion</strong> - you may delete your account from within the
                app under Settings -&gt; Account -&gt; Delete Account
              </li>
              <li>
                <strong>Push notifications</strong> - you may disable push notifications at any
                time through your device settings
              </li>
              <li>
                <strong>Privacy questions</strong> - contact us at bigtablemeals@gmail.com
              </li>
            </ul>
          ),
        },
        {
          title: "Children&apos;s Privacy",
          body: (
            <p>
              BigTable is not directed to children under 13. We do not knowingly collect personal
              information from children under 13. Household member profiles (including children&apos;s
              names and ages) are entered and managed by the adult account holder.
            </p>
          ),
        },
        {
          title: "Changes to This Policy",
          body: (
            <>
              <p>
                We may update this policy from time to time. We&apos;ll update the date at the top
                and, for material changes, notify you through the app.
              </p>
              <p>
                <strong>BigTable, Inc. | bigtablemeals@gmail.com</strong>
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
