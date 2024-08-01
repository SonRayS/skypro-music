import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useLogoutOnPageUnload = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleUnload = () => {
            dispatch(setAuthState(false));
            dispatch(setUserData(null));
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, [dispatch]);
};

export default useLogoutOnPageUnload;
