import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IUserInfo {
    id: number;
    name: string;
    email: string;
    phone?: string;
    family: string;
    avatar?: string;
};

interface UserState {
    value: IUserInfo;
    token?: string;
};

const userStorage = localStorage.getItem("user");

const initialState: UserState = {
    value: userStorage ? JSON.parse(userStorage) : {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.value = action.payload.value;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token!);
        },
        logout: (state) => {
            state.value = {} as IUserInfo;
            state.token = "";
            localStorage.removeItem("token");
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;

