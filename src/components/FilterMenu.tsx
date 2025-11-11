import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FilterMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: GameFilters) => void;
}

export interface GameFilters {
  gameType: string[];
  difficulty: string;
  searchQuery: string;
}

const FilterMenu = ({ isOpen, onClose, onFilterChange }: FilterMenuProps) => {
  const [filters, setFilters] = useState<GameFilters>({
    gameType: [],
    difficulty: "all",
    searchQuery: "",
  });

  const gameTypes = [
    { id: "action", label: "Action" },
    { id: "puzzle", label: "Puzzle" },
    { id: "arcade", label: "Arcade" },
    { id: "racing", label: "Racing" },
    { id: "strategy", label: "Strategy" },
  ];

  const handleGameTypeChange = (typeId: string) => {
    const updatedTypes = filters.gameType.includes(typeId)
      ? filters.gameType.filter((t) => t !== typeId)
      : [...filters.gameType, typeId];
    
    const newFilters = { ...filters, gameType: updatedTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleDifficultyChange = (level: string) => {
    const newFilters = { ...filters, difficulty: level };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchChange = (query: string) => {
    const newFilters = { ...filters, searchQuery: query };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      gameType: [],
      difficulty: "all",
      searchQuery: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Slider Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-card border-l border-border shadow-lg transform transition-transform duration-300 z-[70] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-bold text-foreground">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4 pb-40 space-y-6">
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Search</label>
              <input
                type="text"
                placeholder="Search games..."
                value={filters.searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Game Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Game Type</label>
              <div className="space-y-2">
                {gameTypes.map((type) => (
                  <label key={type.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.gameType.includes(type.id)}
                      onChange={() => handleGameTypeChange(type.id)}
                      className="w-4 h-4 rounded accent-primary cursor-pointer"
                    />
                    <span className="text-sm text-foreground">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Difficulty</label>
              <div className="space-y-2">
                {[
                  { value: "all", label: "All Levels" },
                  { value: "easy", label: "Easy" },
                  { value: "medium", label: "Medium" },
                  { value: "hard", label: "Hard" },
                ].map((level) => (
                  <label key={level.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="difficulty"
                      value={level.value}
                      checked={filters.difficulty === level.value}
                      onChange={() => handleDifficultyChange(level.value)}
                      className="w-4 h-4 accent-primary cursor-pointer"
                    />
                    <span className="text-sm text-foreground">{level.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Sticky and above bottom nav */}
          <div className="sticky bottom-16 md:bottom-0 border-t border-border p-4 space-y-2 bg-card">
            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full text-foreground border-border hover:bg-muted"
            >
              Reset Filters
            </Button>
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary to-blue-500 hover:shadow-lg hover:shadow-primary/50 text-white font-semibold"
            >
              ✓ Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
