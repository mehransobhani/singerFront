"use client"
import React from 'react';
import { useState, useEffect } from 'react';

export default function  Timer({timeStamp}:{timeStamp:number})
{
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const getTime = (timeStamp:number):void => {
        const time = timeStamp - Date.now();
        setHours(Math.floor((time / (1000 * 60 * 60))));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(timeStamp), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {seconds+" : "+minutes+" : "+ hours }
        </>
     );
};
