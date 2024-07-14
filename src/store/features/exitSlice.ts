import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authStateType = {
    /* Types */
    goAuth: boolean;
};

const initialState: authStateType = {
    /* first status point */
    goAuth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        goToAuth: (
            state,
            action: PayloadAction<{
                status: true | false;
            }>
        ) => {
            /* STATE = status ACTION = setStatus */
            state.goAuth = action.payload.status;
        },
    },
});

export const { goToAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
