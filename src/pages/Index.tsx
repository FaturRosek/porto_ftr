import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ContactMe } from "@/components/ContactMe";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificateCard } from "@/components/CertificateCard";
import { TechStack } from "@/components/TechStack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and real-time inventory management",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by modern AI models with context awareness",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and dark mode support",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard with interactive maps and forecasts",
    tags: ["Next.js", "API Integration", "Charts"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across platforms",
    tags: ["React", "Node.js", "MongoDB", "Charts"],
  },
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "ABC123XYZ",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2023",
    credential: "PSM-001",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    credential: "META-FED-2023",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    credential: "GCP-PRO-456",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credential: "MONGO-DEV-789",
  },
  {
    title: "React Advanced Certification",
    issuer: "FreeCodeCamp",
    date: "2022",
    credential: "FCC-REACT-ADV",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero />

      <AboutMe />

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md h-auto p-1 bg-muted/50 rounded-full">
                <TabsTrigger 
                  value="projects" 
                  className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-card py-3"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="certificates"
                  className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-card py-3"
                >
                  Certificates
                </TabsTrigger>
                <TabsTrigger 
                  value="tech-stack"
                  className="rounded-full data-[state=active]:bg-background data-[state=active]:shadow-card py-3"
                >
                  Tech Stack
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="projects" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                  <CertificateCard key={index} {...cert} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tech-stack" className="animate-fade-in">

              <TechStack />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ContactMe />

      <footer className="py-12 px-4 border-t border-border/50 bg-muted/30">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Developer Portfolio. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
