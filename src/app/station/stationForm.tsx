import { lazy, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image, DateRangePicker, Select, SelectItem, Button, DateValue, RangeValue, Checkbox, input } from "@nextui-org/react";
import Axios from "../api/axios";
import variables from "./variables";
import "./index.scss"

import { Tooltip } from "@nextui-org/react";
import { RootState, updateChartData, updateDate, updateStdDevData, updateVariable } from "../../store/features/stationSlice";
import { useDispatch, useSelector } from "react-redux";
import { set } from "animejs";
import { ReactSVG } from "react-svg";
interface Stations {
    station_id: number;
    station_name: string;
}





export default function StationForm() {
    const [stations, setStations] = useState<Stations[]>([]);
    const dispatch = useDispatch();
    const [activeTooltip, setActiveTooltip] = useState("");

    const handlePeriodChange = (e) => {
        dispatch(updateDate(e.target.value));
        setPeriod(e.target.value);

    }

    useEffect(() => {
        Axios.get("stations/").then((response) => {
            setStations(response.data);
        });



    }, []);










    const clearAll = () => {
        dispatch(updateVariable(0));
        dispatch(updateDate(undefined));
    };
    const [start, setPeriod] = useState<RangeValue<DateValue>>();
    const variable = useSelector((state: RootState) => state.station.variable);
    const station = useSelector((state: RootState) => state.station.station);
    const period = useSelector((state: RootState) => state.station.date);

    const handleSubmit = () => {
        const requestData = {
            station: station,
            variable: variable,
            period: start,
        };

        Axios.post("stations/stddev/", requestData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(response => {
                dispatch(updateStdDevData(response.data));
            })
            .catch(error => {
                console.error('Error:', error);
            });

        Axios.post("stations/analytics/", requestData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(response => {
                dispatch(updateChartData(response.data));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <Card className="flex  flex-row flex-wrap    justify-between items-center  mt-4 bg-[#F8FCFF] border-none w-[80%] min-w-[300px] h-[14rem] shadow-none">
            <CardHeader className="flex flex-col justify-between items-center w-[100%] space-x-4 pt-4">
                <DateRangePicker
                    radius="full"
                    label="Period:"
                    calendarProps={{
                        classNames: {
                            base: "bg-background",
                            headerWrapper: "pt-4 bg-background",
                            prevButton: "border-1 border-default-200 rounded-small",
                            nextButton: "border-1 border-default-200 rounded-small",
                            gridHeader: "bg-background shadow-none border-b-1 border-default-100",
                            cellButton: [
                                "data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small",
                                // start (pseudo)
                                "data-[range-start=true]:before:rounded-l-small",
                                "data-[selection-start=true]:before:rounded-l-small",
                                // end (pseudo)
                                "data-[range-end=true]:before:rounded-r-small",
                                "data-[selection-end=true]:before:rounded-r-small",
                                // start (selected)
                                "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small",
                                // end (selected)
                                "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small",
                            ],
                        },
                    }}
                    size="sm"
                    // variant="bordered"
                    // classNames={{ input: "w-[18rem]  text-black" }}
                    className="w-[18rem]  text-black mb-4 "
                    value={start}
                    onChange={setPeriod} />
                <div className="flex  justify-center items-center align-center space-x-4 w-[100%] pt-2" style={{ margin: '0px'}}>
                    {variables.map((v) => (
                         <Tooltip
                         key={v.info}
                         showArrow
                         content={v.info}
                         placement="bottom-start"
                         className="m-0"
                         // Toggle blue background when active
                         onFocus={() => setActiveTooltip(v.info)} // Set active tooltip on focus
                         onBlur={() => setActiveTooltip(null)}   // Remove active tooltip on blur
                     >
                         <Button
                             isIconOnly
                             key={v.info}
                             className={`w-11 h-11 border-[2px] border-none ${
                                activeTooltip === v.info ? 'bg-darkblue text-white' : 'bg-white'
                            }`}
                            //  className=" bg-white"
                             onClick={() => {
                                setActiveTooltip(v.info);
                                 dispatch(updateVariable(v.var));
                             }}
                         >
                             {/* <img src={v.icon} className="w-[60%]" /> */}
                             <ReactSVG src={v.icon} className={`${
                                activeTooltip === v.info ? ' fill-white' : 'fill-blue '
                            }`}/>
                         </Button>
                     </Tooltip>
                    ))}
                </div>
            </CardHeader>
            <CardBody className="flex flex-col justify-center items-center   w-[270px]">
                <div className="flex flex-row justify-start items-center  ">
                    {/* <Button size="md" variant="bordered" onClick={clearAll} className=" border-sm border-red-600 bg-[#F8FCFF] hover:bg-red-600 hover:text-white text-red-400  rounded-full px-10 w-[7rem]" >
                        Clear
                    </Button> */}
                    <Button size="md" className="bg-darkblue text-white rounded-full  w-[17rem]" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

