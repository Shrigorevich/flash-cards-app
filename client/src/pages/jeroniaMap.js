import React, { useState, useEffect, useRef } from "react";
import { useCanvas } from "../hooks/useCanvas";
import { fromEvent } from "rxjs";
import { map, pairwise } from "rxjs/operators";

const JeroniaMap = (props) => {
    const [
        coordinates,
        setCoordinates,
        canvasRef,
        canvasWidth,
        canvasHeight,
    ] = useCanvas();

    const arr = [
        { x: 25, y: 25, width: 25, height: 25, name: "Smarkatch" },
        { x: 50, y: 50, width: 25, height: 25, name: "Hovaysa" },
        { x: 75, y: 75, width: 25, height: 25, name: "Paniker" },
    ];

    // const handleCanvasClick = (event) => {
    //     console.log("Click");
    //     // on each click get current mouse location
    //     //const currentCoord = { x: 25, y: 25 };

    //     //setCoordinates([...coordinates, currentCoord]);
    // };

    useEffect(() => {
        setCoordinates(arr);
    }, []);

    const handleCanvasClick = (event) => {
        calculate(event.clientX, event.clientY);
    };

    // const handleClearCanvas = (event) => {
    //     setCoordinates([]);
    // };

    const calculate = (x, y) => {
        const res = arr.filter((area) => {
            return (
                x > area.x &&
                x < area.x + area.width &&
                y > area.y &&
                y < area.y + area.height
            );
        });
        console.log(res);
    };

    return (
        <div className="canvas-wrapper">
            <canvas
                className="app-canvas"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                onClick={handleCanvasClick}
            />
        </div>
    );
};

export default JeroniaMap;
