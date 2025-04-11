import MovieCard from "./MovieCard";
                       
const MovieList = ({title, movies}) => {
 // console.log(movies);
  
  if(movies === null) return;

    return(
      <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-scroll">
                <div className="flex ">
                    {movies.filter((movie) => movie.poster_path)
                     .map((movie) => (
                     <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
               </div>
            </div>
          </div>
    );
}
export default MovieList;