import './Social.css';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Social = () => {
    return (
        <IconContext.Provider value={{size: "2em"}}>
            <div>
                <a href="https://github.com/MDSkrki/" target='_blank' rel='noreferrer'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mihai-daniel-somkereki-b84027b4/" target='_blank' rel='noreferrer'><FaLinkedin /></a>
            </div> 
        </IconContext.Provider>
    )
}