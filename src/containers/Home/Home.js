import './Home.css'
import { LoremIpsum } from '../../components/LoremIpsum/LoremIpsum';
import { useDispatch } from 'react-redux';
import { OPEN_BANNER } from '../../store/types';
import { actionCreator } from '../../store/actionCreator';

export const Home = () => {

    const dispatch = useDispatch();
    const openBanner = () => {
        dispatch(actionCreator(OPEN_BANNER, 'Home has opened the banner'))
    }
    return (
        <div className='Home'>
            <p>This is the Home Page</p>
            <LoremIpsum />
            <button onClick={openBanner}>Click Me!</button>
        </div>
    )
}