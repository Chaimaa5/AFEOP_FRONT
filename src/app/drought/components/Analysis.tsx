import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { ListboxWrapper } from "../../tasks/ListboxWrapper";
import { Listbox, ListboxItem, Card, CardBody} from "@nextui-org/react";
import analysisIcn from "../../../assets/icons/analysis.svg";
const AnalysisCard = ({name, value, color}) => {
    return (
        <Card className="bg-bg flex  w-[25%] h-[6rem] justify-center rounded-3xl ">
            <CardBody className="flex justify-center items-center">
                <div className=""> {name}</div>
                <div ><span className={`font-bold text-xl  ${color}`}>{value} </span></div>
           
            </CardBody>
            </Card>
    );
    }



// export default function DroughtStatsPanel({ min, max, mean, std, unit }) {
//   return (
//     <div className="absolute top-4 right-4 backdrop-blur-md bg-white/70 shadow-xl rounded-2xl p-4 w-72 border border-white/30">
//       <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//         <span className="text-blue-500 text-xl">📊</span>
//         Drought Statistics
//       </h3>
//       <div className="space-y-3 text-sm">
//         <StatRow label="Min Value" value={min} unit={unit} />
//         <StatRow label="Max Value" value={max} unit={unit} />
//         <StatRow label="Mean Value" value={mean} unit={unit} />
//         <StatRow label="Std Deviation" value={std} unit={unit} />
//       </div>
//     </div>
//   );
// }

function StatRow({ label, value, unit }) {
  return (
    <div className="flex justify-between items-center px-3 py-2 rounded-xl ">
      <span className="font-medium text-gray-600">{label}</span>
      <span className=" font-bold `${}`">
        {value} <span className="text-xs text-gray-500">{unit}</span>
      </span>
    </div>
  );
}

export default function DroughtAnalysis() {
  const analysis = useSelector((state: RootState) => state.Drought.analysis);
  const unit = useSelector((state: RootState) => state.Drought.unit);
  return (

    <div className="flex gap-4 top-0 z-[999]  ">
    <div className="flex justify-start items-center   top-2 right-4 md rounded-2xl p-4 w-[100%] ">

      <div className="flex justify-center items-center space-x-2 text-sm w-[100%]">
        <AnalysisCard name="Min Value" value={analysis.min} color="text-green-500"/>
        <AnalysisCard name="Max Value" value={analysis.max} color="text-red-500" />
        <AnalysisCard name="Mean Value" value={analysis.mean} color="text-orange-500" />
        <AnalysisCard name="Std Deviation" value={analysis.std} color="text-blue-500" />

      {/* <ListboxWrapper  >

<Listbox aria-label="Listbox menu with descriptions" className="text-black"  color="success">
    <ListboxItem key="crs" showDivider description={`${analysis.min} ${unit}`}  classNames={{description: 'flex seld-end absolute left-32'}}   className="flex flex-col"> Min Value</ListboxItem>
    <ListboxItem key="compression" showDivider  description={`${analysis.max} ${unit}`}  classNames={{description: 'flex seld-end absolute left-32'}}   >  Max Value </ListboxItem>
    <ListboxItem key="block" showDivider  description={`${analysis.mean} ${unit}`}  classNames={{description: 'flex seld-end absolute left-32'}}  > Mean Value </ListboxItem>
    <ListboxItem key="bounds"  description={`${analysis.std} ${unit}`}  classNames={{description: 'flex seld-end absolute left-32'}}    >  Standard Deviation</ListboxItem>
  
</Listbox>
</ListboxWrapper> */}

{/* 
        <StatRow label="Min Value" value={analysis.min} unit={unit} />
        <StatRow label="Max Value" value={analysis.max} unit={unit} />
        <StatRow label="Mean Value" value={analysis.mean} unit={unit} />
        <StatRow label="Std Deviation" value={analysis.std} unit={unit} /> */}
      </div>
    </div>
    </div>
  );
}
