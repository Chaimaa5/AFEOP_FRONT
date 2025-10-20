import { Card, CardBody, Listbox, ListboxItem, useSelect } from "@nextui-org/react";
import { ListboxWrapper } from "../ListboxWrapper";
import { useEffect, useState } from "react";
import Axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updateAnalysisData } from "../../../store/features/analysisSlice";
import Titiler from "../../api/titiler";


const AnalysisCard = ({name, value, color}) => {
    return (
        <Card className="bg-bg flex items-center w-[26%] h-[6rem] justify-center rounded-3xl shadow-none border-gray-200 border-1 ">
            <CardBody className="flex justify-center items-center w-[100%]" >
                <div className="w-[100%] flex justify-center items-center"> {name}</div>
                <div className="flex justify-center items-center" ><span className={`font-bold text-xl  ${color}`}>{value} </span> <span className={` text-xs ${color}`}>m³/m³</span></div>
           
            </CardBody>
            </Card>
    );
    }

    
export default function Analysis() {
    const min = useSelector((state: RootState) => state.analysis.min);
    const max = useSelector((state: RootState) => state.analysis.max);
    const mean = useSelector((state: RootState) => state.analysis.mean);
    const std = useSelector((state: RootState) => state.analysis.std);
    const median = useSelector((state: RootState) => state.analysis.median);
    let url = '';
    const rasterUrl = useSelector((state: RootState) => state.raster.rasterUrl);
    useEffect(() => {
        const match = rasterUrl.match(/SM:(\d{8})/);

        if (match && match[1]) {
            url = `${match[1]}.tif`;
        } 

    }
        , []);
    return (

        <div className="flex gap-2 top-0 z-[999] w-[100%] ">
        <div className="flex justify-start items-center   top-2  md rounded-2xl p-1 w-[100%] ">
          <div className="flex justify-center items-center space-x-2 text-sm w-[100%]">
            <AnalysisCard name="Min Value" value={min} color="text-green-500"/>
            <AnalysisCard name="Max Value" value={max} color="text-red-500" />
            <AnalysisCard name="Mean Value" value={mean} color="text-orange-500" />
            <AnalysisCard name="Standard Deviation" value={std} color="text-blue-500" />
          </div>
        </div>
        </div>
    );
}