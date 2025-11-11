import { Menu, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  onMenuClick?: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-card">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PlayVerse
          </h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground hover:text-primary"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default TopNav;
