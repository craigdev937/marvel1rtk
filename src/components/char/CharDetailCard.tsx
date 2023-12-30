import React from "react";
import { ICharDetail } from "../../models/Interfaces";

type DET = {
    cd: ICharDetail
};

export const CharDetailCard = ({ cd }: DET) => {
    return (
        <React.Fragment>
            <h1>{cd.title}</h1>
            <img 
                alt={cd.title}
                src={`${cd.thumbnail.path
                }.${cd.thumbnail.extension}`}  
            />
            <p>{cd.description}</p>
        </React.Fragment>
    );
};

