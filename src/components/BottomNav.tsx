import { NavLink } from "@/components/NavLink";
import { Gamepad2, Compass, Star, User } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { icon: Gamepad2, label: "Games", path: "/" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: Star, label: "Favorites", path: "/favorites" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-card z-50">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground min-w-[72px]"
            activeClassName="text-primary bg-primary/10"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
