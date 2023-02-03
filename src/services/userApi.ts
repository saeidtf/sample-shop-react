import { emptySplitApi } from "../redux/baseQuery";

export interface ResponseType {
    data:    Data | null;
    message: string;
    success: boolean;
}

export interface Data {
    token: string;
    user:  User;
}

export interface User {
    id:     number;
    name:   string;
    family: string;
    email:  string;
    phone:  string;
}

export type LoginBodyType = {
    email: string;
    password: string;
};

export type RegisterBodyType = {
    email: string;
    password: string;
    name: string;
    family: string;
    phone: string;
};





export const userApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseType,LoginBodyType>({
            query: (body) => ({
                url: "users/login",
                method: "POST",
                body,
            }),
        }),
        register: builder.mutation<ResponseType,RegisterBodyType>({
            query: (body) => ({
                url: "users/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
