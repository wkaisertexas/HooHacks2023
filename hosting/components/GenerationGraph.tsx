import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

export default function GenerationGraph(props) {
    const [chartData, setChartData] = useState({});

    const fetchData = async () => {
        const response = await fetch('public/total_production.json');
        const data = await response.json();

        const labels = Object.keys(data[0]);
        labels.splice(labels.indexOf('year'), 1);

        const chartData = {
            labels: "Production by Source (MWh) over Time",
            datasets: [
                labels.map((label) => (
                    {
                        label: label,
                        data: data.map((year) => year[label]),
                        fill: false,
                        backgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgba(75, 192, 192, 0.2)',
                    }
                ))
            ],
        };
        setChartData(chartData);
    }

    useEffect(() => {
        fetchData();
      }, []);

    if (chartData == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <Line data={chartData} options={{responsive: true}} />
        </div>
    )
}