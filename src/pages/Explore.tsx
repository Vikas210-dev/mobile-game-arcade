import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Explore = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Explore Games</h2>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for games..."
            className="pl-10 bg-card border-border text-foreground h-12 rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-foreground mb-2">Coming Soon</h3>
          <p className="text-muted-foreground">
            Discover new games and categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
