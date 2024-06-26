import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponent = ({ data, onPointClick }) => {
  const handleClick = (data) => {
    if (data && data.activePayload && data.activePayload.length > 0) {
      onPointClick(data.activePayload[0].payload);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} onClick={handleClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;