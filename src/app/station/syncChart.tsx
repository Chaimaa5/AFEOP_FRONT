import React from 'react';
import ReactApexChart from 'react-apexcharts';

type SeriesData = {
  data: { x: number; y: number }[];
};

type ChartOptions = {
  chart: {
    id: string;
    group: string;
    type: 'line' | 'area';
    height: number;
    width?: number;
  };
  colors: string[];
};

interface ApexChartState {
  series: SeriesData[];
  options: ChartOptions;
  seriesLine2: SeriesData[];
  optionsLine2: ChartOptions;
  seriesArea: SeriesData[];
  optionsArea: ChartOptions;

}

class ApexChart extends React.Component<{}, ApexChartState> {
  constructor(props: {}) {
    super(props);

    // Generate dummy time series data
    const generateDayWiseTimeSeries = (startTimestamp: number, count: number, range: { min: number; max: number }) => {
      const series: { x: number; y: number }[] = [];
      let x = startTimestamp;
      for (let i = 0; i < count; i++) {
        const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        series.push({ x, y });
        x += 86400000; // Advance by one day
      }
      return series;
    };

    this.state = {
      series: [
        { data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 60 }) },
      ],
      options: {
        chart: { id: 'fb', group: 'social', type: 'line', height: 160 },
        colors: ['#008FFB'],
      },
      seriesLine2: [
        { data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 30 }) },
      ],
      optionsLine2: {
        chart: { id: 'tw', group: 'social', type: 'line', height: 160 },
        colors: ['#546E7A'],
      },
     
    
    };
  }

  render() {
    return (
      <div>
        {/* <div id="wrapper">
          <div id="chart-line"> */}
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="80%"
            />
          {/* </div>
          <div id="chart-line2"> */}
            <ReactApexChart
              options={this.state.optionsLine2}
              series={this.state.seriesLine2}
              type="line"
              height="80%"
            />
          {/* </div>
       
        </div> */}
      </div>
    );
  }
}

export default ApexChart;
