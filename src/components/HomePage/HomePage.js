import React from "react";
import "./HomePage.css";
import { GoHome } from "../common/GoHome/GoHome";
import { TextMiddle } from "../common/TextMiddle/TextMiddle";
import { TextLarge } from "../common/TextLarge/TextLarge";
import { Button } from "../common/Button/Button";
import { useState } from "react";

export const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textWrapper">
                <GoHome />
            </div>
            <TextMiddle text="Привет," />
            <div className="homeWrapper">
                <TextLarge
                    text={
                        <p>
                            ЭТО <b>НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                        </p>
                    }
                />
                <div className="homeBtnWrapper">
                    <Button text="Что дальше?" icon="arrowRight" />
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
