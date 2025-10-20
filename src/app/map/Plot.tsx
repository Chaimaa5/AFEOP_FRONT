import React from 'react';
import Plot from 'react-plotly.js';

const MyPlot: React.FC = () => {
  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3, 4], y: [12, 18, 19, 23] },
        ]}
        layout={{ width: 640, height: 480, title: 'My Plot' }}
      />
    </div>
  );
};

export default MyPlot;
