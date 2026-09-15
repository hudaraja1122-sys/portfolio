import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 antialiased selection:bg-orange-500 selection:text-white">
      <Hero />
      <Projects />
    </main>
  );
}