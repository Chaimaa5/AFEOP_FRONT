// import { Tabs } from "antd";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Operations from "./operations";
// import RasterData from "./rasterData";
import DownloadControl from "../tasks/download";
import arrow from "../../assets/icons/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateAddRaster, updateSideBar } from "../../store/features/rasterSlice";
import { updateView } from "../../store/features/layers";
import { useState } from "react";
import DatasetInfo from "./datasetInfo";
import FusedSMAnalysis from "./components/Analysis";
import FusionStatistics from "./components/Coverage";

export default function Dataset() {


  const tabs = [
    {
      id: '1',
      label: 'About',
      content: <DatasetInfo />,
    },
    {
      id: '2',
      label: 'Download',
      content: <Operations />,
    },
    // {
    //   id: '2',
    //   label: 'Raster Data',
    //   content: <RasterData />,
    // },
  
  ];
  return (
    <div className={`flex flex-col absolute overflow-y-auto scroll-smooth pointer-events-auto
    top-2 items-center w-[100%]  h-[95%]  rounded-3xl bg-bg p-4 m-4 'bg-white' z-[999] right-0 `}>
      
      <FusedSMAnalysis />
<FusionStatistics />
<DatasetInfo />
    </div>
  );
}


