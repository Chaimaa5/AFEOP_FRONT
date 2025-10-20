import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import durum from "../../assets/images/cereal/5.png"
import soft from "../../assets/images/cereal/1.png"
import barley from "../../assets/images/cereal/4.png"
import total from "../../assets/images/cereal/2.png"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { yearlyData } from './data';
interface Product {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}



const YieldChart = ({ product }: Product) => {
    // const forecastDate = useSelector((state: RootState) => state.forecast.forecastDate);
    const productId = useSelector((state: RootState) => state.forecast.productId);
    const [selectedYear, setSelectedYear] = useState('2021');
    const [chartSeries, setChartSeries] = useState([]);

    useEffect(() => {
        updateSeries(selectedYear);
    }, [productId, selectedYear]);

    const updateSeries = (year) => {
        const data = seriesData[productId] || [];
        const filteredData = data.map(series => ({
            ...series,
            data: series.data.filter(point => year ? point.x === year : true)
        })).filter(series => series.data.length > 0);

        setChartSeries(filteredData);
    };
    const chartOptions = {

        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        colors: ['#94A74A', '#204E51'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Reported by ONCIL (Million Quintals)', 'Forecasted in March (Million Quintals)'],
            markers: {
                fillColors: ['#94A74A', '#204E51']
            }
        }
    };
    const yearlyOptions = {
        chart: { height: 350, type: 'bar' },
        plotOptions: { bar: { dataLabels: { position: 'top' } } },
        dataLabels: { enabled: true },
        xaxis: {
            type: 'category', categories: [
                'Soft wheat',
                'Durum wheat',
                'Barley',
                'total',
                // 'Meetings'
            ],
        },
        yaxis: { title: { text: 'Million Quintals' } },
        colors: ['#204E51', '#94A74A'],
        legend: { show: true },
        tooltip: { shared: true, intersect: false }
    };

    const pieChartData = {
        '2021': {
            reported: [18.9, 8.1, 7],  // Total or some other representative value for each product
            forecasted: [17.83, 8.49, 8.25]
        },
        '2022': {
            reported: [29.7, 11.7, 13.5],
            forecasted: [25.5, 13.6, 12.5]
        },
        '2023': {
            reported: [17.5, 7.1, 6.6],
            forecasted: [15.36, 6.9, 5.4]
        }
    };
    const pieOptions = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Soft Wheat', 'Durum Wheat', 'Barley'],

        colors: ['#204E51', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
            type: 'image',
            opacity: 0.85,
            image: {
                src: [durum, soft, barley],
                width: 25,
                imagedHeight: 25
            },
        },
        stroke: {
            width: 4
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#94A74A']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };



    const seriesData = {
        1: [
            {
                name: 'Reported by ONCIL (Million Quintals)',
                data: [
                    { x: '2021', y: 18.9, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 17.83, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2022', y: 29.7, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 25.5, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2023', y: 17.5, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 15.36, strokeHeight: 5, strokeColor: '#204E51' }] },
                ]
            }
        ],
        2: [
            {
                name: 'Reported by ONCIL (Million Quintals)',
                data: [
                    { x: '2021', y: 8.1, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 8.49, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2022', y: 11.7, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 13.6, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2023', y: 7.1, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 6.9, strokeHeight: 5, strokeColor: '#204E51' }] },
                ]
            }
        ],
        3: [
            {
                name: 'Reported by ONCIL (Million Quintals)',
                data: [
                    { x: '2021', y: 7, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 8.25, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2022', y: 13.5, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 12.5, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2023', y: 6.6, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 5.4, strokeHeight: 5, strokeColor: '#204E51' }] },
                ]
            }
        ],
        4: [
            {
                name: 'Reported by ONCIL (Million Quintals)',
                data: [
                    { x: '2021', y: 34, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 34.57, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2022', y: 54.9, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 51.6, strokeHeight: 5, strokeColor: '#204E51' }] },
                    { x: '2023', y: 31.2, goals: [{ name: 'Forecasted in March (Million Quintals)', value: 27.66, strokeHeight: 5, strokeColor: '#204E51' }] },
                ]
            }
        ]
    };

    const yearSeries = yearlyData[selectedYear];

    return (
        <div className='flex flex-col justify-center items-center w-[100%] h-full bg-bg p-8'>
            <h1 className="text-l font-normal my-2 "> Comparative Analysis of Reported vs. Forecasted {product.name} Yields</h1>
            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                <option value="">All Years</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            <div className='flex flex-col justify-center items-center'>

                <div className='flex'>

                    <ApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
                    {product.id === 4 &&

                        <ApexChart options={yearlyOptions} series={yearSeries} type="bar" height={350} width={500} />
                    }
                </div>
                {
                    product.id === 4 && (
                        <div className='flex justify-center items-center mt-4'>
                            {/* <div className='flex  justify-center items-center'>
                        <img src={total} alt="Total" className='w-[200px] h-[200px]' />
                        <p className='text-lg font-semibold'>Total</p>
                    </div> */}
                            <div className='flex flex-col  justify-center items-start'>


                                <h1 className="text-l font-normal my-2 ">  Forecasted  Yields</h1>
                                <ApexChart options={pieOptions} series={pieChartData[selectedYear]['forecasted']} type="pie" width={380} />

                            </div>
                            <div className='flex flex-col  justify-center items-start'>
                                <h1 className="text-l font-normal my-2 ">  Reported  Yields</h1>
                                <ApexChart options={pieOptions} series={pieChartData[selectedYear]['reported']} type="pie" width={380} />
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default YieldChart;
