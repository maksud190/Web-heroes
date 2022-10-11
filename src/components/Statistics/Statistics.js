import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';

const Statistics = () => {

    const stats = useLoaderData().data;
console.log(stats);
    return (
        <div>
            {
                stats.map(stat=> <Statistic
                key={stat.id}
                stat={stat}
                ></Statistic>)
            }
        </div>
    );
};

export default Statistics;