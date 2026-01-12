import About from "@/components/marketing/About";
import FAQ from "@/components/marketing/FAQ";
import Features from "@/components/marketing/Features";
import Footer from "@/components/marketing/Footer";
import Hero from "@/components/marketing/Hero";
import Numbers from "@/components/marketing/Numbers";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Numbers />
        <Features />
        <About />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
