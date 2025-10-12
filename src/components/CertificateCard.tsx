import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  url?: string;
}

export function CertificateCard({ title, issuer, date, credential, url }: CertificateCardProps) {
  return (
    <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              {title}
            </CardTitle>
            <CardDescription className="mt-2">{issuer}</CardDescription>
          </div>
          {url && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="rounded-full">{date}</Badge>
          {credential && (
            <span className="text-sm text-muted-foreground">ID: {credential}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
