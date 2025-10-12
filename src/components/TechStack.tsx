import { Code2, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techCategories = [
  {
    category: "Web Development",
    icon: Layout,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express", "Python", "Django", "FastAPI"]
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    category: "DevOps",
    icon: Terminal,
    technologies: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Vercel"]
  },
  {
    category: "Tools",
    icon: Code2,
    technologies: ["Git", "VS Code", "Figma", "Postman", "Jest"]
  }
];

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techCategories.map(({ category, icon: Icon, technologies }) => (
        <Card 
          key={category} 
          className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li 
                  key={tech}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
