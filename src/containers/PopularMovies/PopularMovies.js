import './PopularMovies.css';
import { useSelector } from "react-redux";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const PopularMovies = () => {
    const movies = useSelector((state) => state.movie.popular)

    return (
        <>
            <div className="PopularMovies">
                {movies && movies.map((movie) => {
                    return (
                        <div>
                            <MovieCard movie={movie} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}