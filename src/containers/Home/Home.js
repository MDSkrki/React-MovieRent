import './Home.css'
import { LoremIpsum } from '../../components/LoremIpsum/LoremIpsum';

export const Home = () => {
    return (
        <div className='Home'>
            <p>This is the Home Page</p>
            <LoremIpsum />
        </div>
    )
}