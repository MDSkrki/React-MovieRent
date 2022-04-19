import { apiConsumer } from "./apiConsumer";
import { getPopularMoviesTMDB, getRentsPath, postRentPath } from "./uri";

const baseImgPath = 'https://image.tmdb.org/t/p/w500/';
const apiKey = '88a1358f8071bd268e053f9a51588c71';

export const getMovie = async (id) => {
    const movie = await apiConsumer('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
    return {
        title: movie.title,
        img: baseImgPath + movie.poster_path,
        releaseDate: movie.release_date,
        price: '4€',
    };
}

export const getPopularMovies = async () => {
    try {
        const movies = await apiConsumer('GET', getPopularMoviesTMDB);
        return movies;
    } catch (error) {
        console.log(error);
    }
}

export const postRent = async (movie) => {
    try {
        const rent = await apiConsumer('POST', postRentPath, movie);
        return rent
    } catch (error) {
        console.log(error);
    }
}

export const getRents = async (id) => {
    if (!id) {
        try {
            const rents = await apiConsumer('GET', getRentsPath);
            return rents;
        } catch (error) {
            console.log(error);
        }
    }

    try {
        const rents = await apiConsumer('GET', getRentsPath + `?idUser=${id}`);
        return rents;
    } catch (error) {
        console.log(error);
    }
}