import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { ContactMe } from "@/components/ContactMe";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificateCard } from "@/components/CertificateCard";
import { TechStack } from "@/components/TechStack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "MSJ Material",
    description: "Sistem manajemen material berbasis web yang dikembangkan untuk mengelola Master Material, Alternative UoM, dan Bill of Material (BOM), serta mendukung integrasi API SAP untuk pengecekan dan pengelolaan data material.",
    tags: ["Laravel", "Livewire", "PHP","JavaScript", "MySQL", "OneSignal", "SAP API"],
    image: "image/image_material.png",
  },
  {
    title: "MSJ Asset",
    description: "Sistem manajemen aset berbasis web yang dikembangkan untuk mendukung pengelolaan dan pemantauan aset perusahaan, dilengkapi dashboard, fitur monitoring, notifikasi, serta pengembangan dan perbaikan fitur sesuai kebutuhan operasional.",
    tags: ["Laravel", "Livewire", "PHP","JavaScript", "MySQL", "ECharts"],
    image: "image/image_asset.png",
  },
  {
    title: "Web Company Profile",
    description: "Website company profile PT Multi Spunindo Jaya Tbk yang dikembangkan untuk menyajikan informasi perusahaan, profil bisnis, produk, serta informasi terkait perusahaan secara informatif dan mudah diakses melalui platform web",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL" ],
    image: "image/cp.png",
  },
  {
    title: "E-Puskeswan",
    description: "Sistem layanan kesehatan hewan berbasis web untuk manajemen stok obat, transaksi penyerahan barang, dan pencatatan data oleh petugas puskeswan secara efisien",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    image: "image/estock.png", 
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
    // demoUrl: "https://kth.up.railway.app/",
    githubUrl: "https://github.com/FaturRosek/KTH",
  },
  {
    title: "MM Tailor",
    description: "Aplikasi berbasis web untuk pendataan dan manajemen karyawan, mencakup pengelolaan data pribadi, serta laporan kegiatan kerja secara efisien",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    image: "image/tailor.png",
    // demoUrl: "https://mm-tailor.up.railway.app/",
    githubUrl: "https://github.com/FaturRosek/BNSP",
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
    title: "IT Programmer",
    issuer: "PT Multi Spunindo Jaya",
    date: "2026",
    image: "image/magang.jpg",
    credential: "MN.035.017559.03.2025",
  },
  {
    title: "Hak Cipta Aplikasi AR",
    issuer: "Direktoral Jenderal Kekayaan Intelektual",
    date: "2025",
    image: "image/ar.jpg",
    credential: "000977369",
    url: "https://hakcipta.dgip.go.id/legal/c/NWFlM2YwNDdlNWZiNDk5MDNmMTU4ODFkZGY1MmNkNDY=",
  },
  {
    title: "Junior Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024",
    image: "image/bnsp.jpg",
    credential: "63090 2513 3 0101473 2024",
    url:"https://sertifikasi.lspdigital.id/sertifikasi/cetak_sertifikat/156702",
  },
  {
    title: "Hak Cipta Game Edukasi",
    issuer: "Direktoral Jenderal Kekayaan Intelektual",
    date: "2024",
    image: "image/game.jpg",
    credential: "000791987",
    url: "https://e-hakcipta.dgip.go.id/legal/c/NTQ3Zjk1NjJmZTg3YzIwZDI3YTY0YWZmZDZkNDllZWUK",
  },
  {
    title: "MSIB Angkatan 6",
    issuer: "PT Arkatama Multi Solusindo",
    date: "2024",
    image: "image/sib.jpg",
    credential: "AMS/B-409/Sert/VI/2024",
  },
  {
    title: "Database Foundations",
    issuer: "Oracle Academy",
    date: "2023",
    image: "image/foundation.jpg",
    credential: "",
  },
  {
    title: "Database Design",
    issuer: "Oracle Academy",
    date: "2023",
    image: "image/design.jpg",
    credential: "",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero />

      <AboutMe />

      <Experience />

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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
            © 2025 FtrRs Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
