import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="bg-[#fff] min-h-screen">
      <div className="container w-full mx-auto px-4 flex flex-col justify-center items-center text-black bg-[#fff]">
        <h1 className="text-lg xl:text-2xl font-bold my-8 capitalize">
          Favorite Products
        </h1>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {favorites.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
