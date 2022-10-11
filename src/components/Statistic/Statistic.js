import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistic = ({stat}) => {

    console.log(stat);
    const {total} = stat;

    return (
        <div>
            <LineChart width={500} height={400} data={total}>
            <Line type="monotone" dataKey={total} stroke="#82ca9d" />
            <XAxis dataKey="total" />
          <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistic;