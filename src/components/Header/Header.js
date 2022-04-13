import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <p>NiceFlix</p>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}