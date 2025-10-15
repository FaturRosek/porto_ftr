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
    title: "E-Stock",
    description: "Sistem layanan kesehatan hewan berbasis web untuk manajemen stok obat, transaksi penyerahan barang, dan pencatatan data oleh petugas puskeswan secara efisien",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    image: "image/puskeswan.png", 
    demoUrl: "https://e-puskeswan.up.railway.app/",
    githubUrl: "https://github.com/FaturRosek/e-puskeswan",
  },
  {
    title: "Aplikasi AR Motif Batik Madura",
    description: "Aplikasi berbasis Android yang memanfaatkan teknologi Augmented Reality untuk menampilkan hasil klasifikasi motif batik Madura secara interaktif",
    tags: ["Unity", "Vuforia", "Artificial Intelligence", "TensorFlow", "Android"],
    video: "image/ar.mp4",
    demoUrl: "https://drive.google.com/file/d/1T1nL8ziOhxrS50oEQM0iEDwtCNL7TxzP/view?usp=sharing",
  },
  {
    title: "E-KTH",
    description: "Aplikasi web untuk mempermudah manajemen operasional Kelompok Tani Hutan (KTH), termasuk pengelolaan anggota, pencatatan kegiatan, dan pemantauan hasil produksi secara digital",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "REST API"],
    image: "image/kth.png",
    demoUrl: "https://kth.up.railway.app/",
    githubUrl: "https://github.com/FaturRosek/KTH",
  },
  {
    title: "MM Tailor",
    description: "Aplikasi berbasis web untuk pendataan dan manajemen karyawan, mencakup pengelolaan data pribadi, serta laporan kegiatan kerja secara efisien",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    image: "image/tailor.png",
    demoUrl: "https://mm-tailor.up.railway.app/",
    githubUrl: "https://github.com/username/ai-chat-assistant",
  },
  {
    title: "Game Edukasi Batik Madura",
    description: "Game edukasi yang dirancang untuk memperkenalkan serta melestarikan motif batik khas Madura melalui pengalaman bermain interaktif",
    tags: ["Construct 2", "HTML5", "JavaScript", "Game Design"],
    video: "image/game.mp4",
    demoUrl: "https://drive.google.com/file/d/1V0CEJGPduDBMTYghHU5QYAuEhxj7oHG2/view?usp=sharing",
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

      <section id="project" className="py-20 px-4">
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
