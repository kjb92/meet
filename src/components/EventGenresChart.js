import { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  ResponsiveContainer
} from 'recharts';

const EventGenresChart = ({ events }) => {
  //Create a state that holds the chart data
  const [data, setData] = useState([]);

  //Occuring genres
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  //Call the getData function every time the list of "events" updates
  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  //Function to generate the chart data
  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    });

    return data;
  };

  //Customized label
  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}           
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;