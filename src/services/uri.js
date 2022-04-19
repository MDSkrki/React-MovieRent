
const apiKey = '88a1358f8071bd268e053f9a51588c71';
export const baseImgPath = 'https://image.tmdb.org/t/p/w500/';

const localhost = 'http://localhost:4000/';
const heroku = 'https://mdskrki-api-movie-database.herokuapp.com/';

export const userLoginPath = heroku + 'api/user/login';
export const userSignUpPath = heroku + 'api/user/register';

export const getSingleMovieTMDB = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=en-US`;
export const getPopularMoviesTMDB = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const postRentPath = heroku + 'api/rent/';
export const getRentsPath = heroku + 'api/rent/';