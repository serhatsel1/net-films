import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

const MoviePage = ({ params, searchParams }) => {
  const movieDetails = Movies.results.find((movie) => {
    return movie.id === parseInt(params.id);
  });

  if (!movieDetails) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new error("dangerous error !!!");
  }

  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
