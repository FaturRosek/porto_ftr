import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  points: string[];
  icon: "work" | "research" | "study";
}

const experiences: ExperienceItem[] = [
  {
    company: "PT Multi Spunindo Jaya Tbk",
    role: "IT Programmer",
    type: "Internship",
    period: "Des 2025 – Jun 2026",
    location: "Sidoarjo, Jawa Timur",
    icon: "work",
    points: [
      "Mengembangkan dan melakukan pembaruan (improvement) pada sistem aplikasi web produksi menggunakan Laravel, Javascript, dan MySQL untuk mendukung efisiensi operasional perusahaan.",
      "Mengelola dan memvalidasi 50+ entri data SAP (Master Material dan Vendor) secara harian untuk memastikan akurasi dan integritas data perusahaan.",
      "Melakukan proses input, pembaruan (update), dan validasi data master sesuai dengan standar dan kebutuhan operasional.",
      "Memimpin dan melakukan mentoring kepada 2 mahasiswa magang, mendelegasikan tugas, serta memonitor progres mingguan untuk memastikan proyek selesai 100% tepat waktu sesuai deadline.",
    ],
  },
  {
    company: "Universitas Trunojoyo Madura",
    role: "Asisten Peneliti",
    type: "",
    period: "Jun 2024 – Des 2024",
    location: "Bangkalan, Jawa Timur",
    icon: "research",
    points: [
      "Berhasil mengembangkan game edukasi pelestarian budaya Madura (Motif Batik) yang dianugerahi sertifikat Hak Kekayaan Intelektual (HKI) oleh DJKI.",
      "Merancang desain gameplay, mengimplementasikan fitur aplikasi, serta melakukan pengujian kegunaan (usability testing) kepada 100 pengguna.",
      "Berkolaborasi dengan tim peneliti utama untuk mengintegrasikan unsur budaya ke dalam sistem dan menyusun dokumentasi riset secara komprehensif.",
    ],
  },
  {
    company: "PT Arkatama Multi Solusindo",
    role: "Full Stack Web Developer",
    type: "Studi Independen Bersertifikat (SIB) Batch 6",
    period: "Feb 2024 – Jun 2024",
    location: "Malang, Jawa Timur",
    icon: "study",
    points: [
      "Membangun dan merilis aplikasi web e-Puskeswan untuk Dinas Peternakan dan Kesehatan Hewan menggunakan Laravel, Javascript, dan MySQL.",
      "Membangun dan mengelola fitur manajemen data serta transaksi operasional yang terintegrasi dengan database.",
      "Mengimplementasikan fitur pencatatan stok dan transaksi berbasis database yang berhasil membuat pemantauan data 99% lebih terstruktur.",
    ],
  },
];

function ExperienceIcon({ type }: { type: ExperienceItem["icon"] }) {
  if (type === "work") return <Briefcase className="h-5 w-5 text-primary" />;
  if (type === "study") return <GraduationCap className="h-5 w-5 text-primary" />;
  return <GraduationCap className="h-5 w-5 text-primary" />;
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Experience</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Pengalaman kerja yang telah membentuk keahlian saya.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 group">
                <div className="relative z-10 hidden sm:flex flex-shrink-0 items-start">
                  <div className="mt-1 w-12 h-12 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary transition-colors duration-300 flex items-center justify-center shadow-sm">
                    <ExperienceIcon type={exp.icon} />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-card border border-border/50 rounded-2xl p-6 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{exp.company}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{exp.role}</p>
                      {exp.type && (
                        <p className="text-muted-foreground text-xs mt-0.5">{exp.type}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:text-right flex-shrink-0">
                      <span className="flex items-center gap-1 sm:justify-end">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 sm:justify-end">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
