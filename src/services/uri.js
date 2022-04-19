
const apiKey = '88a1358f8071bd268e053f9a51588c71';
export const baseImgPath = 'https://image.tmdb.org/t/p/w500/';

export const userLoginPath = 'http://localhost:4000/api/user/login';
export const userSignUpPath = 'http://localhost:4000/api/user/register';

export const getSingleMovieTMDB = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=en-US`;
export const getPopularMoviesTMDB = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const postRentPath = 'http://localhost:4000/api/rent/';
export const getRentsPath = 'http://localhost:4000/api/rent/';