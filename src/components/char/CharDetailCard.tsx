import React from "react";
import "./CharDetailCard.css";
import { ICharDetail } from "../../models/Interfaces";

type DET = {
    cd: ICharDetail
};

export const CharDetailCard = ({ cd }: DET) => {
    return (
        <React.Fragment>
            <section className="det__grid">
                <aside className="det__card">
                    <h1 className="det__title">{cd.title}</h1>
                    <p className="det__desc">{cd.description}</p>
                    <img 
                        className="det__img"
                        alt={cd.title}
                        src={`${cd.thumbnail.path
                        }.${cd.thumbnail.extension}`}  
                    />
                </aside>
            </section>
        </React.Fragment>
    );
};


