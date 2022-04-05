import React, { useEffect, useState } from 'react';
import { LineChart,BarChart, Line,XAxis,YAxis, Tooltip,Bar } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return (
        <div className='chart-style'>

           <div className='bg-cyan-100'> 
           <h3>Bar chart</h3>
               <BarChart width={400} height={450}data={data}key={data.id}margin={{right:3,left:3}}>
                <Bar stroke='#88d2ec' dataKey={'sell'}></Bar>
                <XAxis stroke={'green'} dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip></Tooltip>
                
            </BarChart></div>
           <div className='bg-indigo-300'>
               <h3>Line chart</h3>
                <LineChart width={400} height={450}data={data} key={data.id}>
                <Line stroke='#c39797' dataKey={'sell'}></Line>
                <Line stroke='#22773f' dataKey={'sell1'}></Line>
                <XAxis stroke={'green'} dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
                <Tooltip></Tooltip>

            </LineChart></div>
        </div>
    );
};

export default Dashboard;