import React from 'react'
import './index.css'
import { CartesianGrid, Legend, Line, LineChart, PieChart,Pie ,Cell , Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { date: '6/30/2024', orders: 4, sales: 1404 },
  { date: '7/7/2024', orders: 3, sales: 1200 },
  { date: '7/14/2024', orders: 2, sales: 800 },
  { date: '7/21/2024', orders: 2, sales: 500 },
];

const COLORS = ['#2cded5','#fa7e7e']
const dataTwo = [
  { name: 'WooCommerce Store', value: 44.2 },
  { name: 'Shopify Store', value: 55.8 },
];

console.log(data[0].date)
console.log(dataTwo[0].name)
function Dashboard() {

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
          {/* SVG Path to create the line with a dot */}
          <svg width="30" height="10" style={{ marginRight: 5 }}>
            <line
              x1="0"
              y1="5"
              x2="30"
              y2="5"
              stroke={entry.color}
              strokeWidth="2"
            />
            <circle
              cx="15"
              cy="5"
              r="3"
              fill={entry.color}
            />
          </svg>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
    );
  };
  const RADIAN = Math.PI / 180;
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div className='dashbaord-page'>
      <h1>Dashboard</h1>
      <div className='charts-container'>
        <div className='linechart-container'>
            <h4>Sales vs Orders</h4>
            <LineChart height={300} width={400} data={data}>
                <XAxis dataKey='date' />
                <YAxis yAxisId='left' />
                <YAxis yAxisId='right' orientation='right' />
                <CartesianGrid strokeDasharray='2 2' />
                <Tooltip />
                <Legend verticalAlign='top' content={CustomLegend} />
                <Line stroke={COLORS[0]} type='monotone' yAxisId='left' dataKey='sales' />
                <Line stroke={COLORS[1]} type='monotone' yAxisId='right' dataKey='orders' />
            </LineChart>
        </div>
        <div className='piecahrt-container'>
          <h4>Portion of Sales</h4>
          <PieChart width={400} height={400}>
            <Pie
              data={dataTwo}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              dataKey="value"
              label={renderCustomLabel}
              >
              {dataTwo.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
              <Tooltip />
              <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  )
}

export default Dashboard