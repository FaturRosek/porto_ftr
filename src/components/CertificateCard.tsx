import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential?: string;
  url?: string;
}

export function CertificateCard({ image, title, issuer, date, credential, url }: CertificateCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 overflow-hidden rounded-2xl w-full max-w-sm mx-auto">
        <div
          className="relative w-full aspect-video overflow-hidden cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardHeader className="space-y-1 px-4 pt-3">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <Award className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{issuer}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 px-4 pb-4 pt-1">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="rounded-full text-xs px-2 py-0.5">{date}</Badge>
            {credential && (
              <span className="text-xs text-muted-foreground">ID: {credential}</span>
            )}
          </div>
          {url && (
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-xs font-medium w-full"
              asChild
            >
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Lihat Kredensial
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
