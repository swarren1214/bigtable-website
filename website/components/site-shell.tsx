import Link from "next/link";
import {
  LifeBuoy,
  Sparkles,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <header className="top-nav reveal">
        <div className="brand-wrap">
          <Link href="/" className="brand" aria-label="BigTable home">
            <span className="brand-mark" aria-hidden="true">
              <img src={`${PUBLIC_BASE_PATH}/logo.svg`} alt="" className="brand-logo" />
            </span>
            <span className="brand-text">
              <strong>BigTable</strong>
              <small>Family Meal Planner</small>
            </span>
          </Link>
        </div>
        <div className="nav-actions">
          <nav className="nav-links" aria-label="Main">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      {children}
      <footer className="footer reveal delay-3">
        <span className="footer-item">
          <Sparkles size={14} aria-hidden="true" />
          BigTable, Inc.
        </span>
        <span className="footer-sep" aria-hidden="true">
          |
        </span>
        <span className="footer-item">
          <LifeBuoy size={14} aria-hidden="true" />
          Contact: support@bigtable.family
        </span>
        <span className="footer-sep" aria-hidden="true">
          |
        </span>
        <span className="footer-item">Last updated: May 27, 2026</span>
      </footer>
    </div>
  );
}
