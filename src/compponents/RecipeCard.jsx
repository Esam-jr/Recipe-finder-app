import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

function RecipeCard({ recipe, bg, badge }) {
  function gettwoArrays(arr) {
    return arr.slice(0, 2);
  }

  const [isFavorite, setFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  function addRecipeToFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorites = favorite.some(
      (fav) => fav.label === recipe.label
    );

    if (isAlreadyFavorites) {
      // Removing the recipe from favorites
      favorite = favorite.filter((isfav) => isfav.label !== recipe.label);
      setFavorite(false);
    } else {
      // Adding the recipe to favorites
      favorite.push(recipe);
      setFavorite(true);
    }

    // Saving updated favorites to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }

  const HealthLabels = gettwoArrays(recipe.healthLabels);
  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        className="relative h-32"
      >
        <img
          src={recipe.image}
          alt="food"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer gap-1 flex items-center text-sm">
          <Soup size={16} /> {recipe.yield} servings
        </div>
        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer gap-1 flex items-center text-sm"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFavorite();
          }}
        >
          {!isFavorite && (
            <Heart
              size={16}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}
          {isFavorite && (
            <Heart size={16} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {HealthLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
