import {  Slider } from "@nextui-org/react";

import { useDispatch, useSelector } from "react-redux";

import { updateOpacity } from "../../../store/features/rasterSlice";
import { setOpacity } from "../../../store/features/layers";
import { RootState } from "../../../store/store";


export default function OpacityControl() {
  const dispatch = useDispatch();
  const selectedLayer = useSelector((state: RootState) => state.layer.selectedLayer);
  const defaultOpacity = useSelector((state: RootState) => state.layer.layers[selectedLayer]?.opacity);
  const handleOpacityChange = (newValue) => {
    dispatch(setOpacity(newValue));
  };
 
  return (

   

      <Slider 
      label="Opacity" 
      step={0.01} 
      maxValue={1} 
      minValue={0} 
      value={defaultOpacity}
      defaultValue={defaultOpacity}
      onChange={handleOpacityChange}
      className="flex self-end max-w-xs font-poppins"
    />
  
    
  );
};
