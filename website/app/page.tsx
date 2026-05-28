import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  Check,
  Crown,
  CreditCard,
  ListChecks,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import { SiteShell } from "@/components/site-shell";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero reveal delay-1">
        <div className="hero-content">
          <p className="hero-kicker">Meal planning for households that run on teamwork</p>
          <h1 className="hero-title" style={{ fontFamily: "var(--font-display), serif" }}>
            Plan smarter weeks with
            <span className="hero-title-accent">BigTable</span>
          </h1>
          <p className="hero-subtitle">
            BigTable turns household chaos into a clear weekly plan, organized grocery list,
            and AI-powered suggestions that respect real family preferences.
          </p>
          <div className="hero-meta" aria-label="Highlights">
            <span>
              <BadgeCheck size={15} aria-hidden="true" />
              App Store review ready
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              AI-assisted weekly planning
            </span>
          </div>
          <div className="cta-row">
            <Link className="app-store-badge" href="/#app-store" aria-label="Download on the App Store">
              <span className="app-store-logo text-2xl items-start" aria-hidden="true">
                
              </span>
              <span className="app-store-copy">
                <span className="app-store-copy-top">Download on the</span>
                <span className="app-store-copy-bottom">App Store</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <Image
            src={`${PUBLIC_BASE_PATH}/mockup.png`}
            alt=""
            width={928}
            height={1409}
            className="hero-mockup"
            priority
          />
        </div>
      </section>

      <section id="how-it-works" className="section reveal delay-2">
        <h2 className="section-title" style={{ fontFamily: "var(--font-display), serif" }}>
          Built for large families
        </h2>
        <p className="section-lead">
          Everything in BigTable is designed around practical routines: quick planning,
          reusable favorites, and fewer missed ingredients.
        </p>
        <div className="grid-3">
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <CalendarDays size={22} />
            </span>
            <h3>Weekly meal rhythm</h3>
            <p>
              Map breakfast, lunch, and dinner for each day with clear progress and easy
              adjustments.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <ListChecks size={22} />
            </span>
            <h3>AI grocery generation</h3>
            <p>
              Convert a household meal plan into organized grocery sections with fewer manual
              edits.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <UserRoundCheck size={22} />
            </span>
            <h3>Household-aware planning</h3>
            <p>
              Account for food restrictions, preferences, and family member needs in one place.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft reveal delay-3">
        <h2 className="section-title" style={{ fontFamily: "var(--font-display), serif" }}>
          Planning that feels calm, not chaotic
        </h2>
        <p className="section-lead">
          Give your household a shared rhythm for meals, shopping, and food preferences without
          adding another complicated tool to your week.
        </p>
        <div className="mini-highlights" aria-label="Key outcomes">
          <span>
            <Sparkles size={15} aria-hidden="true" />
            Faster weekly planning
          </span>
          <span>
            <CalendarDays size={15} aria-hidden="true" />
            Clear day-by-day plan
          </span>
          <span>
            <ListChecks size={15} aria-hidden="true" />
            Less grocery guesswork
          </span>
        </div>
      </section>

      <section id="pricing" className="section reveal delay-3">
        <p className="pricing-eyebrow">Pricing &amp; Features</p>
        <h2 className="section-title" style={{ fontFamily: "var(--font-display), serif" }}>
          Flexible plans for manual planning or AI-powered help
        </h2>
        <p className="section-lead pricing-lead">
          Start free with the full manual planning workflow, then upgrade when you want
          AI-assisted meal plans, grocery automation, and recipe capture.
        </p>

        <div className="pricing-grid">
          <article className="plan-card">
            <div className="plan-header">
              <span className="plan-icon" aria-hidden="true">
                <BadgeCheck size={18} />
              </span>
              <div>
                <p className="plan-kicker">Starter</p>
                <h3>Free</h3>
              </div>
            </div>
            <ul className="feature-list">
              <li>
                <Check size={16} aria-hidden="true" />
                Manual meal planning
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Recipe library access
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Household setup
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Manual grocery list
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Family sharing
              </li>
            </ul>
          </article>

          <article className="plan-card plan-card-pro">
            <div className="plan-badge">Save 33% annually</div>
            <div className="plan-header">
              <span className="plan-icon" aria-hidden="true">
                <Crown size={18} />
              </span>
              <div>
                <p className="plan-kicker">Pro</p>
                <h3>$6.99/month</h3>
                <p className="plan-price-note">or $55.99/year</p>
              </div>
            </div>
            <p className="plan-summary">Everything in Starter, plus:</p>
            <ul className="feature-list">
              <li>
                <Check size={16} aria-hidden="true" />
                AI meal plan generation from natural language prompts
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                AI grocery list generation from planned meals
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                AI-assisted recipe image generation
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Recipe scan from photos or documents
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Custom recipe creation
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Estimated grocery cost display
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Grocery snapshot, history, and restore
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Meal plan preview before publishing AI updates
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Date-range and slot targeting for AI generation
              </li>
            </ul>
          </article>
        </div>

        <div className="feature-tiers">
          <article className="feature-tier-card">
            <div className="tier-heading">
              <span className="plan-icon" aria-hidden="true">
                <ListChecks size={18} />
              </span>
              <div>
                <p className="plan-kicker">Always Free</p>
                <h3>Core household planning</h3>
              </div>
            </div>
            <ul className="feature-list feature-list-compact">
              <li><Check size={16} aria-hidden="true" />7-day meal planner (manual, no AI)</li>
              <li><Check size={16} aria-hidden="true" />Mark meals complete, exclude household members</li>
              <li><Check size={16} aria-hidden="true" />Recipe library with search, filter, and detail views</li>
              <li><Check size={16} aria-hidden="true" />Save favorite recipes</li>
              <li><Check size={16} aria-hidden="true" />Manual grocery list (no AI generation)</li>
              <li><Check size={16} aria-hidden="true" />Store-section grouping and interactive checklist</li>
              <li><Check size={16} aria-hidden="true" />Grocery list sharing to family</li>
              <li><Check size={16} aria-hidden="true" />Household setup, member management, and dietary restrictions</li>
              <li><Check size={16} aria-hidden="true" />Email/password and Apple Sign In</li>
              <li><Check size={16} aria-hidden="true" />Light and dark theme</li>
            </ul>
          </article>

          <article className="feature-tier-card feature-tier-card-accent">
            <div className="tier-heading">
              <span className="plan-icon" aria-hidden="true">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="plan-kicker">Pro</p>
                <h3>AI and advanced workflow tools</h3>
              </div>
            </div>
            <p className="tier-copy">
              All free features, plus every premium capability in the Pro plan above.
            </p>
            <div className="mini-highlights" aria-label="Pro plan highlights">
              <span>
                <Sparkles size={15} aria-hidden="true" />
                AI planning prompts
              </span>
              <span>
                <CreditCard size={15} aria-hidden="true" />
                Estimated grocery costs
              </span>
              <span>
                <Crown size={15} aria-hidden="true" />
                Annual savings option
              </span>
            </div>
          </article>
        </div>

        <div className="pricing-notes">
          <h3>Pricing notes</h3>
          <ul className="feature-list feature-list-compact">
            <li>
              <Check size={16} aria-hidden="true" />
              Monthly pricing stays just below $7 to remain competitive with similar
              family utility apps.
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              Annual billing at $55.99 gives a clear 33% discount to encourage longer
              commitments and reduce churn.
            </li>
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
