import React from "react";

export const Filter = ({ filter }) => {
    return (
    <div>
        <p>Find contacts by name</p>
            <input
                className="input"
                type="text"
                onChange={filter}
            ></input>
        </div>
    );
};

export default Filter;