import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return(
        movies && (
        <div className="bg-black">
            <div className="-mt-72 relative z-24">
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Top Rated"} movies = {movies.topRated} />
            <MovieList title ={"Upcoming"} movies = {movies.upcoming} />
            <MovieList title ={"Popular Movies"} movies = {movies.popularMovies} />
            <MovieList title ={"Top Rated"} movies = {movies.topRated} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
            </div>
        </div>)
    )
};
export default SecondaryContainer;

                                                                                                                 