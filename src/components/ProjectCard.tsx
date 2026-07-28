import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Pause, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  video,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull =
        document.fullscreenElement === videoRef.current ||
        (document as any).webkitFullscreenElement === videoRef.current;
      setIsFullscreen(isFull);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).mozRequestFullScreen) {
      (video as any).mozRequestFullScreen();
    }
  };

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
        <div className="relative overflow-hidden h-48 bg-muted flex items-center justify-center">
          {video ? (
            <>
              <video
                ref={videoRef}
                src={video}
                controls={false}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                className={`w-full h-full rounded-md transition-all duration-300 ${
                  isFullscreen ? "object-contain bg-black" : "object-cover"
                }`}
              />
              <button
                onClick={handlePlayPause}
                className="absolute text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8" />
                )}
              </button>
              <button
                onClick={handleFullScreen}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
                title="Fullscreen"
              >
                ⛶
              </button>
            </>
          ) : image ? (
            <>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Zoom icon overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/75 transition opacity-0 group-hover:opacity-100"
                title="Lihat gambar"
                aria-label="Perbesar gambar"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </>
          ) : null}
        </div>

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

      {/* Lightbox Modal */}
      {lightboxOpen && image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={image}
            alt={title}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
