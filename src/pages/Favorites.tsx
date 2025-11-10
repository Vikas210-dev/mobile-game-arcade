const Favorites = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Favorites</h2>
        
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">⭐</div>
          <h3 className="text-xl font-bold text-foreground mb-2">No Favorites Yet</h3>
          <p className="text-muted-foreground">
            Games you favorite will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
