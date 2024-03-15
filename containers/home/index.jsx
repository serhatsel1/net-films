import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

const HomeContainer = () => {
  return (
    <>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title="Populer Films"
        movies={Movies.results.slice(1, 8)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(8, 14)}
      />
    </>
  );
};

export default HomeContainer;
