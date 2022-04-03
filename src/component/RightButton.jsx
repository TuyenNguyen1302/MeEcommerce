import React from "react";

export default function RightButton(property){
    let { onClick } = property;
    return(
        <button onClick={onClick} className="right-btn middle">
            <i className="fa-solid fa-angle-right"></i>
        </button>
    );
}