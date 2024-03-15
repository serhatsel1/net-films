import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

const MoviePage = ({ params }) => {

  const movieDetails = Movies.results.find((movie) => {
    return movie.id === parseInt(params.id);
  });


  if(!movieDetails) {
    notFound()
  }



  return <MovieContainer movie={movieDetails} />;
};

export default MoviePage;
