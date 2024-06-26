import React from 'react';
import html2canvas from 'html2canvas';

const ExportButton = ({ elementId }) => {
  const exportChart = () => {
    html2canvas(document.getElementById(elementId)).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'chart.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return <button onClick={exportChart}>Export Chart</button>;
};

export default ExportButton;