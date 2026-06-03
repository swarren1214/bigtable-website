import { Suspense } from "react";
import { SiteShell } from "@/components/site-shell";
import { RecipeDeepLink } from "./RecipeDeepLink";

export default function RecipePage() {
  return (
    <SiteShell>
      <Suspense>
        <RecipeDeepLink />
      </Suspense>
    </SiteShell>
  );
}
