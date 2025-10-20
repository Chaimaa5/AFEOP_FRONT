import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { ListboxWrapper } from "../../tasks/ListboxWrapper";
import { Listbox, ListboxItem, Card, CardBody, Progress } from "@nextui-org/react";
import analysisIcn from "../../../assets/icons/analysis.svg";
type SatelliteKey = "AMSR2" | "SMOS" | "SMAP" | "Final Product";

const AnalysisCard =  ( {name, background, color })  => {
    const key: SatelliteKey = name
    const products: Record<SatelliteKey, { spatial: string; temporal: string, accuracy: string , coverage: number}> = {
        AMSR2: {
          spatial: "25 km",
          temporal: "1–2 days",
          accuracy: "90%",
          coverage: 80
        },
        SMOS: {
          spatial: "15 km",
          temporal: "3 days",
          accuracy: "90%",
          coverage: 80

        },
        SMAP: {
          spatial: "36 km",
          temporal: "2–3 days",
          accuracy: "95%",
          coverage: 90

        },
        "Final Product": {
          spatial: "38 km",
          temporal: "1 day",
          accuracy: "95%",
          coverage: 99
        }

      };
      
      
    return (
        <Card className={`flex ${background}  w-[100%] h-[6rem] justify-center rounded-3xl  shadow-none border-gray-200 border-1`}>
            <CardBody className="flex justify-center items-center">
                <div className="flex w-[90%] justify-between">
                    <div className="flex flex-col items-start w-[100%]">
                        <div className="w-[90%] flex font-medium text-lg  font-poppins  justify-between"> {name}</div>
                        <span className={` ${color}`}>{products[key].temporal} . {products[key].spatial} </span>

                    </div>

                    <div className="flex flex-col items-end">
                        <span className={`font-medium text-xl  ${color}`}> {products[key].accuracy} </span>
                        <span className={` ${color}`}>Accuracy </span>

                    </div>
                </div>
                <Progress
                    value={products[key].coverage}
                    color={color}
                    size="sm"
                    className="w-[90%] mt-2"
                    status={color}
                    aria-label="Progress bar"
                    isIndeterminate={false}
                    isAnimated={true}
                />
                <div className="flex  justify-between items-start w-[90%]">

                    Coverage
                    <p>{products[key].coverage}%</p>
                </div>
            </CardBody>
        </Card>
    );
}






export default function FusionStatistics() {
    const analysis = useSelector((state: RootState) => state.Drought.analysis);
    const unit = useSelector((state: RootState) => state.Drought.unit);
    return (

        <div className="flex gap-2 top-0 z-[999] w-[100%] ">
            <div className="flex flex-col justify-start items-center   top-2  md rounded-2xl p-1 w-[100%] ">
                <div className="flex flex-col  justify-center items-center space-y-2 text-sm w-[100%]">
                    <AnalysisCard name="SMAP" background="bg-bg"color="primary" />
                    <AnalysisCard name="SMOS" background="bg-bg" color="success" />
                    <AnalysisCard name="AMSR2" background="bg-bg" color="warning" />
                    <AnalysisCard name="Final Product" background="bg-green-50" color="success" />
                </div>
            </div>
        </div>
    );
}
