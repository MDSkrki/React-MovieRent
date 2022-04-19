import { useNavigate } from 'react-router-dom';
import { getMovie } from '../../services/movieService';
import { baseImgPath } from '../../services/uri';
import './MovieCard.css';

export const MovieCard = ({movie}) => {

    // Hook
    const navigate = useNavigate();

    // Handler
    const clickHandler = async () => {
        const movieDetail = await getMovie(movie.id);
        navigate('/movie/' + movie.id, {state: movieDetail});
    }

    return (
        <div className='MovieCard'>
            <h2>{movie.title}</h2>
            <img src={baseImgPath + movie.poster_path}  alt='img' onClick={clickHandler}/>
        </div>
    )
}