import { Button, Card, DateValue, RangeValue, Skeleton } from "@nextui-org/react";
import Chart from "./chart";
import { useEffect, useState } from "react";
import Axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../assets/icons/arrow.svg";
import { updateChartData, updateDate, updateStdDevData, updateVariable } from "../../store/features/stationSlice";
import ApexChart from "./syncChart";

interface Stations {
    station_id: number;
    station_name: string;
}


interface MeasureVariable {
    id: number;
    variable_name: string;
}
export default function ChartDrag() {
    const [isResizing, setIsResizing] = useState(false);
    const chartData = useSelector((state: any) => state.station.chartData)
    const stdDevData = useSelector((state: any) => state.station.updateStdDevData)

    const dispatch = useDispatch();


    const handleMouseUp = () => {
        setIsResizing(!isResizing);
    };

    const clearAll = () => {
        dispatch(updateVariable(""));
        dispatch(updateDate(undefined));
        dispatch(updateChartData({ dates: [], values: [], date_labels: [] }));
        dispatch(updateStdDevData({ dates: [], values: [], date_labels: [] }));
    };

    return (
        <div className="flex flex-row relative justify-center items-center max-w-[1400px] h-[100vh] bg-black py-2">
            <div className="flex flex-row relative justify-center items-center w-full h-[96%]">
                <button
                    onClick={handleMouseUp}
                    className={`flex justify-center items-center absolute left-[-17.5px] top-[50%] transform -translate-y-1/2 h-[35px] w-[35px] z-10 bg-[#1F3D3D] text-white rounded-full ${isResizing ? 'cursor-e-resize' : 'cursor-w-resize'
                        }`}
                >
                    <img src={arrow} className={`w-[60%] ${isResizing ? 'rotate-180' : ''}`} />
                </button>

                <Card
                    className={`flex flex-row bg-[#F8FCFF] items-center flex-wrap p-4 border-none h-[100%] shadow-none transition-all duration-300 ease-in-out ${isResizing ? 'w-[96rem]' : 'w-[30rem]'
                        }`}
                    style={{ transition: 'width 0.3s ease-in-out' }}
                >
                    <Button className={`flex rounded-full bg-red-600 text-white self-start w-[6rem] px-4  mb-10`} size="md" onClick={clearAll}>
                        Return            
                     <img src={arrow} className={`w-[40%] rotate-180 `} />
                    </Button>
                    {/* <ApexChart></ApexChart> */}
                    <Chart title="Values Time Series" chartData={chartData} format='dd MMM HH' />
                    <Chart title="Standard deviation Time Series" chartData={stdDevData} format='dd MMMM' />
                </Card>
            </div>
        </div>

    );
}