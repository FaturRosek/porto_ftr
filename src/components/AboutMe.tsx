import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const skills = [
  "Problem Solving",
  "Clean Code",
  "Team Collaboration",
  "Attention to Detail",
  "Fast Learner",
  "Debugging",
  "RESTful API",
  "Version Control",
];

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-1 overflow-hidden bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-32 w-32 rounded-full bg-gradient-primary p-1 animate-glow">
                  <div className="h-full w-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    <img
                      src="/image/foto.jpg"
                      alt="Fatur Rosek"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Fatur Rosek</h3>
                  <p className="text-muted-foreground text-sm mt-1">Full Stack Web Developer</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="lg:col-span-2 flex">
            <Card className="w-full bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Saya <span className="font-semibold text-foreground">Fatur Rosek</span>, lulusan{" "}
                    <span className="font-semibold text-foreground">
                      Teknik Informatika Universitas Trunojoyo Madura
                    </span>
                    , dengan keahlian komprehensif dalam pengembangan aplikasi web (Full Stack),
                    pengelolaan data, serta pemeliharaan sistem SAP.
                  </p>
                  <p>
                    Terbiasa menganalisis kebutuhan sistem, mengembangkan fitur digital, memonitor
                    operasional, dan memastikan validasi serta akurasi data. Memiliki kemampuan
                    manajerial yang terbukti melalui pengalaman memimpin tim, ketelitian tinggi, serta
                    adaptif dalam mencapai target perusahaan baik secara mandiri maupun dalam tim.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
