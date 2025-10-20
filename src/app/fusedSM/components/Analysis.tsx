import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { ListboxWrapper } from "../../tasks/ListboxWrapper";
import { Listbox, ListboxItem, Card, CardBody} from "@nextui-org/react";
import analysisIcn from "../../../assets/icons/analysis.svg";
const AnalysisCard = ({name, value, color}) => {
    return (
        <Card className="bg-bg flex  w-[26%] h-[6rem] justify-center rounded-3xl shadow-none border-gray-200 border-1 ">
            <CardBody className="flex justify-center items-center w-[100%]" >
                <div className="w-[100%] flex justify-center items-center"> {name}</div>
                <div className="flex justify-end items-center" ><span className={`font-bold text-xl  ${color}`}>{value} </span> <span className={` text-xs ${color}`}>m³/m³</span></div>
           
            </CardBody>
            </Card>
    );
    }





export default function FusedSMAnalysis() {
  const analysis = useSelector((state: RootState) => state.FusedSM.analysis);
  return (
    <div className="flex gap-2 top-0 z-[999] w-[100%] ">
    <div className="flex justify-start items-center   top-2  md rounded-2xl p-1 w-[100%] ">
      <div className="flex justify-center items-center space-x-2 text-sm w-[100%]">
        <AnalysisCard name="Min Value" value={analysis.min} color="text-green-500"/>
        <AnalysisCard name="Max Value" value={analysis.max} color="text-red-500" />
        <AnalysisCard name="Mean Value" value={analysis.mean} color="text-orange-500" />
        <AnalysisCard name="Median" value={analysis.median} color="text-blue-500" />
      </div>
    </div>
    </div>
  );
}
