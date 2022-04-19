import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { getRents } from '../../services/movieService';
import './Profile.css'

export const Profile = () => {

    const userState = useSelector((state) => state.user);
    const rentedState = useSelector((state) => state.movie.rented);
    const [rents, setRents] = useState(null);

    useEffect(() => {
        getRents(userState.id).then((res) => {
            setRents(res);
            console.log(res);
        }).catch(err => console.log(err));
    }, [])

    return (
        <>
            {!userState.id && <h1>Please Log In first</h1>}
            {userState.id &&
                <div>
                    <div>
                        <h1>Welcome {userState.username}! </h1>
                    </div>

                    <div>
                        <h2>Here are your rented movies: </h2>
                        {rents && rents.map((movie) => <div>
                            <p>id: {movie.idMovie}</p>
                        </div>)}
                    </div>
                </div>
            }

        </>
    )
}