// import { SignIn } from "@clerk/nextjs";
"use client";

import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";
import dynamic from "next/dynamic";

const PricingSection = dynamic(
  () =>
    import("./_components/pricing-section").then(
      (components) => components.PricingSection,
    ),
  { ssr: true },
);

export default function Home() {
  return (
    <main className="md:px-10 py-20 flex flex-col gap-36 ">
      <div>
        <CallToAction />
        <DashboardSnippet />
      </div>
      <PricingSection />
    </main>
  );
}
