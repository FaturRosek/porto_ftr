import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, image, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      {image && (
        <div className="overflow-hidden h-48 bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-2">
          <span>{title}</span>
          <div className="flex gap-2">
            {githubUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
