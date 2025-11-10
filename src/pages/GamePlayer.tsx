import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const GamePlayer = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border p-4 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="text-foreground hover:text-primary"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-bold text-foreground capitalize">
          {gameId?.replace("-", " ")}
        </h1>
      </header>

      <div className="flex-1 flex items-center justify-center p-4 bg-muted/20">
        <div className="w-full max-w-md aspect-square bg-card rounded-2xl shadow-card border border-border flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="text-6xl">🎮</div>
            <h2 className="text-xl font-bold text-foreground">Game Loading...</h2>
            <p className="text-sm text-muted-foreground">
              This is a placeholder. The game will be loaded here via iframe.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Game ID: <span className="font-mono text-primary">{gameId}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
