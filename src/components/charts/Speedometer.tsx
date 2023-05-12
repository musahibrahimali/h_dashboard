'use client';
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const getRandomNumber = () => {
  return Math.random() * 100;
}

export const getData = () => {
    return [
        ["Label", "Value"],
        ["Level", getRandomNumber()],
    ];
}

export const options = {
    width: 600,
    height: 400,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 80,
    yellowTo: 90,
    minorTicks: 5,
};

const Speedometer = () => {
    const [data, setData] = useState(getData);

    useEffect(() => {
        const id = setInterval(() => {
        setData(getData());
        }, 3000);

        return () => {
            clearInterval(id);
        };
    });

    return (
        <Chart
            chartType="Gauge"
            width="100%"
            height="100%"
            data={data}
            options={options}
        />
    );
}

export default Speedometer;
