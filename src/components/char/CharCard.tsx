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
            <aside className="ccard__card">
                <div className="ccard__title">
                    <h3>{char.name}</h3>
                </div>
                <img 
                    className="ccard__image"
                    alt={char.name}
                    src={`${char.thumbnail.path
                        }.${char.thumbnail.extension}`}
                />
                <button 
                    className="ccard__btn"
                    onClick={handleNav}
                >
                    Featured Comics
                </button>
            </aside>
        </React.Fragment>
    );
};

