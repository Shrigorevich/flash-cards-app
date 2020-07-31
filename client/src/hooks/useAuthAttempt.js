import { useDispatch } from "react-redux";
import { tryToAuth } from "./../redux/actions";

export const useAuthAttempt = () => {
    const dispatch = useDispatch();
    dispatch(tryToAuth());
};
