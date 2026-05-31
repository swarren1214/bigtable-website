import {
  LifeBuoy,
  Sparkles,
} from "lucide-react";

import { NavBar } from "@/components/nav-bar";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <NavBar />
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
          Contact: bigtablemeals@gmail.com
        </span>
        <span className="footer-sep" aria-hidden="true">
          |
        </span>
        <span className="footer-item">Last updated: May 27, 2026</span>
      </footer>
    </div>
  );
}
