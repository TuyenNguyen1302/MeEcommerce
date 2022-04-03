import React from "react";

export default function LeftButton(property){
    let { onClick } = property;
    return(
        <button onClick={onClick} className="left-btn middle">
            <i className="fa-solid fa-angle-left"></i>
        </button>
    );
}