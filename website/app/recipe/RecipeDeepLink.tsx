"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function RecipeDeepLink() {
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");
  const [appOpened, setAppOpened] = useState(false);

  useEffect(() => {
    if (!recipeId) return;

    // window.location.href with a custom scheme works on iOS when user has the app,
    // but only from a user gesture. On page load it's blocked by the browser.
    // Universal links (AASA) are the proper solution for automatic open.
    // For now we surface the button prominently and let the user tap.
  }, [recipeId]);

  const handleOpenApp = () => {
    if (!recipeId) return;
    window.location.href = `bigtable://recipe/${recipeId}`;
    // After a short delay, assume the app didn't open and show the download prompt.
    setTimeout(() => setAppOpened(true), 1500);
  };

  return (
    <section style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 1.5rem",
    }}>
      <div style={{ maxWidth: 420, width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <Image
          src={`${PUBLIC_BASE_PATH}/logo.svg`}
          alt="BigTable"
          width={52}
          height={40}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h1 className="hero-title" style={{ fontSize: "2rem", margin: 0 }}>
            Open this recipe in{" "}
            <span className="hero-title-accent">BigTable</span>
          </h1>
          <p className="section-lead" style={{ margin: 0 }}>
            {appOpened
              ? "If the app didn't open, download BigTable to view this recipe."
              : "Tap the button below to open this recipe in the BigTable app."}
          </p>
        </div>

        {recipeId && (
          <button
            className="btn btn-primary"
            onClick={handleOpenApp}
            style={{ width: "100%", maxWidth: 320, fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Open in BigTable
          </button>
        )}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <p className="section-lead" style={{ margin: 0, fontSize: "0.875rem" }}>
            Don&apos;t have BigTable yet?
          </p>
          <Link href="/download/" className="btn btn-secondary">
            Download BigTable
          </Link>
        </div>
      </div>
    </section>
  );
}
