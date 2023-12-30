import React from "react";
import { useParams } from "react-router-dom";
import { MarvelAPI } from "../../global/MarvelAPI";
import { CharDetailCard } from "../../components/char/CharDetailCard";

export const CharDetail = () => {
    const { id } = useParams();
    const comicID = id !== undefined ? Number(id) : 0;
    const { isLoading, error, data } = 
    MarvelAPI.useCdetQuery(comicID);

    const CharData = data && data.data.results;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            {CharData!.map((cd) => (
                <CharDetailCard key={cd.id} cd={cd} />
            ))}
        </React.Fragment>
    );
};



