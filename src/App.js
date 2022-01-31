import "./App.css";
import React from "react";
import { Slider } from "./components/Slider/Slider";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
    return (
        <Slider>
            {/* <HomePage className="item item-1"></HomePage> */}
            <div className="item item-1"> <HomePage /> </div>
            <div className="item item-2">2</div>
            <div className="item item-3">3</div>
        </Slider>
    );
}

export default App;
