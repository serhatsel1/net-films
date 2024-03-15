import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params }) => {
  console.log(params);
  const movieDetails = Movies.results.find((movie) => {
    return movie.id === parseInt(params.id);
  });

  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
