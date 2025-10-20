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
import ChartDrag from "./chartDrag";
import TopBar from "../components/topbar";




const Map = lazy(() => import("./stationMap"));

const Station = () => {
    const { pathname } = useLocation();
    const chartData = useSelector((state: any) => state.station.chartData)
    return (
        <>
            {(pathname === '/station') && (
                <div className="flex flex-col  justify-start items-end h-[100%] w-[100%] ">
                    <Map></Map>
                    {/* <div className="flex absolute top-0 left-0 h-[50%]  z-40 pl-4 ">
            <TopBar></TopBar>
        
          </div> */}
                    <div className="flex flex-col absolute z-10 items-end justify-start px-4 h-[100%] w-[30%] ">
                        {chartData.dates.length <= 0 && (<StationForm></StationForm>)}
                        {
                            chartData.dates.length > 0 && (
                                <ChartDrag></ChartDrag>
                            )
                        }
                    </div >
                </div >
            )}
        </>
    );
};

export default Station;
