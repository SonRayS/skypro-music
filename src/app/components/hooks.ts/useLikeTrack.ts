import { setLike, setDislike } from "../api/likes/likes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { dislike, likeTrack } from "@/store/features/playlistSlice";
import { trackType } from "../types";
import { useRouter } from "next/navigation";
import { setAuthState, setUserData } from "@/store/features/authSlice";

export function useLikeTrack(track: trackType, isFavorite?: boolean) {
    const dispatch = useAppDispatch();
    const logged = useAppSelector((state) => state.auth.authState);
    const userData = useAppSelector((state) => state.auth.userData);
    const likedTrack = useAppSelector((state) => state.playlist.likedTracks);
    const isLiked = likedTrack.find((user) => user.id === track.id);
    const router = useRouter();

    const logout = () => {
        dispatch(setAuthState(false));
        dispatch(setUserData(null));
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    async function handleLike(event: React.MouseEvent) {
        event.stopPropagation();

        if (logged) {
            try {
                if (isLiked) {
                    await setDislike(userData?.access, track.id);
                } else {
                    await setLike(userData?.access, track.id);
                }
                isLiked ? dispatch(dislike(track)) : dispatch(likeTrack(track));
            } catch (error) {
                if (error instanceof Error) {
                    const errorData = JSON.parse(error.message);
                    if (errorData.status === 401) {
                        logout();
                        router.push("/signin");
                    }
                } else {
                    console.error("Unexpected error:", error);
                }
            }
        } else {
            router.push("/signin");
        }
    }

    return {
        isLiked,
        handleLike,
    };
}
