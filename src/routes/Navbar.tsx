import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    <h1>Marvel</h1>
                </Link>
                <aside 
                    className="navbar__icon" 
                    onClick={handleClick}
                >
                    {open ? <FiX /> : <FiMenu />}
                </aside>
                    <ul className={open ? 
                            "navbar__links active" : 
                            "navbar__links"}
                    >
                        <li className="navbar__item">
                            <Link 
                                to="/"
                                className="navbar__link"
                                onClick={closeMenu}
                            >
                                Characters
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link 
                                to="/char/:id"
                                className="navbar__link"
                                onClick={closeMenu}
                            >
                                Comics
                            </Link>
                        </li>
                    </ul>
                </nav>
            <Outlet />
        </React.Fragment>
    );
};



