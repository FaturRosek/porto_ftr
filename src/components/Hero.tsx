import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {

  const scrollToProject = () => {
    const section = document.getElementById("project");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-24 relative overflow-hidden hero-bg">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Grid pattern overlay */}
      <div className="hero-grid-overlay" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — Text Content */}
          <div className="flex-1 space-y-7 animate-hero-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full hero-badge">
              <span className="w-2 h-2 rounded-full bg-emerald-400 hero-badge-dot" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide">
                Available to Work · Fresh Graduate 2025
              </span>
            </div>

            {/* Name heading */}
            <div className="space-y-1">
              <p className="text-foreground/60 text-lg font-medium tracking-widest uppercase">
                Halo, Saya
              </p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                <span className="text-foreground">Fatur </span>
                <span className="hero-name-gradient">Rosek</span>
              </h1>
            </div>

            {/* Role with type animation */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 hero-divider-line" />
              <p className="text-lg md:text-xl font-semibold">
                <span className="text-foreground/70">Saya seorang </span>
                <span className="hero-role-text">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'AI Engineer',
                      2000,
                      'Informatics Student',
                      2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-foreground/55 text-base md:text-lg leading-relaxed max-w-lg">
              Berfokus pada pengembangan aplikasi web modern, dengan keahlian komprehensif dalam pengembangan aplikasi web (Full Stack) dan pengelolaan data.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="hero-btn-primary rounded-xl font-semibold group"
                onClick={scrollToProject}
              >
                Lihat Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="/cv/Fatur_Rosek_CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-btn-outline rounded-xl font-semibold group"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold tracking-widest text-foreground/35 uppercase">Koneksi</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/FaturRosek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/faturrosek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  onClick={scrollToContact}
                  className="hero-social-link"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="flex-shrink-0 animate-hero-right">
            <div className="hero-photo-wrapper">
              <div className="hero-photo-frame">
                <img
                  src="/image/foto.jpg"
                  alt="Fatur Rosek"
                  className="hero-photo-img"
                />
                <div className="hero-photo-overlay" />
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-scroll-indicator"
        aria-label="Scroll down"
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
          <circle className="hero-scroll-dot" cx="12" cy="10" r="3" fill="currentColor"/>
        </svg>
      </button>
    </section>
  );
}
