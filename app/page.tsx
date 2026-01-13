import Hero from "@/components/marketing/Hero";
import Numbers from "@/components/marketing/Numbers";
import Features from "@/components/marketing/Features";
import About from "@/components/marketing/About";
import FAQ from "@/components/marketing/FAQ";
import NewsLetter from "@/components/marketing/NewsLetter";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Numbers />
      <Features />
      <About />
      <FAQ />
      <NewsLetter />
    </main>
  );
}
