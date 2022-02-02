import React from "react";
import { useEffect, useState, Children, cloneElement } from "react";
import "./Slider.css";

const PAGE_WIDTH = 1024;

export const Slider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        let touchSimulator = touchStart - touchEnd;
        let touchDuration = PAGE_WIDTH * 0.3;

        if (touchStart !== touchEnd) {
            if (Math.abs(touchSimulator) > touchDuration) {
                if (touchStart < touchEnd) {
                    setOffset((currentOffset) => {
                        const newOffset = currentOffset + PAGE_WIDTH;
                        return Math.min(newOffset, 0);
                    });
                } else if (touchStart > touchEnd) {
                    setOffset((currentOffset) => {
                        const newOffset = currentOffset - PAGE_WIDTH;
                        const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
                        return Math.max(newOffset, maxOffset);
                    });
                }
            }
        }
    };

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );
    }, []);

    return (
        <div className="main-container">
            <div className="window">
                <div
                    className="all-pages-container"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
        </div>
    );
};
