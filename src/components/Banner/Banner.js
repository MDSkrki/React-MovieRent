import { useDispatch, useSelector } from "react-redux"
import { CgCloseO } from 'react-icons/cg'
import './Banner.css'
import { CLOSE_BANNER } from "../../store/types";
import { actionCreator } from "../../store/actionCreator";

export const Banner = () => {

    const bannerMessage = useSelector((state) => state.banner.message);
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(actionCreator(CLOSE_BANNER));
    }
    return (
        <div className="Banner">
            <button onClick={closeButton}><CgCloseO /></button>
            <p className="bannerMessage">{bannerMessage}</p>
        </div>
    )
}