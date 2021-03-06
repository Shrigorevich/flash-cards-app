import React, { useState, useEffect, useRef } from "react";
// Path2D for a Heart SVG
// const heartSVG =
//     "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
// const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * 0.8;
export const canvasHeight = window.innerHeight * 0.8;

export function draw(ctx, coords) {
    console.log("draw");
    ctx.fillRect(coords.x, coords.y, 30, 30);
    // ctx.fillStyle = "red";
    // ctx.shadowColor = "blue";
    // ctx.shadowBlur = 15;
    // ctx.save();
    // ctx.scale(SCALE, SCALE);
    // ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    // ctx.rotate((225 * Math.PI) / 180);
    // ctx.fill(SVG_PATH);
    // .restore(): Canvas 2D API restores the most recently saved canvas state
    //ctx.restore();
}

export function useCanvas() {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        console.log("Use Effect");
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        coordinates.forEach((coordinate) => {
            draw(ctx, coordinate);
        });
    });

    return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
}
