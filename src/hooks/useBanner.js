import { useDispatch } from "react-redux"
import { actionCreator } from "../store/actionCreator";
import { OPEN_BANNER } from "../store/types";

export const useBanner = () => {
    const dispatch = useDispatch();
    return (message) => {
        dispatch(actionCreator(OPEN_BANNER, message));
    }
}