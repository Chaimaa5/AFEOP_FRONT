import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Axios from "../../api/axios";

const RegimeChart = () => {
  const [chartData, setChartData] = useState({
    categories: [],
    series: [],
  });
  
  useEffect(() => {
    Axios.get('regimes/chart/').then((response) => {
        console.log(response.data);
        setChartData(response.data);
    }
    ).catch((error) => {
        console.error('Error fetching data:', error);
    });
}
, []);

const regimeMap: Record<number, string> = {
  1: "Transitional",
  2: "Water Limited",
  3: "Energy Limited"
};
  const options = {
   
    chart: {
      type: "bar",
      height: 180,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: chartData.categories,
    },
    yaxis: {
      title: { text: "Counts" },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number, { seriesIndex, w }) {
          const label = w.config.series[seriesIndex].name;
    
          if (label === "Dominant Regime") {
            return `${regimeMap[val] || "Unknown"}`;
          }
          return ` ${val}`;
        }
      }
    },
    colors: ["#FFB200","#3b82f6"],
  };


  return (
    <Card className="bg-bg  flex justify-center items-center dark:bg-blue-900/20 shadow-none border-grey-100 border-1 h-[100%]">
      <CardHeader className="p-3  flex justify-center items-center">
      Variability of breakpoints over Africa


        </CardHeader>
                        <CardBody className="flex  justify-center items-center p-4">
      <Chart options={options}         series={chartData.series}
 type="bar" height={180} width={500}/>
      </CardBody>
    </Card>
  );
};

export default RegimeChart;
