import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let colors = {
    'red': '#FFB6C1',
    'orange': '#FFDAB9',
    'yellow': '#FFFFE0',
    'green': '#90EE90',
    'blue': '#87CEFA',
    'indigo': '#DA70D6',
    'violet': '#EE82EE'
};

export default function ShowStats(props){
    // Returns a graph associated with a single stat
    const viewModel = props.viewModel;
    var stat = props.stat;
    const data = viewModel.getData();
    
    if (stat === null || stat === 0 || data === null) {
        return (<></>)
    }    

    if(!Array.isArray(stat)){
        stat = [stat];
    }

    return (
        <div className='flex flex-col'>
            <p className='text-3xl font-bold'>{stat}</p>

            {data.length}
            <div className='w-[500px] h-[400px] m-2 p-2 bg-white rounded-md'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend layout='vertical' align='left' verticalAlign='middle'/>

                    {
                    stat.map((s, i) => {
                        return (
                            <Line type="monotone" dataKey={s} stroke={colors[i]} activeDot={{ r: 8 }} />
                        )
                    })
                    }
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )

}