import About from "@/components/marketing/About";
import FAQ from "@/components/marketing/FAQ";
import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
import NewsLetter from "@/components/marketing/NewsLetter";
import Numbers from "@/components/marketing/Numbers";

export default function Home() {
  return (
    <main className="w-full">
      {/* Egységes oldal konténer */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Fontos: NE legyen items-center/justify-center itt */}
        <div className="flex flex-col py-20">
          <Hero />
          <Numbers />
          <Features />
          <About />
          <FAQ />
          <NewsLetter />
        </div>
      </div>
    </main>
  );
}
