import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Problem Solving",
  "Team Collaboration",
  "Continous Learning",
  "Attention to Detail",
  "Time Management"
];

export function AboutMe() {
  return (
    <section className="py-20 px-4">
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
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-gradient-primary p-1 animate-glow">
                    <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                      <div className="h-28 w-28 rounded-full bg-gradient-primary flex items-center justify-center text-4xl font-bold text-white">
                        D
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <span className="text-xl">👋</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold">Fatur Rosek</h3>
                  <p className="text-muted-foreground">Full Stack Web Developer</p>
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

          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Saya <span className="font-semibold">Fatur Rosek</span>, fresh graduate dari <span className="font-semibold">Teknik Informatika Universitas 
                    Trunojoyo Madura</span>. Saya memiliki ketertarikan yang kuat di bidang pengembangan web full stack, 
                    serta minat mendalam terhadap Data Science dan Artificial Intelligence.
                  </p>
                  <p>
                    Selama masa studi, saya aktif mengerjakan berbagai proyek berbasis teknologi, mulai dari sistem e-commerce, 
                    aplikasi layanan publik, game edukasi hingga pengembangan media pembelajaran interaktif berbasis Augmented Reality.
                  </p>
                  <p>
                    Saya senang memecahkan masalah melalui analisis data, logika pemrograman, dan penerapan teknologi inovatif untuk 
                    menciptakan solusi digital yang bermanfaat..
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
