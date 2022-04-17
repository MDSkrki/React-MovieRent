import { apiConsumer } from "./apiConsumer";
import { getPopularMoviesTMDB, getSingleMovieTMDB } from "./uri";

const baseImgPath = 'https://image.tmdb.org/t/p/w500/';

export const getMovie = async () => {
    const movie = await apiConsumer('GET', getSingleMovieTMDB);
    return {
        title: movie.title,
        img: baseImgPath + movie.poster_path,
        releaseDate: movie.release_date,
        genre: movie.genre[0].name,
    };
}

export const getPopularMovies = async () => {
    const movies = await apiConsumer('GET', getPopularMoviesTMDB);
    return movies;
}

