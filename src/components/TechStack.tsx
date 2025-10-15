import { Code2, Database, Layout, Server, Smartphone, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techCategories = [
  {
    category: "Front-End",
    icon: Layout,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "React", "TypeScript"]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Laravel", "Node.js", "Express"]
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["MySQL", "PostgreSQL", "Supabase"]
  },
  {
    category: "Artificial Intelligence & Data Science",
    icon: Brain,
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "Streamlit"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["Unity", "Vuforia", "Android Studio", "C#"]
  },
  {
    category: "Tools & Design",
    icon: Code2,
    technologies: ["Git", "Github", "GitLab", "VS Code", "Figma", "Postman"]
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
