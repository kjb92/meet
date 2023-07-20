import { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  //Create a state that holds the chart data
  const [data, setData] = useState([]);

  //Call the getData function every time the list of "events" updates
  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  //Function to generate the chart data
  const getData = () => {
    const data = allLocations.map((location) => {
    const count = events.filter((event) => event.location === location).length
      const city = location.split((/, | - /))[0] //Regex to split by either comma or hyphen
      return { count, city };
    })
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14 }}/>
        <YAxis type="number" dataKey="count" name="Number of Events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="An event" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;