import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  onPlay: () => void;
}

const GameCard = ({ title, description, thumbnail, onPlay }: GameCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-in">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <Button
          onClick={onPlay}
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold text-base h-12 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
        >
          <Play className="mr-2 h-5 w-5" />
          Play Now
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;
