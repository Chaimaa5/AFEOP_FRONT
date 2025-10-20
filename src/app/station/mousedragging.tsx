import { useLocation } from "react-router-dom";
// import "./index.scss";
import { lazy, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image, DateRangePicker, Select, SelectItem, Button, DateValue, RangeValue, Checkbox, input } from "@nextui-org/react";
import Axios from "../api/axios";
import variables from "./variables";
import ReactApexChart from "react-apexcharts";
import "./index.scss"
import ChartSkelton from "./chartDrag";
import Chart from "./chart";
import Sidebar from "../sidebar";
import { Tooltip } from "@nextui-org/react";
import { HeartIcon } from "./heart";
import StationForm from "./stationForm";
import { useSelector } from "react-redux";
interface Stations {
    station_id: number;
    station_name: string;
}


interface MeasureVariable {
    id: number;
    variable_name: string;
}

interface ChartData {
    dates: any[];
    values: number[];
}


const Map = lazy(() => import("./stationMap"));

const Station = () => {
    const { pathname } = useLocation();
    const [stations, setStations] = useState<Stations[]>([]);
    const [measureVariable, setMeasureVariable] = useState<MeasureVariable[]>([]);
    const [station, setStation] = useState<string>("");
    const [variable, setVariable] = useState<string>("");
    const [period, setPeriod] = useState<RangeValue<DateValue>>();
    const chartData = useSelector((state:any)=>state.station.chartData)
    const stdDevData = useSelector((state:any)=>state.station.updateStdDevData)
    // const [chartData, setChartData] = useState<ChartData>({ dates: [], values: [] });
    // const [stdDevData, setstdDevData] = useState<ChartData>({ dates: [], values: [] });


    useEffect(() => {
        Axios.get("stations/").then((response) => {
            setStations(response.data);
        });

        Axios.get("stations/measures/").then((response) => {
            setMeasureVariable(response.data);
        });

    }, []);

    const handleStationChange = (e: any) => {
        setStation(e.target.value);
    }

    const handleVariableChange = (e: any) => {
        setVariable(e.target.value);
    }


    const [width, setWidth] = useState('100%'); // Start at full width
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseMove = (e) => {
        if (isResizing) {
            setWidth(`${window.innerWidth - e.clientX}px`); // Adjust width based on the distance from the right edge
        }
    };

    const handleMouseDown = () => {
        setIsResizing(true); // Start resizing on button click
    };

    const handleMouseUp = () => {
        setIsResizing(false); // Stop resizing
    };




    const clearAll = () => {
        setStation("");
        setVariable("");
        setPeriod(undefined); // Resetting `period` to `undefined` or its initial state
        // setChartData({ dates: [], values: [] });
        // setstdDevData({ dates: [], values: [] });
    };

 
    return (
        <>

            {(pathname === '/station') && (
                <div className="flex flex-row  justify-end items-end h-[100%] w-[100%] ">
                    <Map></Map>


                    <div className="flex flex-col absolute z-10 items-end justify-end p-4 space-y-5 h-[100%] w-[30%] ">

                       
                     <StationForm></StationForm>
                        {chartData.dates.length <= 0 && (<ChartSkelton ></ChartSkelton>)}
            {
                chartData.dates.length > 0 && (

                    <div
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{ display: 'flex', height: '100vh', alignItems: 'center' , paddingTop: '20px'}}
                >
                    <div
                        style={{
                            width,
                            height: '96%',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <button
                            onMouseDown={handleMouseDown}
                            style={{
                                width: '10px', 
                                height: '10%',
                                backgroundColor: '#3498db', 
                                cursor: 'ew-resize',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 10,
                            }}
                        />
        
                        <Card
                            className="flex flex-row bg-[#F8FCFF] self-end items-center flex-wrap p-4 border-none shadow-none"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <Chart title="Values Time Series" chartData={chartData} format="dd MMM HH" />
                            <Chart title="Standard Deviation Time Series" chartData={stdDevData} format="dd MMMM" />
                        </Card>
                    </div>
                </div>
                )
            }
        </div >
</div >
            )
            }

        </>
    );
};

export default Station;
