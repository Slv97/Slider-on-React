import React from "react";
import "./HomePage.css";
import { GoHome } from "../common/GoHome/GoHome";
import { TextMiddle } from "../common/TextMiddle/TextMiddle";

export const HomePage = (props) => {
    return (
        <div className="homePage">
            <div className="textWrapper">
                <GoHome />
            </div>
            <TextMiddle text="Привет," />
            <div className="homeWrapper">
                <div className="textLarge">
                    ЭТО <b>НЕ</b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                </div>
                <div className="homeBtnWrapper">
                    <button className="btn">
                        <div className="btnIcon">
                            <div className="arrowRight"></div>
                        </div>
                        <div>Что дальше?</div>
                    </button>
                </div>
            </div>
            <div className="logo"></div>

            <div className="Layer7"></div>
            <div className="Layer5"></div>
            <div className="Layer4two"></div>
            <div className="pinkSperm1"></div>
            <div className="Layer8"></div>
            <div className="Layer5two"></div>
            <div className="Layer4"></div>
            <div className="pinkSperm2"></div>
            <div className="Layer5three"></div>
        </div>
    );
};
