import { Button, Popover, PopoverContent, PopoverTrigger, Slider, Tooltip } from "@nextui-org/react";
import CarouselComponent from "./carousel";
import './index.css'
import SingleRaster from "./raster";
import { useDispatch, useSelector } from "react-redux";
import { updateAddRaster, updateRasterUrl, updateSideBar } from "../../store/features/rasterSlice";
import { addOrUpdateLayer, updateLayerIndex } from "../../store/features/layers";
import { memo, useEffect, useRef, useState } from "react";
import { RootState } from "../../store/store";
import { alertInterval, setAlertMessage } from "../../store/features/alert";
import Axios from "../api/axios";


function formatDateFromRaster(raster) {
  // Step 1: Extract the year and Julian day
  const prefixRemoved = raster.split(':')[1];  // Removes the 'SM:' part
  const year = parseInt(prefixRemoved.substring(0, 4), 10);
  const julianDay = parseInt(prefixRemoved.substring(4), 10);

  // Step 2: Convert Julian day to regular date
  const date = new Date(year, 0);  // Start at January 1st of the given year
  date.setDate(date.getDate() + julianDay - 1);  // Add the Julian day

  // Format the date as YYYY-MM-DD
  const formattedDate = date.toISOString().substring(0, 10);

  return formattedDate;
}


const Rasters = memo(function RastersComponent()  {
  const rangeData = useSelector((state: any) => state.form.rangeData);
  const currentIndex = useSelector((state:RootState) => state.layer.currentLayerIndex);
  const rangeUrl = useSelector((state: RootState) => state.form.rangeUrl);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const selectedOption = useSelector( (state: RootState) => state.form.selectedOption );
  const variableData = useSelector((state: any) => state.analysis.variableData);
  const handlePopoverToggle = () => {
    setIsPopoverOpen(true);
  };
  const dispatch = useDispatch();
  const formData =new FormData();
  const shape = useSelector((state: RootState) => state.draw.shape);
  const [rasterName, setRasterName] = useState();
  const handleSliderChange = (newValue) => {

    if (newValue !== currentIndex) { // Only update if the value changes

      formData.append("layer", rangeUrl[newValue]);
      formData.append("polygon", JSON.stringify(shape.coordinates));
      formData.append("product", selectedOption);
      Axios.post("rasters/polygon/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        if (response.status === 200) {
          dispatch(
            addOrUpdateLayer({
              name: 'Raster',
              settings: {
                opacity: 1,      
                colorRamp: 'yellow',
                view: true 
              },
            }))
            // dispatch(updateRasterUrl(rangeUrl[newValue]));

            dispatch(updateRasterUrl(response.data.url));
            dispatch(updateLayerIndex(newValue));
            dispatch(updateAddRaster(true));
            dispatch(updateSideBar(true));

        }
    }).catch((error) => {    
        dispatch(alertInterval(true))
        dispatch(setAlertMessage("No data available for the selected date"))
    });
    
    
  
       }
       
      
    
 };
  

 useEffect(() => {
  setIsPopoverOpen(true);
  if (currentIndex !== 0){
    setRasterName(rangeUrl[currentIndex])
  }
    

  }, [currentIndex]);
  return (

    <>
    {rangeData.length > 0 && 
    <>
        <Popover
        aria-label="popover"
        isOpen={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        placement="top-start"
      >
      <PopoverTrigger>

        <Slider   
        size="md"
        step={1}
        color="success"
        label=""
        aria-label="slider"
        showSteps={true} 
        maxValue={rangeData.length-1} 
        minValue={0} 
        value={currentIndex}
        defaultValue={rangeData[1]}
        className=" w-[100%]  text-white   " 
        onChange={handleSliderChange}
        onClick={handlePopoverToggle}
      />
      </PopoverTrigger>
      {rasterName &&
      <PopoverContent  >
        <div className="px-1 py-2">
          <div className="text-small font-bold">{variableData.Abbreviation}</div>
          <div className="text-tiny">Date : {formatDateFromRaster(rasterName)}</div>

        </div>
      </PopoverContent>
      }
    </Popover>
        <CarouselComponent></CarouselComponent>
    </>
    }
    </>
  );
})

export default Rasters;


