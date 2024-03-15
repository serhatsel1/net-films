import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

const HomeContainer = () => {
  return (
    <>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
    </>
  );
};

export default HomeContainer;
