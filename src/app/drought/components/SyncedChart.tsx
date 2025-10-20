import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Axios from '../../api/axios';
import downloadIcn from '../../../assets/icons/downloadChart.svg';
import zoomInIcn from '../../../assets/icons/zoomIn.svg';
import zoomOutIcn from '../../../assets/icons/zoomOut.svg';
import searchIcn from '../../../assets/icons/search.svg';
import panIcn from '../../../assets/icons/pen-add.svg';
import houseIcn from '../../../assets/icons/house.svg';
type TimePoint = { date: string; mean: number };
type ProductSeries = { [product: string]: TimePoint[] };

export default function SyncedCharts() {
  const [series, setSeries] = useState<ProductSeries>({});
  const [loaded, setLoaded] = useState(false);

  const mapSeries = (key: string) => {
    const data = series[key];
    return Array.isArray(data)
      ? data.map((point) => ({
          x: new Date(point.date),
          y: point.mean,
        }))
      : [];
  };

  const AD = mapSeries('AD');
  const ZNDVI = mapSeries('ZNDVI');
  const HD = mapSeries('HD');
  const MD = mapSeries('MD');

  useEffect(() => {
    Axios.get('drought/mean/')
      .then((response) => {
        setSeries(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoaded(true);
      });
  }, []);

  const getChartOptions = (id: string, color: string) => ({
    chart: {
      id,
      group: 'synced',
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          reset: `<img src="${houseIcn}" width="100%" />`, 
          download: `<img src="${downloadIcn}" width="20" />`, 
          selection: `<img src="${zoomOutIcn}" width="100%" />`, 
          zoom:`<img src="${searchIcn}" width="100%" height="100%" />`, 
          zoomin: `<img src="${zoomInIcn}" width="100%" height="100%"/>`, 
          zoomout: `<img src="${zoomOutIcn}" width="100%" height="100%" />`, 
          pan:`<img src="${panIcn}" width="100%" />`, 
          customIcons: []
        },
      },
      
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      marker: {
        show: true,
        fillColors: [color], 
      },
    },
    colors: [color],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    legend: {
      show: true,
      labels: {
        useSeriesColors: true, // still needed
      },
      markers: {
        fillColors: [color], // 🎯 force legend marker to match line color
      }
    },

  // },

      });

  const renderChart = (data: any[], label: string, color: string, id: string) => {
    if (!loaded) {
      return <p className="text-sm text-gray-400 text-center">Loading...</p>;
    }

    return data.length > 0 ? (
      <Chart
        options={getChartOptions(id, color)}
        series={[{ name: label, data, color }]}
        type="line"
        height={130}
      />
    ) : (
      <p className="text-sm text-gray-500 text-center">No data for {label}</p>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-8">
      {renderChart(AD, 'Soil Moisture (AD)', '#0ea5e9', 'chart-ad')}
      {renderChart(ZNDVI, 'NDVI (ZNDVI)', '#10b981', 'chart-zndvi')}
      {renderChart(HD, 'Precipitation (HD)', '#4B0082', 'chart-hd')}
      {renderChart(MD, 'GRACE (MD)', '#f59e0b', 'chart-md')}
    </div>
  );
}
