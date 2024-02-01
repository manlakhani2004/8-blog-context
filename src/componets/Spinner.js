import React from "react";
import './Spinner.css';

function Spinner() {
    return (
        <div className="container">
        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h2>Loading</h2>
        </div>
    )
}

export default Spinner