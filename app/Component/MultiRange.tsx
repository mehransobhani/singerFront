import React, { useCallback, useEffect, useState, useRef } from "react";

interface MultiRangeSliderProps {
    min: number;
    max: number;
}

export  default  function  MultiRange({ min, max }:MultiRangeSliderProps) {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<number>(min);
    const maxValRef = useRef<number>(max);
    const range = useRef<HTMLDivElement | null>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className="flex items-center justify-center bg-black" style={{direction: "ltr"}}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={event => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="absolute w-48 h-0 z-30 outline-none"
                style={{zIndex: minVal > max - 100 ? "5" : undefined}}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={event => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="absolute w-48 h-0 z-40 outline-none"
            />
            <div className="relative w-48">
                <div className="absolute bg-gray-400 rounded w-full h-1 z-10"></div>
                <div ref={range} className="absolute bg-rose-500 rounded z-20 h-[5px]"></div>
                <div className="absolute text-black text-xs mt-2 left-1.5">{minVal}</div>
                <div className="absolute text-black text-xs mt-2 right-1">{maxVal}</div>
            </div>
        </div>
    );
};
