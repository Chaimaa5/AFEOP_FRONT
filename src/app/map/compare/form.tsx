import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, SelectItem, Select, DateInput } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updateAbreviation, updateEndDate, updateFormData, updateHours, updateOpenModal, updateOption, updateOptions, updateRange, updateRangeDataUrls, updateRangeUrls, updateResponse, updateStartDate, updateUnit } from "../../../store/features/formSlice";
import { useEffect, useState } from "react";
import { DateValue, parseAbsoluteToLocal, parseZonedDateTime } from "@internationalized/date";

import Axios from "../../api/axios";
import { updateAddchart } from "../../../store/features/analysisSlice";
import { updateAddRaster, updateRasterBar, updateRasterUrl } from "../../../store/features/rasterSlice";
import { Alert } from "@mui/material";
import { alertInterval, setAlertMessage } from "../../../store/features/alert";


export default function CompareForm() {
    const openModal = useSelector((state: RootState) => state.form.openModal);
    const dispatch = useDispatch();
    
    const options =useSelector((state: RootState) => state.form.Options);
    const [startDate, setStartDate] = useState<DateValue>();
    const [endDate, setEndDate] = useState<DateValue>();
    const bbox = useSelector((state: RootState) => state.draw.bbox);
    const shape = useSelector((state: RootState) => state.draw.shape);
    const intervalAlt = useSelector((state: RootState) => state.alert.interval);
    const alertMessage = useSelector((state: RootState) => state.alert.message);
    const markerCoordinates = useSelector((state: RootState) => state.draw.markerCoordinates );
    const selectedOption = useSelector( (state: RootState) => state.form.selectedOption );

    const onOpenChange = () => { dispatch(updateOpenModal(false));}

    useEffect(() => {
        Axios.get("products/variables/").then((response) => {
            dispatch(updateOptions(response.data));
            // setOptions(response.data);
        });
    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();
        const start = new Date(startDate?.year, startDate?.month - 1, startDate?.day, startDate?.hour, startDate?.minute);
        const end = new Date(endDate?.year, endDate?.month - 1, endDate?.day, endDate?.hour, endDate?.minute);
        const formData = new FormData();
        dispatch(updateStartDate(JSON.stringify(start)));
        dispatch(updateEndDate(JSON.stringify(end)));
        formData.append("start_date", JSON.stringify(start));
        formData.append("end_date", JSON.stringify(end));
        formData.append("product", selectedOption);
        if (shape.type === "marker") {
            const startDateTime = new Date(start).getTime();
            const endDateTime = new Date(end).getTime();
            const timeDifference = endDateTime - startDateTime;
            if (timeDifference <= 0) {
                dispatch(alertInterval(true));
                dispatch(setAlertMessage("Please select a valid date range"))
                return;
            }
            formData.append("lat", JSON.stringify(markerCoordinates.lat));
            formData.append("lng", JSON.stringify(markerCoordinates.lng));
            Axios.post("rasters/pixel/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                if (response.status === 200) {
                    // remove all the raster related components
                    dispatch(updateAddRaster(false));
                    dispatch(updateRasterBar(false));
                    dispatch(updateRange([]));
                    dispatch(updateRangeUrls([]));
                    dispatch(updateRasterUrl(''))

                    onOpenChange();
                    dispatch(updateAddchart(true));
                    dispatch(updateResponse(response.data));
                }
               
            }).catch((error) => {    
                dispatch(alertInterval(true))
                dispatch(setAlertMessage("No data available for the selected date"))
            });
        } else if (shape.type === "polygon" || shape.type === "geojson") {
            formData.append("bbox", bbox);
            Axios.post("rasters/interval/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                if (response.status === 200) {
                    onOpenChange();
                    dispatch(updateAddRaster(false));
                    dispatch(updateRasterBar(true))
                    dispatch(updateRange(response.data.dates))
                    dispatch(updateRangeUrls(response.data.urls))
                    dispatch(updateRangeDataUrls(response.data.downloads))

                    
                }
            }).catch((error) => {    
                dispatch(alertInterval(true))
                dispatch(setAlertMessage("No data available for the selected date"))
            });
        }
       
    }


    const handleOptionSelection = (e: any) => {
        const selectedCode = e.target.value;
        const selectedObj = options.find(option => option.Code_variable === selectedCode);
        dispatch(updateAbbreviation(selectedObj.Abbreviation));
        dispatch(updateOption(selectedCode));
        dispatch(updateUnit(selectedObj.Unit));
    };

    const clearData = () => {
        dispatch(updateOption("Select a Variable"));
        dispatch(updateStartDate(""));
        dispatch(updateEndDate(""));
        dispatch(updateHours([]));
        dispatch(updateResponse([]));
        onOpenChange();
    };

    return (
        <>
            <Modal isOpen={openModal} onOpenChange={onOpenChange}  >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 items-center justify-center text-blue">Compare 2 different datasets</ModalHeader>
                    <ModalBody className="flex items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4 justify-center items-center px-2 w-[90%] h-[100%]"
                        >
                            <div className="flex flex-col space-y-1 items-start w-[90%]">
                              
                                <Select
                                    aria-label="  "
                                    // style={customStyles}
                                    placeholder="Select a Variable"
                                    labelPlacement="inside"
                                    label="Product"
                                    selectionMode="multiple"

                                    // variant="bordered"
                                    onChange={handleOptionSelection}
                                >
                                    {options.map((option) => (
                                        <SelectItem
                                            key={option.Code_variable}
                                            value={option.Code_variable}
                                        >
                                            {option.Abbreviation}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-1 items-start w-[90%]">

                                <div className="flex w-[100%] flex-wrap md:flex-nowrap gap-4">
                                    <DateInput
                                        value={startDate}
                                        label=" Start Date "
                                        hourCycle={24}
                                        // variant="bordered"
                                        defaultValue={parseAbsoluteToLocal("2022-11-07T00:45Z")}
                                        labelPlacement="inside"
                                        granularity="minute"
                                        onChange={setStartDate}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1 items-start w-[90%]">
                                <div className="flex w-[100%] flex-wrap md:flex-nowrap gap-4">
                                    <DateInput
                                        hourCycle={24}
                                        label="End Date "
                                        value={endDate}
                                        defaultValue={parseAbsoluteToLocal("2022-11-07T00:45:00Z")}
                                        labelPlacement="inside"
                                        granularity="minute"
                                        // variant="bordered"
                                        onChange={setEndDate}
                                    />
                                </div>
                            </div>
                            { intervalAlt && <Alert severity="error">{alertMessage}</Alert> }
                        </form>
                    </ModalBody>
                    <ModalFooter className="flex justify-center">
                        {/* <Button variant="bordered" className=" border-sm border-red-600 bg-[#F8FCFF] hover:bg-red-600 hover:text-white text-red-400  rounded-full px-10 w-[7rem]" onClick={clearData}>
                            Cancel
                        </Button> */}
                        <Button type="submit" className="bg-darkblue text-white rounded-full  w-[7rem]" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}