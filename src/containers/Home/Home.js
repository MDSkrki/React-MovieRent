import './Home.css'
import { LoremIpsum } from '../../components/LoremIpsum/LoremIpsum';
import { useSelector } from 'react-redux';


export const Home = () => {

    const userState = useSelector((state) => state.user)
    const userChecker = () => {
        console.log(userState);
    }
    return (
        <div className='Home'>
            <p>This is the Home Page</p>
            <LoremIpsum />
            <button onClick={userChecker}>Click Me!</button>
        </div>
    )
}