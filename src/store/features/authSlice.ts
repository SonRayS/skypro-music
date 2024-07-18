import { getValueFromLocalStorage } from "@/app/lib/getValueFromLS";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
    authState: boolean;
    userData: {
        id: number;
        email: string;
        username: string;
        refresh: string;
        access: string;
    };
};

function checkLSAuth(key: string) {
    try {
        const data = JSON.parse(localStorage.getItem(key) || "");
        return data || null;
    } catch (error) {
        return null;
    }
}

const initialState: AuthStateType = {
    authState: !!checkLSAuth("user"),
    userData: checkLSAuth("user"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<boolean>) => {
            state.authState = action.payload;
        },
        setUserData: (
            state,
            action: PayloadAction<{
                email?: string;
                username?: string;
                refresh?: string;
                access?: string;
                id?: number;
            } | null>
        ) => {
            state.userData = {
                id: action.payload?.id || state.userData.id,
                email:
                    action.payload?.email ||
                    state.userData.email ||
                    getValueFromLocalStorage("user"),
                username: action.payload?.username || state.userData.username,
                refresh:
                    action.payload?.refresh || state.userData?.refresh || "",
                access:
                    action.payload?.access ||
                    state.userData?.access ||
                    getValueFromLocalStorage("token"),
            };
        },
    },
});

export const { setAuthState, setUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
