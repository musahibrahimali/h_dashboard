'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const GaugeChart = () => {
    const data = {
    labels:[],
    datasets: [
            {
                data: [6, 3],
                backgroundColor: ['#2b4dbd', '#e6e3e3'],
                borderColor: ['#2b4dbd', '#e6e3e3'],
                circumference: 180,
                rotation: 270,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 50,
        rotation: Math.PI,
        circumference: Math.PI,
        legend: { display: false },
        tooltips: { enabled: false },
        elements: {
        arc: {
                borderWidth: 0,
            },
        },
    };


    return <Doughnut 
        data={data} 
        options={options}
    />;
};

export default GaugeChart;
