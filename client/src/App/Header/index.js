import React from 'react';
import NewEvent from "./NewEvent";
import "../styles/Header.css";

function Header(props) {
    return (
        <div className="header">
            <div className="titles">
                <div className="title">
                    <h1>Daily Framework</h1>
                </div>
            </div>
            <div>
                <NewEvent />
            </div>
        </div>
    )
}

export default Header;
