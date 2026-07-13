"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const IOS_APP_STORE_URL = "https://apps.apple.com/us/app/bigtable/id6772788255";
const ANDROID_BETA_PATH = "/download/android-beta/";

type DeviceType = "ios" | "android" | "other";

function detectDeviceType(): DeviceType {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (
    /iPhone|iPad|iPod/i.test(userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "ios";
  }

  return "other";
}

export function RecipeDeepLink() {
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");
  const [appOpened, setAppOpened] = useState(false);
  const [deviceType, setDeviceType] = useState<DeviceType>("other");

  const fallbackHref =
    deviceType === "ios"
      ? IOS_APP_STORE_URL
      : deviceType === "android"
        ? `${PUBLIC_BASE_PATH}${ANDROID_BETA_PATH}`
        : `${PUBLIC_BASE_PATH}/download/`;

  useEffect(() => {
    setDeviceType(detectDeviceType());
  }, []);

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

    // If the browser never leaves the page, assume the app isn't installed and
    // route to the correct install/join destination for that device.
    setTimeout(() => {
      if (document.visibilityState === "visible") {
        setAppOpened(true);
        window.location.href = fallbackHref;
      }
    }, 1500);
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
              ? "If the app didn't open, use the link below to continue."
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
          <Link href={fallbackHref} className="btn btn-secondary">
            {deviceType === "ios"
              ? "Download on the App Store"
              : deviceType === "android"
                ? "Join Android Beta"
                : "Download BigTable"}
          </Link>
        </div>
      </div>
    </section>
  );
}
