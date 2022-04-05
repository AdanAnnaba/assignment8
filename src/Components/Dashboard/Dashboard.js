import React, { useEffect, useState } from 'react';
import { LineChart, Line,XAxis,YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <LineChart width={400} height={450}data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;