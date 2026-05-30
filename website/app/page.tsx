import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  Check,
  Crown,
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
              Public beta now available
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              AI-assisted weekly planning
            </span>
          </div>
          <div className="cta-row">
            <Link
              className="app-store-badge"
              href="https://testflight.apple.com/join/y9rJcWdE"
              aria-label="Join the BigTable public beta on TestFlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="app-store-logo text-2xl items-start" aria-hidden="true">
                
              </span>
              <span className="app-store-copy">
                <span className="app-store-copy-top">Public Beta</span>
                <span className="app-store-copy-bottom">Join on TestFlight</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <Image
            src={`${PUBLIC_BASE_PATH}/render_light_mode.png`}
            alt=""
            width={928}
            height={1409}
            className="hero-mockup hero-mockup-light"
            priority
          />
          <Image
            src={`${PUBLIC_BASE_PATH}/render_dark_mode.png`}
            alt=""
            width={928}
            height={1409}
            className="hero-mockup hero-mockup-dark"
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
          Pick your plan and start planning better meals this week
        </h2>
        <p className="section-lead pricing-lead">
          Start free with powerful household planning tools, then unlock Pro when you want
          faster AI meal planning and smarter grocery support.
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
                <p className="plan-price-note">Perfect for hands-on weekly planning</p>
              </div>
            </div>
            <p className="plan-summary">Why it is awesome: simple shared planning for the whole family.</p>
            <ul className="feature-list">
              <li>
                <Check size={16} aria-hidden="true" />
                Plan every day of the week in minutes
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Browse and save recipes your family actually likes
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Set up household members and food preferences
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Build and check off organized grocery lists
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Share plans and lists with the whole household
              </li>
            </ul>
            <div className="mini-highlights" aria-label="Starter plan highlights">
              <span>
                <BadgeCheck size={15} aria-hidden="true" />
                Always free
              </span>
              <span>
                <ListChecks size={15} aria-hidden="true" />
                Easy weekly flow
              </span>
              <span>
                <UserRoundCheck size={15} aria-hidden="true" />
                Family collaboration
              </span>
            </div>
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
            <p className="plan-summary">
              Why it is awesome: AI handles the heavy lifting so you save time every week.
            </p>
            <ul className="feature-list">
              <li>
                <Check size={16} aria-hidden="true" />
                Generate full meal plans from a simple prompt
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Instantly create grocery lists from your planned meals
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Create recipe visuals with AI assistance
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Import recipes from photos and documents
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Create and store custom family recipes
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                See estimated grocery costs before checkout
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Restore previous grocery lists anytime
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Preview AI updates before saving your plan
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                Target specific dates and meal slots for AI planning
              </li>
            </ul>
            <div className="mini-highlights" aria-label="Pro plan highlights">
              <span>
                <Sparkles size={15} aria-hidden="true" />
                AI-powered speed
              </span>
              <span>
                <BadgeCheck size={15} aria-hidden="true" />
                Smarter grocery prep
              </span>
              <span>
                <Crown size={15} aria-hidden="true" />
                Best value annually
              </span>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
