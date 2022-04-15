import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {

    const loggedState = useSelector((state) => state.user.logged)

    return (
        <header>
            <p>NiceFlix</p>
            <nav>
                {loggedState && <Link to='/profile'>Profile</Link>}
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}