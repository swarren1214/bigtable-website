import { LegalPage } from "@/components/legal-page";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updatedAt="June 1, 2026"
      intro={
        <>
          These Terms of Use ("Terms") govern your use of BigTable and its related services. By
          creating an account or using the app, you agree to these Terms.
        </>
      }
      sections={[
        {
          title: "1. Eligibility",
          body: (
            <p>
              You must be at least 13 years old to use BigTable. By using the app, you represent
              that you meet this requirement. If you are under 18, you represent that a parent or
              guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          ),
        },
        {
          title: "2. Your Account",
          body: (
            <p>
              You are responsible for maintaining the security of your account credentials and for
              all activity that occurs under your account. Do not share your login credentials.
              Notify us immediately at bigtablemeals@gmail.com if you believe your account has
              been compromised.
            </p>
          ),
        },
        {
          title: "3. Subscriptions and Billing",
          body: (
            <>
              <h3>Free plan</h3>
              <p>
                BigTable&apos;s core features - manual meal planning, recipe library access, custom
                recipe creation, household setup, and manual grocery lists - are available at no
                charge.
              </p>

              <h3>Pro plan</h3>
              <p>
                AI-powered features (meal plan generation, grocery list generation, recipe
                scanning, and others) require an active Pro subscription. Pro is available as a
                monthly or annual subscription, billed through the Apple App Store.
              </p>

              <h3>Billing and renewal</h3>
              <p>
                Subscriptions automatically renew unless cancelled at least 24 hours before the
                end of the current billing period. You can manage or cancel your subscription at
                any time through your Apple ID settings (Settings -&gt; [your name] -&gt;
                Subscriptions). We do not process cancellations directly.
              </p>

              <h3>Refunds</h3>
              <p>
                All billing is managed by Apple. Refund requests must be submitted to Apple and
                are subject to Apple&apos;s refund policies.
              </p>
            </>
          ),
        },
        {
          title: "4. AI Features",
          body: (
            <p>
              AI-powered features are available to Pro subscribers. These features use large
              language models to generate meal plans, grocery lists, and recipe content based on
              your household profile and prompts. AI-generated output is provided for convenience
              and informational purposes. We do not guarantee accuracy, completeness, or
              suitability of any AI-generated content, including nutritional information,
              ingredient quantities, or cooking instructions. Always use your own judgment when
              preparing food, especially for household members with allergies or dietary
              restrictions.
            </p>
          ),
        },
        {
          title: "5. User Content",
          body: (
            <>
              <p>
                You retain ownership of content you create in BigTable, including custom recipes,
                household profiles, and meal plans. By creating this content, you grant BigTable
                a limited license to store and display it to you and members of your household in
                order to provide the service.
              </p>
              <p>
                You are responsible for the content you add. Do not enter content that is
                unlawful, harmful, or violates the rights of others.
              </p>
            </>
          ),
        },
        {
          title: "6. Recipe Content",
          body: (
            <p>
              BigTable&apos;s recipe library includes content sourced from TheMealDB under their
              public API terms. Recipe content attributed to TheMealDB remains subject to their
              terms and attribution requirements. Custom recipes you create are your own.
            </p>
          ),
        },
        {
          title: "7. Household Sharing",
          body: (
            <p>
              You may invite others to join your household. All household members share access to
              the meal plan, grocery list, and household recipe library. You are responsible for
              the people you invite and for managing your household membership.
            </p>
          ),
        },
        {
          title: "8. Acceptable Use",
          body: (
            <ul>
              <li>Misuse or interfere with the security or integrity of the service</li>
              <li>Attempt unauthorized access to any user&apos;s data or our systems</li>
              <li>Reverse engineer, scrape, or extract data from the app or API at scale</li>
              <li>Upload or transmit unlawful, abusive, or harmful content</li>
              <li>Use the service in any way that violates applicable laws</li>
            </ul>
          ),
        },
        {
          title: "9. Service Availability",
          body: (
            <p>
              We aim to provide reliable service but do not guarantee uninterrupted availability.
              We may update, suspend, or discontinue features at any time. We will make
              reasonable efforts to notify you of significant changes.
            </p>
          ),
        },
        {
          title: "10. Disclaimer of Warranties",
          body: (
            <p>
              BigTable is provided "as is" and "as available" without warranties of any kind,
              express or implied. We do not warrant that the service will be error-free, that
              AI-generated content will be accurate, or that the service will meet your specific
              requirements.
            </p>
          ),
        },
        {
          title: "11. Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, BigTable, Inc. shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of or inability to use the service.
            </p>
          ),
        },
        {
          title: "12. Governing Law",
          body: (
            <p>
              These Terms are governed by the laws of the State of Utah, without regard to
              conflict of law principles.
            </p>
          ),
        },
        {
          title: "13. Changes to These Terms",
          body: (
            <p>
              We may update these Terms from time to time. Continued use of BigTable after
              changes are posted constitutes acceptance of the updated Terms. We&apos;ll update the
              date at the top and notify you of material changes through the app.
            </p>
          ),
        },
        {
          title: "14. Contact",
          body: (
            <>
              <p>Questions about these Terms? Email us at bigtablemeals@gmail.com.</p>
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
