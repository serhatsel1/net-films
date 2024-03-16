import CategoriesLoading from "@/components/categories/loading.js";
import FeatureMovieLoading from "@/components/featured-movie/loading";

const loading = () => {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
    </>
  );
};

export default loading;
