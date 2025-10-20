import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function BrushCharts() {
  const [selection, setSelection] = useState(null);

  const data = [...Array(100)].map((_, i) => ({
    x: new Date().getTime() + i * 3600 * 1000,
    y: Math.floor(Math.random() * 100),
  }));

  const commonSeries = [{ name: 'Data', data }];

  return (
    <div className="flex flex-col gap-6">
      {/* Main Chart */}
      <Chart
        options={{
          chart: {
            id: 'main-chart',
            type: 'area',
            height: 100,
            toolbar: { autoSelected: 'zoom', show: false },
            zoom: { enabled: false },
          },
          dataLabels: { enabled: false },
          stroke: { curve: 'smooth' },
          xaxis: { type: 'datetime' },
          tooltip: { shared: true },
        }}
        series={commonSeries}
        type="area"
        height={100}
      />

      {/* Brush Chart */}
      <Chart
        options={{
          chart: {
            id: 'brush-chart',
            height: 130,
            type: 'area',
            brush: { target: 'main-chart', enabled: true },
            selection: {
              enabled: true,
              xaxis: {
                min: data[10].x,
                max: data[30].x,
              },
            },
          },
          colors: ['#ccc'],
          fill: { type: 'gradient', gradient: { opacityFrom: 0.91, opacityTo: 0.1 } },
          xaxis: { type: 'datetime', tooltip: { enabled: false } },
          yaxis: { tickAmount: 2 },
        }}
        series={commonSeries}
        type="area"
        height={130}
      />
    </div>
  );
}
