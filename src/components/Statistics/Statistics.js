import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    //     const stats = useLoaderData().data;
    // console.log(stats);

    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const statDatas = data.data.data;
                // console.log(statDatas);

                const statsData = statDatas.map(statData => {
                    const singleStat = {
                        name: statData.name,
                        quiz: statData.total
                    }
                    // console.log(statData.total);
                    return singleStat;
                })
                // console.log(statsData);
                setStats(statsData);
            });
    }, [])

    return (
        <div className='mt-5 d-flex justify-content-center'>

            <BarChart width={800} height={600} data={stats}>
                <Bar type="monotone" dataKey="quiz" fill="#FF7BBD" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default Statistics;