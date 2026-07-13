"use client";

import { FormEvent, useState } from "react";

import { SiteShell } from "@/components/site-shell";

export default function AndroidBetaPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setSubmitted(true);

    const subject = encodeURIComponent("Android Beta Request");
    const body = encodeURIComponent(
      `Please add me to the BigTable Android beta.\n\nEmail: ${trimmedEmail}`,
    );

    window.location.href = `mailto:bigtablemeals@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SiteShell>
      <section style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 520,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
        }}>
          <p className="hero-kicker" style={{ margin: 0 }}>Android beta</p>
          <h1 className="hero-title" style={{ margin: 0 }}>
            Join the <span className="hero-title-accent">BigTable</span> Android beta
          </h1>
          <p className="section-lead" style={{ margin: 0 }}>
            Enter your email and we&apos;ll add you to our Android beta access list.
          </p>

          <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "0.75rem",
          }}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid rgba(17, 24, 39, 0.2)",
                padding: "0.875rem 1rem",
                fontSize: "1rem",
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Join Android Beta
            </button>
          </form>

          {submitted && (
            <p className="section-lead" style={{ margin: 0, fontSize: "0.9rem" }}>
              If your email app did not open, contact us at bigtablemeals@gmail.com.
            </p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
