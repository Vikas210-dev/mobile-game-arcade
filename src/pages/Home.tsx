import { useNavigate } from "react-router-dom";
import GameCard from "@/components/GameCard";
import game2048 from "@/assets/game-2048.jpg";
import gameTetris from "@/assets/game-tetris.jpg";
import gameFlappy from "@/assets/game-flappy.jpg";
import gameSnake from "@/assets/game-snake.jpg";
import gameRacer from "@/assets/game-racer.jpg";
import gameMinesweeper from "@/assets/game-minesweeper.jpg";

const Home = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: "2048",
      title: "2048",
      description: "Classic puzzle challenge",
      thumbnail: game2048,
    },
    {
      id: "tetris",
      title: "Tetris",
      description: "Stack and clear the lines",
      thumbnail: gameTetris,
    },
    {
      id: "flappy-bird",
      title: "Flappy Bird",
      description: "Tap to fly through pipes",
      thumbnail: gameFlappy,
    },
    {
      id: "snake",
      title: "Snake",
      description: "Eat apples and grow longer",
      thumbnail: gameSnake,
    },
    {
      id: "car-racer",
      title: "Car Racer",
      description: "Race to the finish line",
      thumbnail: gameRacer,
    },
    {
      id: "minesweeper",
      title: "Minesweeper",
      description: "Find all the mines",
      thumbnail: gameMinesweeper,
    },
  ];

  const handlePlayGame = (gameId: string) => {
    navigate(`/play/${gameId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Popular Games</h2>
          <p className="text-muted-foreground">Choose your favorite and start playing!</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              description={game.description}
              thumbnail={game.thumbnail}
              onPlay={() => handlePlayGame(game.id)}
            />
          ))}
        </div>

        <footer className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 PlayVerse – All games are open source.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
