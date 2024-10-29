import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    role: string;
}

interface InitialState {
    user: UserState;
}

const initialState: InitialState = {
    user: {
        username: '',
        role: ''
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.user = action.payload;
        },
        updateUserRole(state, action: PayloadAction<string>) {
            state.user.role = action.payload;
        }
    }
});

export const { setUser, updateUserRole } = userSlice.actions;

export default userSlice.reducer;
