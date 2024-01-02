import React from "react";
import "./Comics.css";
import { useParams } from "react-router-dom";
import { MarvelAPI } from "../../global/MarvelAPI";

export const Comics = () => {
    const { error, isLoading, data } = 
        MarvelAPI.useComQuery();
    const ComicData = data?.data.results;
    
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
            <h1>Comics</h1>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <React.Fragment>
                    {ComicData && ComicData.map((comic) => (
                        <aside key={comic.id}>
                            <h1>{comic.title}</h1>
                            <a href={comic.urls[0].url} target="_blank">
                               <p>{comic.urls[0].type}</p> <button>{comic.title}</button>
                            </a>
                        </aside>
                    ))}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};


