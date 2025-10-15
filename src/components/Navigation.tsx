import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">FtrRs</span>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
