import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {

  const scrollToProjects = () => {
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer', 
                  2000,
                  'Data Science', 
                  2000,
                  'AI Engineering', 
                  2000,
                ]}
                wrapper="span"
                speed={20} 
                repeat={Infinity} 
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            <TypeAnimation
              sequence={[
                'Fresh graduate Universitas Trunojoyo Madura',
                2000,
                'College Student in Informatics Engineering',
                2000,
                'Bersemangat menciptakan solusi digital inovatif',
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              style={{
              display: 'inline-block',
              backgroundImage: 'linear-gradient(to right, #00b4d8, #48cae4, #90e0ef)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 500,
              }}
            />
          </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full shadow-glow hover:shadow-glow transition-all"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" onClick={scrollToContact}>
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a href="https://github.com/FaturRosek" target="_blank">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/faturrosek" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" onClick={scrollToAbout} />
      </div>
    </section>
  );
}
