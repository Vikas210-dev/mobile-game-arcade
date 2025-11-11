import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import GameCard from "@/components/GameCard";
import { GameFilters } from "@/components/FilterMenu";
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

interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
  difficulty: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<GameFilters>({
    gameType: [],
    difficulty: "all",
    searchQuery: "",
  });

  const games: Game[] = [
    {
      id: "hexgl",
      title: "Rocket Racer",
      description: "Futuristic racing game",
      thumbnail: rocket,
      type: "racing",
      difficulty: "hard",
    },
    {
      id: "clumsy-bird",
      title: "Clumsy Bird",
      description: "Tap to fly through pipes",
      thumbnail: gameFlappy,
      type: "arcade",
      difficulty: "medium",
    },
    {
      id: "pacman",
      title: "Pac-Man",
      description: "Classic arcade maze game",
      thumbnail: gamePacman,
      type: "arcade",
      difficulty: "medium",
    },
    {
      id: "ophog",
      title: "OpHog",
      description: "Hacker puzzle strategy game",
      thumbnail: landGame,
      type: "strategy",
      difficulty: "hard",
    },
    {
      id: "bike",
      title: "Bike Racing",
      description: "Race through challenging tracks",
      thumbnail: bikeRacing,
      type: "racing",
      difficulty: "medium",
    },
    {
      id: "go-bowling",
      title: "Go Bowling",
      description: "Knock down pins in style",
      thumbnail: bowling,
      type: "action",
      difficulty: "easy",
    },
    {
      id: "hugeship",
      title: "Huge Ship",
      description: "Space adventure game",
      thumbnail: ship,
      type: "action",
      difficulty: "medium",
    },
    {
      id: "game-1",
      title: "Fruit Chopper",
      description: "Throw knives and hit targets",
      thumbnail: fruitChopper,
      type: "action",
      difficulty: "easy",
    },
    {
      id: "knife-attacks",
      title: "Knife Attacks",
      description: "Ultimate knife throwing game",
      thumbnail: knifeAttack,
      type: "action",
      difficulty: "medium",
    },
    {
      id: "3m",
      title: "Burst Bubble",
      description: "Fast-paced arcade game",
      thumbnail: bubble,
      type: "puzzle",
      difficulty: "easy",
    },
    {
      id: "4-2",
      title: "Jumping Panda",
      description: "Puzzle challenge game",
      thumbnail: panda,
      type: "puzzle",
      difficulty: "medium",
    },
    {
      id: "tower",
      title: "Stack Tower",
      description: "Stack blocks and build towers",
      thumbnail: gameTetris,
      type: "puzzle",
      difficulty: "easy",
    },
    {
      id: "js-racer",
      title: "JavaScript Racer",
      description: "Classic racing game",
      thumbnail: gameRacer,
      type: "racing",
      difficulty: "medium",
    },
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe",
      description: "Classic strategy board game",
      thumbnail: gameMinesweeper,
      type: "strategy",
      difficulty: "easy",
    },
    {
      id: "2048",
      title: "2048",
      description: "Combine tiles to reach 2048",
      thumbnail: game2048,
      type: "puzzle",
      difficulty: "medium",
    },
    {
      id: "hextris",
      title: "Hextris",
      description: "Hexagonal Tetris puzzle",
      thumbnail: gameTetris,
      type: "puzzle",
      difficulty: "hard",
    },
    {
      id: "snake",
      title: "Snake",
      description: "Classic snake game",
      thumbnail: gameSnake,
      type: "arcade",
      difficulty: "easy",
    },
    {
      id: "space-invaders",
      title: "Space Invaders",
      description: "Defend against alien invasion",
      thumbnail: ship,
      type: "action",
      difficulty: "medium",
    },
    {
      id: "duck-hunt",
      title: "Duck Hunt",
      description: "Classic hunting game",
      thumbnail: gameFlappy,
      type: "action",
      difficulty: "easy",
    },
    {
      id: "breaklock",
      title: "Breaklock",
      description: "Puzzle breaking game",
      thumbnail: bubble,
      type: "puzzle",
      difficulty: "medium",
    },
    {
      id: "alien-invasion",
      title: "Alien Invasion",
      description: "Fight off alien waves",
      thumbnail: ship,
      type: "action",
      difficulty: "medium",
    },
    {
      id: "candyjam",
      title: "Candy Jam",
      description: "Match candy puzzle game",
      thumbnail: bubble,
      type: "puzzle",
      difficulty: "easy",
    },
    {
      id: "canvas-tetris",
      title: "Canvas Tetris",
      description: "HTML5 Tetris variant",
      thumbnail: gameTetris,
      type: "puzzle",
      difficulty: "medium",
    },
    {
      id: "last-colony",
      title: "Last Colony",
      description: "Real-time strategy game",
      thumbnail: landGame,
      type: "strategy",
      difficulty: "hard",
    },
    {
      id: "radius-raid",
      title: "Radius Raid",
      description: "Space shooting game",
      thumbnail: ship,
      type: "action",
      difficulty: "medium",
    },
  ];

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      // Search filter
      if (filters.searchQuery && !game.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
        return false;
      }

      // Game type filter
      if (filters.gameType.length > 0 && !filters.gameType.includes(game.type)) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty !== "all" && game.difficulty !== filters.difficulty) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handlePlayGame = (gameId: string) => {
    navigate(`/play/${gameId}`);
  };

  const handleFilterChange = (newFilters: GameFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Popular Games</h2>
        <p className="text-muted-foreground">
          {filteredGames.length} games found
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredGames.map((game) => (
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

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No games found matching your filters.</p>
        </div>
      )}

      <footer className="mt-12 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 PlayVerse – All games are open source.
        </p>
      </footer>
    </div>
  );
};

export default Home;
