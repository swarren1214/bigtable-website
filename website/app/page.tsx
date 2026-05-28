import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  PlayCircle,
  ListChecks,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import { SiteShell } from "@/components/site-shell";

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
            <Link className="btn btn-primary" href="/support">
              <Sparkles size={16} aria-hidden="true" />
              Start Planning
            </Link>
            <Link className="btn btn-secondary" href="#how-it-works">
              <PlayCircle size={16} aria-hidden="true" />
              See How It Works
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/mockup.png"
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
    </SiteShell>
  );
}
