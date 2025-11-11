import { useNavigate } from "react-router-dom";
import GameCard from "@/components/GameCard";
import game2048 from "@/assets/game-2048.jpg";
import gameTetris from "@/assets/game-tetris.jpg";
import gameFlappy from "@/assets/game-flappy.jpg";
import gameSnake from "@/assets/game-snake.jpg";
import gameRacer from "@/assets/game-racer.jpg";
import gameMinesweeper from "@/assets/game-minesweeper.jpg";
import gamePacman from "@/assets/pacman.jpg";
import bikeRacing from "@/assets/bike_racing.png";
import bowling from "@/assets/bowling.jpg";
import bubble from "@/assets/bubble.png";
import fruitChopper from "@/assets/fruit_chooper.png";
import knifeAttack from "@/assets/knif_attack.png";
import panda from "@/assets/panada.png";
import rocket from "@/assets/rocket.png";
import ship from "@/assets/ship.jpg";
import landGame from "@/assets/land_game.jpg";

const Home = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: "hexgl",
      title: "Rocket Racer",
      description: "Futuristic racing game",
      thumbnail: rocket, 
    },
    {
      id: "clumsy-bird",
      title: "Clumsy Bird",
      description: "Tap to fly through pipes",
      thumbnail: gameFlappy,
    },
    {
      id: "pacman",
      title: "Pac-Man",
      description: "Classic arcade maze game",
      thumbnail: gamePacman,
    },
    {
      id: "ophog",
      title: "OpHog",
      description: "Hacker puzzle strategy game",
      thumbnail: landGame,
    },
    {
      id: "bike",
      title: "Bike Racing",
      description: "Race through challenging tracks",
      thumbnail: bikeRacing,
    },
    {
      id: "go-bowling",
      title: "Go Bowling",
      description: "Knock down pins in style",
      thumbnail: bowling,
    },
    {
      id: "hugeship",
      title: "Huge Ship",
      description: "Space adventure game",
      thumbnail: ship,
    },
    {
      id: "game-1",
      title: "Fruit Chopper",
      description: "Throw knives and hit targets",
      thumbnail: fruitChopper,
    },
    {
      id: "knife-attacks",
      title: "Knife Attacks",
      description: "Ultimate knife throwing game",
      thumbnail: knifeAttack,
    },
    {
      id: "3m",
      title: "Burst Bubble",
      description: "Fast-paced arcade game",
      thumbnail: bubble,
    },
    {
      id: "4-2",
      title: "Jumping Panda",
      description: "Puzzle challenge game",
      thumbnail: panda,
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
