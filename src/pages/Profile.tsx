import { Card } from "@/components/ui/card";
import { User, Settings, Info } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Profile</h2>
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
            <User className="h-12 w-12 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Guest Player</h3>
          <p className="text-sm text-muted-foreground">Login to save your progress</p>
        </div>

        <div className="space-y-3">
          <Card className="p-4 bg-gradient-card border-border/50 shadow-card flex items-center gap-4 hover:shadow-glow transition-all cursor-pointer">
            <Settings className="h-6 w-6 text-primary" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">Settings</h4>
              <p className="text-xs text-muted-foreground">Preferences and options</p>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border/50 shadow-card flex items-center gap-4 hover:shadow-glow transition-all cursor-pointer">
            <Info className="h-6 w-6 text-secondary" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">About</h4>
              <p className="text-xs text-muted-foreground">Learn more about PlayVerse</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
