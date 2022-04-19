import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useBanner } from "../../hooks/useBanner";
import { postRent } from "../../services/movieService";
import { baseImgPath } from "../../services/uri";

export const MovieDetail = () => {

    //Hooks
    const navigate = useNavigate()
    const banner = useBanner();
    const location = useLocation();
    const { id } = useParams();
    const movie = useSelector((state) => state.movie.popular.find((elem) => (elem.id === Number(id))));
    const idUser = useSelector((state)=> state.user.id);

    const buttonHandler = async () => {
        if (!idUser) {
            navigate('/login');
            return;
        }
        const rent = {
            idUser,
            idMovie: movie.id,
            dateRented: 'i have to put a date',
            price: location.state.price,
        }
        const saved = await postRent(rent);
        console.log(saved);
        banner('You have successfully rented a movie');
        navigate('/profile');
    }

    return (
        <div className="MovieDetail">
            <div>
                <h2>{movie.title}</h2>
                <img src={baseImgPath + movie.poster_path} alt='Movie poster' />
            </div>

            <p>Release date: {location.state.releaseDate}</p>
            <div>
                <button onClick={buttonHandler}>Rent this movie </button><span> {location.state.price}</span>
            </div>
        </div>
    )
}