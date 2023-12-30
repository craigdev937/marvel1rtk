import React from "react";
import "./CharCard.css";
import { useNavigate } from "react-router-dom";
import { IChar } from "../../models/Interfaces";

type CHA = {
    char: IChar
};

export const CharCard = ({char}: CHA) => {
    const navigate = useNavigate();

    const handleNav = () => {
        navigate(`/char/${char.id}`);
    };

    return (
        <React.Fragment>
            <section>
                <img 
                    alt={char.name}
                    src={`${char.thumbnail.path
                        }.${char.thumbnail.extension}`}
                    onClick={handleNav}
                />
                <div className="title">
                    <h3>{char.name}</h3>
                </div>
            </section>
        </React.Fragment>
    );
};

