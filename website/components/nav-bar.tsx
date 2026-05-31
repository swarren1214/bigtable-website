"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-nav reveal">
      <div className="nav-row">
        <Link href="/" className="brand" aria-label="BigTable home">
          <span className="brand-mark" aria-hidden="true">
            <img src={`${PUBLIC_BASE_PATH}/logo.svg`} alt="" className="brand-logo" />
          </span>
          <span className="brand-text">
            <strong>BigTable</strong>
            <small>Family Meal Planner</small>
          </span>
        </Link>
        <div className="nav-actions">
          <nav className="nav-links" aria-label="Main">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <X size={20} aria-hidden="true" />
              : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="nav-mobile-menu" aria-label="Mobile navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
