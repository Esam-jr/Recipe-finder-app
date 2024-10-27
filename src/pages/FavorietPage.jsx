import RecipeCard from "../compponents/RecipeCard";

function FavorietPage() {
  const favs = true;
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favoriets</p>
        {!favs && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="not found" className="h-3/4" />
          </div>
        )}
        {favs && (
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default FavorietPage;
