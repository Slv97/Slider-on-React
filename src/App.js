import "./App.css";
import React from "react";
import { Slider } from "./components/Slider/Slider";

function App() {
    return (
        <Slider>
            <div className="item item-1">1</div>
            <div className="item item-2">2</div>
            <div className="item item-3">3</div>
        </Slider>
    );
}

export default App;
