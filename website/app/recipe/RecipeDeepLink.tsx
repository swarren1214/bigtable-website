"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function RecipeDeepLink() {
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    if (!recipeId) return;

    // Attempt to open the app via custom URL scheme. We use a hidden iframe
    // so the browser doesn't show a "can't find app" error if it's not installed.
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = `bigtable://recipe/${recipeId}`;
    document.body.appendChild(iframe);

    const timer = setTimeout(() => {
      document.body.removeChild(iframe);
      setAttempted(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    };
  }, [recipeId]);

  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src={`${PUBLIC_BASE_PATH}/logo.svg`}
            alt="BigTable"
            width={48}
            height={36}
            style={{ margin: "0 auto 1rem" }}
          />
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Open this recipe in BigTable
          </h1>
          <p style={{ color: "var(--color-text-muted, #71717a)", fontSize: "1rem", lineHeight: 1.6 }}>
            {attempted
              ? "If the app didn't open, download BigTable to view this recipe."
              : "Opening BigTable…"}
          </p>
        </div>

        {recipeId && (
          <a
            href={`bigtable://recipe/${recipeId}`}
            style={{
              display: "inline-block",
              backgroundColor: "#d97706",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.75rem",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            Open in BigTable
          </a>
        )}

        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "var(--color-text-muted, #71717a)", fontSize: "0.875rem", marginBottom: "1rem" }}>
            Don&apos;t have BigTable yet?
          </p>
          <Link
            href="/download/"
            style={{
              display: "inline-block",
              border: "1.5px solid #d4d4d8",
              color: "#18181b",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.625rem 1.5rem",
              borderRadius: "0.75rem",
              textDecoration: "none",
            }}
          >
            Download BigTable
          </Link>
        </div>
      </div>
    </section>
  );
}
