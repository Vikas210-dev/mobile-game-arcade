import { ReactNode, useState } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import FilterMenu, { GameFilters } from "./FilterMenu";

interface LayoutProps {
  children: ReactNode;
  onFilterChange?: (filters: GameFilters) => void;
}

const Layout = ({ children, onFilterChange }: LayoutProps) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterChange = (filters: GameFilters) => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav onMenuClick={() => setFilterOpen(true)} />
      <FilterMenu
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onFilterChange={handleFilterChange}
      />
      <main>{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
