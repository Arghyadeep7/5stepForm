import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
    loggedIn: boolean,
    authToken: string
}

const initialState: State = {
    loggedIn: false,
    authToken: ""
}

const ProfileSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            state.loggedIn = true;
            state.authToken = action.payload;
        },
        logOut: (state) => {
            state.loggedIn = false;
            state.authToken = "";
        }
    }
});

export default ProfileSlice.reducer;

export const { logIn, logOut } = ProfileSlice.actions;