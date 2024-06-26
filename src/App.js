import React, { useEffect, useState } from 'react';
import ChartComponent from './components/ChartComponent';
import TimeframeSelector from './components/TimeframeSelector';
import ExportButton from './components/ExportButton';
import DetailsModal from './components/DetailsModal';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const formatData = () => {
    if (timeframe === 'daily') {
      return data;
    } else if (timeframe === 'weekly') {
      return aggregateData(data, 'week');
    } else if (timeframe === 'monthly') {
      return aggregateData(data, 'month');
    }
    return data;
  };

  const aggregateData = (data, period) => {
    const aggregatedData = [];
    const dateMap = new Map();

    data.forEach((item) => {
      const date = new Date(item.timestamp);
      let periodKey;

      if (period === 'week') {
        const week = getWeekNumber(date);
        periodKey = `${date.getFullYear()}-W${week}`;
      } else if (period === 'month') {
        periodKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      }

      if (!dateMap.has(periodKey)) {
        dateMap.set(periodKey, { timestamp: periodKey, value: 0, count: 0 });
      }

      const periodData = dateMap.get(periodKey);
      periodData.value += item.value;
      periodData.count += 1;
      dateMap.set(periodKey, periodData);
    });

    dateMap.forEach((value, key) => {
      aggregatedData.push({
        timestamp: key,
        value: value.value / value.count,
      });
    });

    return aggregatedData;
  };

  const getWeekNumber = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - startOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const handlePointClick = (dataPoint) => {
    setSelectedDataPoint(dataPoint);
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Chart App</h1>
      </header>
      <TimeframeSelector setTimeframe={setTimeframe} />
      <ExportButton elementId="chart" />
      <div id="chart">
        <ChartComponent data={formatData()} onPointClick={handlePointClick} />
      </div>
      <DetailsModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        dataPoint={selectedDataPoint}
      />
    </div>
  );
}

export default App;
