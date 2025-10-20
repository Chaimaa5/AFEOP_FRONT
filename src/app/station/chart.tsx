// Chart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./index.scss"
// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

const Chart = (props: any) => {
  const { chartData, title, format } = props;
  const chartOptions = {
    series: [{
        name: title,
        data: chartData.values
    }],
    chart: {
        type: 'area',
        group: 'syncedGroup', // Ensures charts are synchronized
        zoom: {
          enabled: false, // Enables synchronized zoom
        },
    },
    colors: ['#008FFB'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: chartData.dates,
        min: new Date(chartData.dates[1]).getTime(),
        max: new Date(chartData.dates[chartData.dates.length - 1]).getTime(),
        labels: {
          formatter: (value, timestamp, opts) => {
              const formattedTime = opts.dateFormatter(new Date(timestamp), format);
              if (format === "dd MMM HH") {
                return `${formattedTime} H`; 
              }
              return formattedTime; 
          }
      }
    },
    tooltip: {
        x: {
            format: format
        }
    },
    title: {
        text: title,
        align: 'left',
        style: {
            fontSize: "16px",
            color: '#666'
        }
    }
  };

  return (
    <div className='chart-container font-poppins text-black'>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="area" height="50%" />
    </div>
  );
};

export default Chart;
