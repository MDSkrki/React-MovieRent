import './Home.css'
import { getPopularMovies } from '../../services/movieService';
import { useNavigate } from 'react-router-dom';
import { useLoadMovies } from '../../hooks/useLoadMovies';


export const Home = () => {

    // Hooks
    const loadMovies = useLoadMovies();
    const navigate = useNavigate();

    const movieLoader = async() => {
        const popular = await getPopularMovies();
        loadMovies(popular.results);
    }

    const buttonHandler = async () => {
        await movieLoader();
        navigate('/popular');
    }

    return (
        <div className='Home'>
            <p>This is the Home Page</p>
            <button onClick={buttonHandler}>Popular Movies</button>
        </div>
    )
}