import { useDispatch } from "react-redux";
import { actionCreator } from "../store/actionCreator";
import { SAVE_POPULAR } from "../store/types";

export const useLoadMovies = () => {
    const dispatch = useDispatch();
    return (movies) => {
        dispatch(actionCreator(SAVE_POPULAR, movies));
    }
}