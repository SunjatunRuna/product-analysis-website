import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
    return (
        <div className='container row'>
            <div className='col-lg-6'>
            <LineChart width={500} height={500} data={data}>
                <Line dataKey={"investment"} stroke="#8884d8"></Line>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis></YAxis>
            </LineChart>
            </div>
            <div className='col-lg-6'>
                <BarChart width={500} height={500} data={data}>
                    <Bar dataKey={"revenue"} fill="#8884d8"></Bar>
                    <XAxis dataKey={"sell"}></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;