import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionCreator } from '../../store/actionCreator';
import { OPEN_BANNER, USER_UNLOGGED } from '../../store/types';
import './Header.css';

export const Header = () => {

    const loggedState = useSelector((state) => state.user.logged)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openBanner = () => {
        dispatch(actionCreator(OPEN_BANNER, `You have successfully Logged out!`));
    }

    const logoutHandler = () => {
        dispatch(actionCreator(USER_UNLOGGED));
        openBanner();
        navigate('/');
    }

    return (
        <header>
            <Link to="/">Home</Link>
            <nav>
                {!loggedState && (<Link to='/login'>Login</Link>)}
                {loggedState && (<Link to='/profile'>Profile</Link>)}
                {loggedState && (<p onClick={logoutHandler}>Logout</p>)}
                <Link to="/signup">Sign Up</Link>
            </nav>
        </header>
    )
}