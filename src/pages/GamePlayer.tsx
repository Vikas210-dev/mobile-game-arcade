import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const GamePlayer = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [isLandscape, setIsLandscape] = useState(false);

  // Check if device is in landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    // Add body class to prevent scrolling and zooming
    document.body.classList.add("game-active");

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
      document.body.classList.remove("game-active");
    };
  }, []);

  // Map game IDs to their paths
  const getGameUrl = (id: string) => {
    // Use absolute URL for production, relative for dev
    const isDev = import.meta.env.DEV;
    const base = isDev ? import.meta.env.BASE_URL : 'https://demo.techembryo.com/play-verse/';
    
    const gameUrls: { [key: string]: string } = {
      "hexgl": `${base}games/HexGL-master/index.html`,
      "clumsy-bird": `${base}games/clumsy-bird-master/index.html`,
      "pacman": `${base}games/pacman-canvas-master/index.htm`,
      "ophog": `${base}games/OpHog-master/src/index.html`,
      "bike": `${base}games/bike/index.html`,
      "go-bowling": `${base}games/GoBowling2/index.html`,
      "hugeship": `${base}games/hugeship/index.html`,
      "game-1": `${base}games/1/index.html`,
      "knife-attacks": `${base}games/Knife Attacks/index.html`,
      "3m": `${base}games/3m/index.html`,
      "4-2": `${base}games/4_2/index.html`,
      "tower": `${base}games/tower_game-master/index.html`,
      "js-racer": `${base}games/javascript-racer-master/index.html`,
      "tic-tac-toe": `${base}games/tic-tac-toe/dist/index.html`,
      "2048": `${base}games/2048-master/index.html`,
      "hextris": `${base}games/hextris-gh-pages/index.html`,
      "snake": `${base}games/snake/index.html`,
      "space-invaders": `${base}games/SpaceInvaders-master/index.html`,
      "duck-hunt": `${base}games/DuckHunt-JS-master/dist/index.html`,
      "breaklock": `${base}games/breaklock-master/index.html`,
      "alien-invasion": `${base}games/AlienInvasion-master/index.html`,
      "candyjam": `${base}games/candyjam-master/index.html`,
      "canvas-tetris": `${base}games/canvas-tetris-master/index.html`,
      "last-colony": `${base}games/last-colony-master/index.html`,
      "radius-raid": `${base}games/radius-raid-js13k-master/index.html`,
    };
    const url = gameUrls[id] || null;
    console.log('Base URL:', base);
    console.log('Game URL:', url);
    console.log('Is Dev:', isDev);
    return url;
  };

  const gameUrl = getGameUrl(gameId || "");

  // Fullscreen mode for landscape
  if (isLandscape && gameUrl) {
    return (
      <div className="fixed inset-0 bg-black" style={{ touchAction: 'none' }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="absolute top-2 left-2 z-50 bg-black/50 hover:bg-black/70 text-white"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <iframe
          src={gameUrl}
          className="w-full h-full border-0"
          title={gameId}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ touchAction: 'none' }}
        />
      </div>
    );
  }

  // Portrait mode with header
  return (
    <div className="fixed inset-0 bg-background flex flex-col" style={{ touchAction: 'none' }}>
      <header className="bg-card border-b border-border p-4 flex items-center gap-4 shrink-0">
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

      <div className="flex-1 bg-black overflow-hidden" style={{ touchAction: 'none' }}>
        {gameUrl ? (
          <iframe
            src={gameUrl}
            className="w-full h-full border-0"
            title={gameId}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ touchAction: 'none' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 p-8">
              <div className="text-6xl">🎮</div>
              <h2 className="text-xl font-bold text-white">Game Not Found</h2>
              <p className="text-sm text-gray-400">
                This game is not yet integrated.
              </p>
              <p className="text-xs text-gray-500 mt-4">
                Game ID: <span className="font-mono text-primary">{gameId}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePlayer;
