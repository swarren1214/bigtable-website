import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  ListChecks,
  ShoppingCart,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import { SiteShell } from "@/components/site-shell";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DownloadPage() {
  return (
    <SiteShell>
      <section className="download-hero reveal delay-1">
        <div className="download-hero-content">
          <p className="hero-kicker">Now available in public beta</p>
          <h1 className="hero-title" style={{ fontFamily: "var(--font-display), serif" }}>
            Download
            <span className="hero-title-accent">BigTable</span>
          </h1>
          <p className="hero-subtitle">
            The household meal planner that turns a chaotic week into a clear plan, a smart
            grocery list, and fewer &ldquo;what&rsquo;s for dinner?&rdquo; conversations.
          </p>

          <div className="hero-meta" aria-label="App highlights">
            <span>
              <BadgeCheck size={15} aria-hidden="true" />
              Free to download
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              AI-powered planning
            </span>
            <span>
              <UserRoundCheck size={15} aria-hidden="true" />
              Built for households
            </span>
          </div>

          <div className="download-cta-block">
            <p className="beta-steps-title">Get the app</p>
            <div className="download-badge-row">
              <Link
                className="app-store-badge"
                href="https://testflight.apple.com/join/y9rJcWdE"
                aria-label="Join the BigTable public beta on TestFlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bigtable-icon-tile" aria-hidden="true">
                  <Image src={`${PUBLIC_BASE_PATH}/logo.svg`} alt="" width={22} height={16} />
                </span>
                <span className="app-store-copy">
                  <span className="app-store-copy-top">Download on TestFlight</span>
                  <span className="app-store-copy-bottom">BigTable Beta</span>
                </span>
              </Link>

              <Link
                className="app-store-badge"
                href="https://apps.apple.com/us/app/testflight/id899247664"
                aria-label="Download Apple TestFlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="testflight-icon" aria-hidden="true">
                  <Image
                    src={`${PUBLIC_BASE_PATH}/testflight-icon.png`}
                    alt=""
                    width={30}
                    height={30}
                  />
                </span>
                <span className="app-store-copy">
                  <span className="app-store-copy-top">Requires the App Store</span>
                  <span className="app-store-copy-bottom">Apple TestFlight</span>
                </span>
              </Link>
            </div>
            <p className="download-note">
              BigTable is currently in public beta via Apple TestFlight.
              Download TestFlight first, then tap the BigTable beta link above.
            </p>
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

      <section className="section reveal delay-2">
        <h2 className="section-title" style={{ fontFamily: "var(--font-display), serif" }}>
          Everything your household needs
        </h2>
        <p className="section-lead">
          BigTable is designed around how real families actually plan meals — practical, flexible,
          and built for more than one person.
        </p>
        <div className="grid-3">
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <CalendarDays size={22} />
            </span>
            <h3>Weekly meal planning</h3>
            <p>
              Schedule breakfast, lunch, and dinner for the whole week with a clear, visual
              layout anyone in the household can see.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <ShoppingCart size={22} />
            </span>
            <h3>Smart grocery lists</h3>
            <p>
              Automatically generate organized grocery lists from your weekly plan so nothing
              gets forgotten at the store.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <Sparkles size={22} />
            </span>
            <h3>AI meal suggestions</h3>
            <p>
              Get personalized meal ideas that respect your household&apos;s dietary needs,
              preferences, and favorite recipes.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <UserRoundCheck size={22} />
            </span>
            <h3>Household profiles</h3>
            <p>
              Add every family member with their age, restrictions, and preferences so every
              plan works for everyone.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <ListChecks size={22} />
            </span>
            <h3>Favorites &amp; history</h3>
            <p>
              Save go-to meals and revisit past plans to fill your week faster without starting
              from scratch.
            </p>
          </article>
          <article className="card">
            <span className="card-icon" aria-hidden="true">
              <BadgeCheck size={22} />
            </span>
            <h3>Free to get started</h3>
            <p>
              Core features are free. Upgrade only when you&apos;re ready for the full
              AI-powered experience.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-soft reveal delay-3">
        <h2 className="section-title" style={{ fontFamily: "var(--font-display), serif" }}>
          Ready to bring calm to your week?
        </h2>
        <p className="section-lead">
          Join households already using BigTable to plan smarter, shop less, and stress less
          about what&rsquo;s for dinner.
        </p>
        <div className="download-final-cta">
          <Link
            className="app-store-badge"
            href="https://testflight.apple.com/join/y9rJcWdE"
            aria-label="Join the BigTable public beta on TestFlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bigtable-icon-tile" aria-hidden="true">
              <Image src={`${PUBLIC_BASE_PATH}/logo.svg`} alt="" width={22} height={16} />
            </span>
            <span className="app-store-copy">
              <span className="app-store-copy-top">Download on TestFlight</span>
              <span className="app-store-copy-bottom">BigTable Beta</span>
            </span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
