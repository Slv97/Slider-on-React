import "./App.css";
import React from "react";
import { Slider } from "./components/Slider/Slider";
import { HomePage } from "./components/HomePage/HomePage";
import { InformationPage } from "./components/InformationPage/InformationPage";

function App() {
    return (
        <Slider>
            <div className="item item-1"> <HomePage /> </div>
            <div className="item item-2"> <InformationPage /> </div>
            <div className="item item-3">3</div>
        </Slider>
    );
}

export default App;
