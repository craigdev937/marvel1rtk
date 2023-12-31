import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacters, IComics } from "../models/Interfaces";
const apiKEY = process.env.API_KEY;
const hashKEY = process.env.HASH_KEY;
const URL = "https://gateway.marvel.com:443/v1/public";

export const MarvelAPI = createApi({
    reducerPath: "MarvelAPI",
    tagTypes: ["Character", "Comics"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        char: builder.query<ICharacters, void>({
            query: () => ({
                url: `/characters?&limit=50ts=1&apikey=${
                    apiKEY}&hash=${hashKEY}`,
                method: "GET"
            }),
            providesTags: ["Character"]
        }),
        cdet: builder.query<IComics, number>({
            query: (id) => ({
                url: `/characters/${id}/comics?&ts=1&apikey=${
                    apiKEY}&hash=${hashKEY}`,
                method: "GET"
            }),
            providesTags: ["Comics"]
        }),
    })
});


