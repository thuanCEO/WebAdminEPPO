import { BarElement, Tooltip, Legend, CategoryScale, Chart as ChartJS, LinearScale } from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { options, data } from './ConfigOption'

export default function Revenue() {

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        Tooltip,
        Legend,
    );
    return (
        <>
            <Bar
                data={data}
                options={options}
                style={{ padding: "10px" }}
            />
        </>
    )
}
