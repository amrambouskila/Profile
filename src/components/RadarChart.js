import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import './RadarChart.css';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const skill_tree_data = {
    labels: ['Virtues', 'Habits', 'Education', 'Finance', 'Health', 'Relationships', 'Communication', 'Judaism', 'Projects', 'Music', 'Martial Arts', 'Sports', 'Games'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 5, 7, 6, 6, 6, 6, 6, 6, 6, 8, 6, 6]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 7, 8, 6, 3, 6, 6, 6, 6, 6, 9, 6, 6]
        },

    ]
};

const education_data = {
    labels: ['Mathematics', 'Physics', 'Biochemistry', 'Computer Science', 'History'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 5, 7, 6, 6]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 7, 8, 6, 3]
        },

    ]
};

const martial_arts_data = {
    labels: ['Wrestling', 'Boxing', 'Kickboxing', 'Brazilian Jiu Jitsu', 'Judo'],
    datasets: [
        {
            label: '2023',
            backgroundColor: 'rgba(169,74,11,0.2)',
            borderColor: 'rgb(213,69,11)',
            pointBackgroundColor: 'rgb(203,97,14)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(208,72,10)',
            data: [4, 5, 7, 6, 6]
        },
        {
            label: '2024',
            backgroundColor: 'rgba(101,10,196,0.2)',
            borderColor: 'rgb(60,22,94)',
            pointBackgroundColor: 'rgb(80,42,138)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(130,35,231)',
            data: [6, 7, 8, 6, 3]
        },

    ]
};

const datasetsConfig = {
    'Education': education_data,
    'Martial Arts': martial_arts_data,
    // Add other datasets for other labels if needed
};

const RadarChart = () => {
    const [data, setData] = useState(skill_tree_data);
    const [isDrillDown, setIsDrillDown] = useState(false);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            r: {
                min: 1,
                max: 10,
                ticks: {
                    stepSize: 1
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const clickedElementIndex = elements[0].index;
                const label = data.labels[clickedElementIndex];
                const newDataSet = datasetsConfig[label];
                if (newDataSet) {
                    setData(newDataSet);
                    setIsDrillDown(true);
                }
            }
        },
        // other options
    };

    const handleBackClick = () => {
        setData(skill_tree_data); // Reset data to the initial dataset
        setIsDrillDown(false); // We are no longer in a drill-down view
    };

    return (
        <div className="chart-container">
            <Radar data={data} options={options} className="canvas"/>
            {isDrillDown && (
                // <button className="back-button" onClick={handleBackClick} aria-label="Back"></button>
                <button className="back-button" onClick={handleBackClick} aria-label="Back">
                    <svg width="40" height="40">
                        <path d="M 0 0 C 20 10, 20 30, 0 40" fill="transparent" stroke="rgba(128, 128, 128, 0.7)" stroke-width="8"/>
                    </svg>
                </button>
    )
}
</div>
)
    ;
};

export default RadarChart;
