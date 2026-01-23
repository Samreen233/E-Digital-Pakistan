import LandingHero from "@/components/LandingHero";
import TalentGridSection from "@/components/TalentGridSection";
export default function Page() {
  return (
    <main className="min-h-screen">
      <LandingHero />
      <TalentGridSection />
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          Demo UI build (not affiliated). Replace content/assets as needed.
        </div>
      </footer>
    </main>
  );
}
