import React from "react";

export const Filter = ({ filter }) => {
    return (
        <div>
            <label>
                <p>Find contacts by name:</p>
                <input className="input" onChange={filter} type="text"></input>
            </label>
        </div>
    );
};

export default Filter;