import React from 'react';

const TimeframeSelector = ({ setTimeframe }) => {
  return (
    <div>
      <button onClick={() => setTimeframe('daily')}>Daily</button>
      <button onClick={() => setTimeframe('weekly')}>Weekly</button>
      <button onClick={() => setTimeframe('monthly')}>Monthly</button>
    </div>
  );
};

export default TimeframeSelector;
