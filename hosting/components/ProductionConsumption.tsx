import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'

export default function PowerGraph(props) {
  const viewModel = props.viewModel;
  const data = viewModel.getProductionInfo();
  if (data == null || viewModel.showGraph == false) {
    return (
      <div className='p-2 m-2 border-black border-2 rounded-lg bg-amber-700' onClick={viewModel.toggleShowGraph}>
      <Image src='\chart.svg' width='60' height='60' alt='chart icon'/>
      </div>
      )
    }
    return (
      <div className='flex flex-col-reverse'>
      <div className='p-2 m-2 border-black w-fit border-2 rounded-lg bg-amber-700' onClick={viewModel.toggleShowGraph}>
      <Image src='\chart.svg' width='60' height='60' alt='chart icon'/>
      </div>
      
      <div className='w-[600px] h-[500px] flex flex-col bg-white rounded-md m-2 p-2'>
      
      <div>
      <p className='text-3xl font-bold'>Power Production</p>
      <p className='text-xl'>Manage your supply and demand throughout the day</p>
      <p className='text-2xl font-bold' onClick={viewModel.toggleShowGraph}>Close</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart
      width={500}
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend layout='vertical' align='left' verticalAlign='middle'/>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
      </div>
      </div>
      );
    }
    