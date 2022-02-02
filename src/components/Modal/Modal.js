import React from "react";
import "./Modal.css";

export const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={active ? "modal active" : "modal"}
            // onClick={() => {
            //     setActive(false);
            // }}
        >
            <div
                className={active ? "modalContent active" : "modalContent"}
                // onClick={(e) => e.stopPropagation()}
            >
                <div className="btnClose" onClick={() => {setActive(false)}}>&#10006;</div>
                {children}
            </div>
        </div>
    );
};
