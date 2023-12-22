import React from "react";
import "./Characters.css";
import { MarvelAPI } from "../../global/MarvelAPI";
import { CharCard } from "../../components/char/CharCard";

export const Characters = () => {
    const { error, isLoading, data } = 
    MarvelAPI.useCharQuery();
    const CharData = data && data.data.results;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            <h1>Characters</h1>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <aside className="char_container">
                   {CharData?.map((char) => (
                        <CharCard 
                            key={char.id} char={char} 
                        />
                   ))}
                </aside>
            )}
        </React.Fragment>
    );
};


