'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <Head>
        <title>Eva Manuska - Portfolio</title>
        <meta name="description" content="Eva Manuska's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
          <About />
        </section>

        <section id="projects" className="min-h-screen flex items-center">
          <Projects />
        </section>

        <section id="certifications" className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-800">
          <Certifications />
        </section>

        <section id="contact" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
          <Contact />
        </section>
      </main>
    </div>
  );
}