import { baseImgPath } from '../../services/uri';
import './MovieCard.css';

export const MovieCard = ({movie}) => {

    return (
        <div className='MovieCard'>
            <h2>{movie.title}</h2>
            <img src={baseImgPath + movie.poster_path}  alt='img'/>
        </div>
    )
}