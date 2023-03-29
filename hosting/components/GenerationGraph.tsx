import React, {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import energyProd from './data/production';

// give me a pastel color palette
const colors = {
    'red': '#FFB6C1',
    'orange': '#FFDAB9',
    'yellow': '#FFFFE0',
    'green': '#90EE90',
    'blue': '#87CEFA',
    'indigo': '#DA70D6',
    'violet': '#EE82EE'
}

export default function GenerationGraph() {
    const [chartData, setChartData] = useState({});

    const fetchData = async () => {
        const data = await energyProd;        
        setChartData(data);
    }

    useEffect(() => {
        fetchData();
      }, [chartData]);

    if (chartData == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    return (
        <div className='w-[800px] h-[800px] bg-slate-500 p-2 m-2 rounded-md'>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={chartData}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0,3_000]}/>
                <Tooltip />
                <Legend align="right"/>
                <Line type="monotone" dataKey="coal" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="petroleum and other" stroke={colors['blue']} />
                <Line type="monotone" dataKey="natural gas" stroke={colors['green']}/>
                <Line type="monotone" dataKey="nuclear" stroke={colors['yellow']}/>
                <Line type="monotone" dataKey="biomass" stroke={colors['indigo']}/>
                <Line type="monotone" dataKey="wind" stroke={colors['red']}/>
                <Line type="monotone" dataKey="solar" stroke={colors['violet']}/>
                <Line type="monotone" dataKey="hydroelectric" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}