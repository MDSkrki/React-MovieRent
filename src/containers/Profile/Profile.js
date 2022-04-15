import { useSelector } from 'react-redux'
import './Profile.css'

export const Profile = () => {

    const userState = useSelector((state) => state.user);

    return (
        <>
            <div>
                <h1>Welcome {userState.username}! </h1>
            </div>

            <div>
                <h2>Here are your rented movies:</h2>
            </div>
        </>
    )
}